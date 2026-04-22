import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Air Sampling Supplies | SporeCount",
  description:
    "Shop professional-grade air sampling equipment and supplies. Sporecount pump kits, AirTrap XL cassettes, and accessories for environmental testing professionals.",
};

const products = [
  {
    id: "pump-kit",
    name: "Sporecount Professional Air Sampling Pump Kit",
    badge: "Revised for 2025!",
    badgeClass: "bg-green text-white",
    price: "$299.00 CAD",
    priceNote: "Complete kit",
    description:
      "Our best-selling sampling pump has undergone a number of internal improvements for 2025!",
    features: [
      "5-minute one-touch sampling cycle with LED timer display",
      "Compatible with Air-O-Cell and Posi-Track cassettes",
      "Plug-in and battery pack compatible*",
      "Adjustable calibration",
      "Tripod ready",
    ],
    included: [
      "Sporecount professional air sampling pump",
      "12v wall adaptor with international outlet adaptors",
      "Calibration rotameter",
      "Calibration adaptors for AirTrap, Air-O-Cell, and Allergenco sampling cassettes",
      "Calibration adjustment screwdriver",
    ],
  },
  {
    id: "cassette-single",
    name: "AirTrap XL Air Sampling Cassette – Individual",
    badge: null,
    badgeClass: "",
    price: "$6.50 CAD",
    priceNote: "Per cassette",
    description:
      "AirTrap XL air sampling cassettes are fully compatible with the Sporecount professional air sampling pump, and the preferred sampling cassettes for Sporecount analysis!",
    features: [
      "Fully compatible with Sporecyte pump",
      "Preferred cassette for Sporecyte analysis",
      "High-quality Apacor design",
      "Professional-grade construction",
    ],
    included: null,
  },
  {
    id: "cassette-24pack",
    name: "AirTrap XL Air Sampling Cassette – 24 Pack",
    badge: "Best Value",
    badgeClass: "bg-blue text-white",
    price: "$146.00 CAD",
    priceNote: "Box of 24 cassettes",
    description:
      "AirTrap XL air sampling cassettes are fully compatible with the Sporecount professional air sampling pump, and the preferred sampling cassettes for Sporecount analysis!",
    features: [
      "Box of 24 Apacor AirTrap XL cassettes",
      "Fully compatible with Sporecyte pump",
      "Bulk pricing advantage",
      "Professional laboratory use",
    ],
    included: null,
  },
];

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg className="h-4 w-4 text-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 30%, #3B5BDB 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue-light text-sm font-medium mb-6">
            Professional-Grade Equipment
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Air Sampling{" "}
            <span className="text-blue-light">Supplies</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            High-quality equipment and supplies for environmental testing professionals.
            All products are designed for precision, reliability, and ease of use.
          </p>
          <div className="mt-10">
            <a
              href="mailto:windsorlab@brslab.com?subject=Supplies Order Inquiry"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Email Us to Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Professional Air Sampling Solutions
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need for accurate, professional air quality testing.
          </p>
        </div>

        <div className="space-y-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-light-border shadow-sm overflow-hidden"
            >
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-navy flex-1">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold shrink-0 ${product.badgeClass}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                <p className="text-text-secondary mb-6">{product.description}</p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <CheckIcon />
                          <span className="text-sm text-text-secondary">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {product.included && (
                    <div>
                      <h4 className="text-sm font-semibold text-navy uppercase tracking-wider mb-3">
                        Included in Kit
                      </h4>
                      <ul className="space-y-2">
                        {product.included.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <BoxIcon />
                            <span className="text-sm text-text-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-light-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-3xl font-bold text-green">{product.price}</span>
                    <span className="ml-2 text-sm text-text-muted">{product.priceNote}</span>
                  </div>
                  <a
                    href={`mailto:windsorlab@brslab.com?subject=Order Inquiry: ${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-blue text-white text-sm font-semibold rounded-lg hover:bg-blue-dark transition-colors"
                  >
                    Order This Item
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Order?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Contact us directly to place your order or for any questions about our products.
          We&apos;ll respond promptly to process your order and answer any questions.
        </p>
        <a
          href="mailto:windsorlab@brslab.com?subject=Supplies Order Inquiry"
          className="inline-flex items-center justify-center px-8 py-4 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors text-lg"
        >
          Email Us to Order
        </a>
        <p className="mt-4 text-sm text-gray-500">windsorlab@brslab.com</p>
      </div>
    </section>
  );
}

export default function SuppliesPage() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <CTASection />
    </>
  );
}
