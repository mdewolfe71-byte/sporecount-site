import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #3B5BDB 1px, transparent 1px), radial-gradient(circle at 75% 75%, #7C3AED 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue-light text-sm font-medium mb-8">
            AI-Powered Air Quality Testing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Know What You&apos;re{" "}
            <span className="text-blue-light">Breathing.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Next-day results. Comprehensive analysis. Powered by cutting-edge AI
            technology. Professional air quality testing for homes, inspectors,
            and agriculture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "AI-Enhanced Analysis", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
              { label: "Next-Day Results", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
              { label: "182 Contaminants", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5" },
              { label: "Lab-Certified", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
              >
                <svg className="w-4 h-4 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-air-testing"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Explore Solutions
            </Link>
            <a
              href="https://app.sporecyte.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/20"
            >
              Client Portal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "AI-Enhanced Analysis",
    "Next-Day Results",
    "182 Contaminants Identified",
    "Lab-Certified",
    "US & Canada Operations",
  ];

  return (
    <section className="bg-light-bg border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue" />
              <span className="text-sm font-medium text-text-secondary">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const solutions = [
    {
      name: "SporeCount Home",
      tagline: "Residential Air Quality Testing",
      description:
        "Professional air quality testing for residential properties in Canada. Powered by Sporecyte AI for cutting-edge detection with certified environmental professionals on-site.",
      features: [
        "Powered by Sporecyte AI",
        "Professional collection on-site",
        "Comprehensive Certificate of Analysis",
        "Quick turnaround — next-day results",
        "Over a year of proven operations",
      ],
      href: "/home-air-testing",
      linkText: "Learn More",
      color: "blue" as const,
      availability: "Canada Only",
    },
    {
      name: "AQ Professional",
      tagline: "For Home Inspectors",
      description:
        "Entry-level air quality screening designed for home inspectors. Use your existing equipment — standard air pump and cassette — and add a new revenue stream to your business.",
      features: [
        "Entry to whole-house testing",
        "Use equipment you already have",
        "Science-based, actionable results",
        "Next-day results with API integration",
        "$40–65 profit per test",
      ],
      href: "/aq-professional",
      linkText: "Learn More",
      color: "purple" as const,
      availability: "US & Canada",
    },
    {
      name: "SporeCount Agricultural",
      tagline: "Greenhouse & Food Production",
      description:
        "Precision microbial monitoring for greenhouses and food production. Center-baseline pathogen detection focused on the 30 key agricultural threats.",
      features: [
        "30 key pathogens detected",
        "Powdery mildew early detection",
        "Next-day results for crop protection",
        "FSMA/HACCP compliant",
        "Actionable intelligence for decisions",
      ],
      href: "/agricultural-testing",
      linkText: "Learn More",
      color: "green" as const,
      availability: "Worldwide",
    },
  ];

  const colorMap = {
    blue: {
      border: "border-t-blue",
      title: "text-blue",
      icon: "text-blue",
      bg: "bg-blue/5",
    },
    purple: {
      border: "border-t-purple",
      title: "text-purple",
      icon: "text-purple",
      bg: "bg-purple/5",
    },
    green: {
      border: "border-t-green",
      title: "text-green",
      icon: "text-green",
      bg: "bg-green/5",
    },
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Three Solutions, One Mission: Clean Air
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you&apos;re a homeowner, inspector, or agricultural
            professional — we have the right testing solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const colors = colorMap[solution.color];
            return (
              <div
                key={solution.name}
                className={`group bg-white border border-light-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 ${colors.border}`}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-xl font-bold ${colors.title}`}>
                      {solution.name}
                    </h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.bg} ${colors.title}`}>
                      {solution.availability}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${colors.icon}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-sm text-text-secondary">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.href}
                    className={`inline-flex items-center text-sm font-semibold ${colors.title} group-hover:underline transition-colors`}
                  >
                    {solution.linkText}
                    <svg
                      className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhySporeCountSection() {
  const features = [
    {
      title: "AI-Powered Accuracy",
      description:
        "Partnership with Techcyte and Sporecyte brings cutting-edge machine learning to every analysis. Consistent, reliable results you can trust.",
      icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z",
    },
    {
      title: "Speed That Matters",
      description:
        "Next-business-day results mean faster decisions. No waiting weeks for critical information about air quality.",
      icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "Research-Backed",
      description:
        "Partnership with Dr. John F. Trant at University of Windsor ensures scientific rigor and ongoing innovation.",
      icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    },
    {
      title: "Dual-Licensed Labs",
      description:
        "Fully accredited laboratories in Windsor, Ontario and Canton, Michigan. Cross-border capability for seamless US and Canada operations.",
      icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Why Choose SporeCount?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 bg-blue/10 rounded-2xl flex items-center justify-center mb-5 mx-auto">
                <svg
                  className="w-7 h-7 text-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={feature.icon}
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Transform Your Air Quality Testing?
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Join environmental professionals and agricultural operations across
            Canada and the US who trust SporeCount for accurate, rapid air
            quality analysis.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home-air-testing"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Residential Testing
            </Link>
            <Link
              href="/agricultural-testing"
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors"
            >
              Agricultural Testing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <SolutionsSection />
      <WhySporeCountSection />
      <CTASection />
    </>
  );
}
