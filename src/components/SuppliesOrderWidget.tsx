"use client";

// Phase 5 (BILLING-ROADMAP.md, sporecount-agri-app repo) — the order form
// that replaced the mailto: "Order This Item" / "Email Us to Order" buttons
// on /supplies. There's no account system or checkout flow on this site, so
// this calls back into the main sporecount-agri-app backend (one Stripe
// integration, one place secrets live — see the roadmap) which creates and
// emails a real Stripe Invoice. This component never sees a Stripe key or
// any price it can actually charge: it only ever sends
// { email, items: [{ productId, quantity }, ...] }, and the backend looks
// the real price up server-side from its own fixed catalog
// (backend/backend/services/suppliesCatalog.js) — so even if this code were
// tampered with to send a fake amount, the backend would ignore it. The
// per-line and running-total dollar figures shown below are for display
// only (parsed from the same price strings the page already renders) and
// are never sent anywhere — the actual charge always comes from the
// backend's own catalog.
//
// A real multi-item cart: a customer can add several different products
// (and adjust quantity per line) before submitting one order/one invoice,
// not just a single product+quantity picker. The backend route already
// accepted an `items` array from the start (up to 10 distinct line items,
// qty 1-100 each, 500 total) — this was previously only ever sending one.
//
// Two ways to finish: "Request invoice" (above) or "Pay now by card", which
// calls POST /api/public/supplies-checkout and redirects to a Stripe-hosted
// payment page (same server-side catalog and price rules).
//
// Needs NEXT_PUBLIC_API_BASE_URL set to the sporecount-agri-app backend's
// public URL (e.g. https://sporecount-agri-app-production.up.railway.app or
// similar) — see .env.example at the repo root. That's a Vercel project
// setting for this site, not something this code can configure.

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type SuppliesProduct = {
  id: string;
  name: string;
  price: string;
};

