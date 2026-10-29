import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed | SporeCount",
  robots: { index: false },
};

export default function SuppliesSuccessPage() {
  return (
    <section className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-navy mb-4">Thank you — your order is confirmed</h1>
      <p className="text-text-secondary mb-3">
        Your payment went through and a receipt is on its way to your inbox. We&apos;ll prepare your supplies
        and ship them to the address you entered at checkout.
      </p>
      <p className="text-text-secondary mb-8">
        Questions about your order? Email{" "}
        <a className="text-blue underline" href="mailto:windsorlab@brslab.com">windsorlab@brslab.com</a>.
      </p>
      <Link
        href="/supplies"
        className="inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-dark transition-colors"
      >
        Back to supplies
      </Link>
    </section>
  );
}
