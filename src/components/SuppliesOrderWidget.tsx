"use client";

// Phase 5 (BILLING-ROADMAP.md, sporecount-agri-app repo) — the order form
// that replaced the mailto: "Order This Item" / "Email Us to Order" buttons
// on /supplies. There's no account system or checkout flow on this site, so
// this calls back into the main sporecount-agri-app backend (one Stripe
// integration, one place secrets live — see the roadmap) which creates and
// emails a real Stripe Invoice. This component never sees a Stripe key or
// any price: it only ever sends { email, items: [{ productId, quantity }] },
// and the backend looks the real price up server-side from its own fixed
// catalog (backend/backend/services/suppliesCatalog.js) — so even if this
// code were tampered with to send a fake amount, the backend would ignore it.
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

type FormStatus = "idle" | "submitting" | "success" | "error";

type OrderContextValue = {
  isOpen: boolean;
  products: SuppliesProduct[];
  openOrderForm: (productId?: string) => void;
  closeOrderForm: () => void;
};

const OrderContext = createContext<OrderContextValue | null>(null);

function useOrderContext(): OrderContextValue {
  const ctx = useContext(OrderContext);
  if (!ctx) {
    throw new Error("useOrderContext must be used within SuppliesOrderProvider");
  }
  return ctx;
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
// Order" anchors — same visual slot, same className prop, just opens the
// shared modal instead of composing an email.
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

  const [productId, setProductId] = useState<string>(initialProductId ?? products[0]?.id ?? "");
  const [quantity, setQuantity] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const selectedProduct = products.find((p) => p.id === productId);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
          items: [{ productId, quantity }],
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="supplies-order-heading"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeOrderForm();
      }}
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="supplies-order-product" className="block text-sm font-medium text-navy mb-1.5">
                Product
              </label>
              <select
                id="supplies-order-product"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
                className="w-full rounded-lg border border-light-border px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-blue/40"
              >
                {products.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — {p.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="supplies-order-quantity" className="block text-sm font-medium text-navy mb-1.5">
                Quantity
              </label>
              <input
                id="supplies-order-quantity"
                type="number"
                min={1}
                max={100}
                step={1}
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, Math.min(100, Number(e.target.value) || 1)))}
                required
                className="w-full rounded-lg border border-light-border px-3 py-2.5 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-blue/40"
              />
            </div>

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
                We&apos;ll send your invoice here — it&apos;s how Stripe knows who to bill.
              </p>
            </div>

            {selectedProduct && (
              <p className="text-sm text-text-secondary">
                Ordering <span className="font-semibold text-navy">{quantity}</span> ×{" "}
                {selectedProduct.name} ({selectedProduct.price} each)
              </p>
            )}

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting…" : "Request invoice"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