type CartLine = {
  productId: string;
  quantity: number;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

type OrderContextValue = {
  isOpen: boolean;
  products: SuppliesProduct[];
  openOrderForm: (productId?: string) => void;
  closeOrderForm: () => void;
};

const MAX_LINE_ITEMS = 10;
const MAX_QUANTITY_PER_ITEM = 100;

const OrderContext = createContext<OrderContextValue | null>(null);

function useOrderContext(): OrderContextValue {
  const ctx = useContext(OrderContext);
  if (!ctx) {
    throw new Error("useOrderContext must be used within SuppliesOrderProvider");
  }
  return ctx;
}

// Display-only: pulls the first dollar-looking number out of a price
// string like "$299.00 CAD" so the cart can show a running total. Never
// sent to the backend, and falls back to 0 (shown as "—") rather than
// guessing if a price string doesn't parse, so a formatting change on the
// page can't silently show a wrong total.
function parseDisplayPrice(price: string): number | null {
  const match = price.replace(/,/g, "").match(/[\d]+(?:\.\d+)?/);
  if (!match) return null;
  const n = Number(match[0]);
  return Number.isFinite(n) ? n : null;
}

export function SuppliesOrderProvider({
  products,
  children,
}: {
  products: SuppliesProduct[];
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialProductId, setInitialProductId] = useState<string | undefined>(undefined);

  const openOrderForm = (productId?: string) => {
    setInitialProductId(productId);
    setIsOpen(true);
  };
  const closeOrderForm = () => setIsOpen(false);

  const value = useMemo(
    () => ({ isOpen, products, openOrderForm, closeOrderForm }),
    [isOpen, products]
  );

  return (
    <OrderContext.Provider value={value}>
      {children}
      {isOpen && <OrderModal initialProductId={initialProductId} />}
    </OrderContext.Provider>
  );
}

// Drop-in replacement for the old mailto: "Order This Item" / "Email Us to
// Order" anchors — same visual slot, same className prop. Opens the shared
// cart modal with this product already added (qty 1) when a productId is
// given, or empty when opened from a generic "Order Supplies" button.
export function OrderTriggerButton({
  productId,
  className,
  children,
}: {
  productId?: string;
  className?: string;
  children: ReactNode;
}) {
  const { openOrderForm } = useOrderContext();
  return (
    <button type="button" onClick={() => openOrderForm(productId)} className={className}>
      {children}
    </button>
  );
}

function OrderModal({ initialProductId }: { initialProductId?: string }) {
  const { products, closeOrderForm } = useOrderContext();

  const [cart, setCart] = useState<CartLine[]>(() =>
    initialProductId ? [{ productId: initialProductId, quantity: 1 }] : []
  );
  const [addProductId, setAddProductId] = useState<string>(
    products.find((p) => p.id !== initialProductId)?.id ?? products[0]?.id ?? ""
  );
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [action, setAction] = useState<"invoice" | "pay">("invoice");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const productById = useMemo(() => new Map(products.map((p) => [p.id, p])), [products]);

  const total = cart.reduce((sum, line) => {
    const product = productById.get(line.productId);
    const unit = product ? parseDisplayPrice(product.price) : null;
    return unit === null ? sum : sum + unit * line.quantity;
  }, 0);
  const totalIsComplete = cart.every((line) => {
    const product = productById.get(line.productId);
    return product ? parseDisplayPrice(product.price) !== null : false;
  });

  function addLine(productId: string) {
    if (!productId) return;
    setCart((prev) => {
      const existing = prev.find((l) => l.productId === productId);
      if (existing) {
        return prev.map((l) =>
          l.productId === productId
            ? { ...l, quantity: Math.min(MAX_QUANTITY_PER_ITEM, l.quantity + 1) }
            : l
        );
      }
      if (prev.length >= MAX_LINE_ITEMS) return prev;
      return [...prev, { productId, quantity: 1 }];
    });
  }

  function updateQuantity(productId: string, quantity: number) {
    const clamped = Math.max(1, Math.min(MAX_QUANTITY_PER_ITEM, quantity || 1));
    setCart((prev) => prev.map((l) => (l.productId === productId ? { ...l, quantity: clamped } : l)));
  }

  function removeLine(productId: string) {
    setCart((prev) => prev.filter((l) => l.productId !== productId));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (cart.length === 0) {
      setStatus("error");
      setErrorMessage("Add at least one item to your order first.");
      return;
    }
    setAction("invoice");
    setStatus("submitting");
    setErrorMessage("");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBaseUrl) {
      setStatus("error");
      setErrorMessage(
        "Ordering isn't configured yet on this site. Please email windsorlab@brslab.com to order instead."
      );
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/public/supplies-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          items: cart.map(({ productId, quantity }) => ({ productId, quantity })),
        }),
      });

      // A non-2xx response is a FAILED submission — never shown as success.
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(
          data?.error || "We couldn't submit your order. Please try again or email windsorlab@brslab.com."
        );
        return;
      }

      setStatus("success");
    } catch {
      // Network failure, CORS, DNS, etc — still a failure, not a success.
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the order service. Please check your connection and try again, or email windsorlab@brslab.com."
      );
    }
  }

  // "Pay now by card": the backend builds a Stripe-hosted payment page from its
  // own catalog and returns only the URL; we send the browser there. Email is
  // optional here because Stripe asks for it on that page.
  async function handlePayNow() {
    if (cart.length === 0) {
      setStatus("error");
      setErrorMessage("Add at least one item to your order first.");
      return;
    }
    setAction("pay");
    setStatus("submitting");
    setErrorMessage("");

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!apiBaseUrl) {
      setStatus("error");
      setErrorMessage(
        "Online payment isn't configured yet on this site. Please request an invoice instead, or email windsorlab@brslab.com."
      );
      return;
    }

    try {
      const response = await fetch(`${apiBaseUrl}/api/public/supplies-checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim() || undefined,
          items: cart.map(({ productId, quantity }) => ({ productId, quantity })),
        }),
      });
      const data = await response.json().catch(() => null);
      if (!response.ok || !data?.url) {
        setStatus("error");
        setErrorMessage(
          data?.error || "We couldn't start your payment. Please try again, or request an invoice instead."
        );
        return;
      }
      // Leaving the page for Stripe — keep the "submitting" state until it unloads.
      window.location.assign(data.url);
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn't reach the order service. Please check your connection and try again, or email windsorlab@brslab.com."
      );
    }
  }

  const availableToAdd = products.filter((p) => !cart.some((l) => l.productId === p.id));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="supplies-order-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeOrderForm();
      }}
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-xl my-auto">
        <div className="flex items-start justify-between gap-4 mb-6">
          <h2 id="supplies-order-heading" className="text-xl font-bold text-navy">
            {status === "success" ? "Order received" : "Order supplies"}
          </h2>
          <button
            type="button"
            onClick={closeOrderForm}
            aria-label="Close"
            className="text-text-muted hover:text-navy -mt-1 -mr-1 p-1"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div>
            <p className="text-text-secondary">
              Thanks! Check your email ({email.trim()}) for an invoice from Stripe — pay it from that email
              to complete your order.
            </p>
            <button
              type="button"
              onClick={closeOrderForm}
              className="mt-6 w-full inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Cart lines */}
            <div>
              <h3 className="text-sm font-semibold text-navy uppercase tracking-wider mb-2">Your order</h3>
              {cart.length === 0 ? (
                <p className="text-sm text-text-muted italic">No items added yet.</p>
              ) : (
                <ul className="space-y-2">
                  {cart.map((line) => {
                    const product = productById.get(line.productId);
                    if (!product) return null;
                    return (
                      <li
                        key={line.productId}
                        className="flex items-center gap-3 rounded-lg border border-light-border px-3 py-2.5"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-navy truncate">{product.name}</p>
                          <p className="text-xs text-text-muted">{product.price} each</p>
                        </div>
                        <input
                          type="number"
                          min={1}
                          max={MAX_QUANTITY_PER_ITEM}
                          step={1}
                          value={line.quantity}
                          onChange={(e) => updateQuantity(line.productId, Number(e.target.value))}
                          aria-label={`Quantity for ${product.name}`}
                          className="w-16 rounded-md border border-light-border px-2 py-1.5 text-sm text-navy text-center focus:outline-none focus:ring-2 focus:ring-blue/40"
                        />
                        <button
                          type="button"
                          onClick={() => removeLine(line.productId)}
                          aria-label={`Remove ${product.name}`}
                          className="text-text-muted hover:text-red-600 p-1"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}

              {cart.length > 0 && (
                <p className="mt-2 text-sm text-text-secondary text-right">
                  Estimated total:{" "}
                  <span className="font-semibold text-navy">
                    {totalIsComplete ? `$${total.toFixed(2)}` : "—"}
                  </span>
                  <span className="text-xs text-text-muted"> (final total confirmed at payment or on your invoice)</span>
                </p>
              )}
            </div>

            {/* Add another item */}
            {availableToAdd.length > 0 && cart.length < MAX_LINE_ITEMS && (
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label htmlFor="supplies-add-product" className="block text-sm font-medium text-navy mb-1.5">
                    Add an item
                  </label>
                  <select
                    id="supplies-add-product"
                    value={addProductId}
                    onChange={(e) => setAddProductId(e.target.value)}
                    className="w-full rounded-lg border border-light-border px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-blue/40"
                  >
                    {availableToAdd.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} — {p.price}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => addLine(addProductId)}
                  className="inline-flex items-center justify-center px-4 py-2.5 bg-blue/10 text-blue text-sm font-semibold rounded-lg hover:bg-blue/20 transition-colors"
                >
                  Add
                </button>
              </div>
            )}
            {cart.length >= MAX_LINE_ITEMS && (
              <p className="text-xs text-text-muted">
                You&apos;ve reached the limit of {MAX_LINE_ITEMS} different items per order — contact us directly for a larger order.
              </p>
            )}

            <div>
              <label htmlFor="supplies-order-email" className="block text-sm font-medium text-navy mb-1.5">
                Email address
              </label>
              <input
                id="supplies-order-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-light-border px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-blue/40"
              />
              <p className="mt-1.5 text-xs text-text-muted">
                Needed if you want an invoice — we&apos;ll send one here for everything in your order. If you pay by card instead, you can leave this blank and enter it on the payment page.
              </p>
            </div>

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              type="button"
              onClick={handlePayNow}
              disabled={status === "submitting" || cart.length === 0}
              className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" && action === "pay" ? "Taking you to secure payment…" : "Pay now by card"}
            </button>
            <button
              type="submit"
              disabled={status === "submitting" || cart.length === 0}
              className="w-full inline-flex items-center justify-center px-5 py-2.5 border border-blue text-blue text-sm font-semibold rounded-lg hover:bg-blue/5 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" && action === "invoice" ? "Submitting…" : "Request an invoice instead"}
            </button>
            <p className="text-xs text-text-muted text-center">
              Card payments are handled by Stripe — we never see your card number. You&apos;ll enter your shipping address on the payment page.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
