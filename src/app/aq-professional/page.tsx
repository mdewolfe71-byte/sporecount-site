import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AQ Professional",
  description:
    "Entry-level air quality screening for home inspectors. Use your existing equipment, add a new revenue stream. $40-65 profit per test with next-day results.",
};

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #7C3AED 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-purple/10 border border-purple/20 rounded-full text-purple-light text-sm font-medium mb-6">
            US &amp; Canada
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            AQ{" "}
            <span className="text-purple-light">Professional</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Entry-level air quality screening designed for home inspectors. Use
            your existing equipment — standard air pump and cassette — and build
            a new revenue stream with science-backed testing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-colors"
            >
              Become a Partner
            </a>
            <a
              href="https://sporecount-agri-app.vercel.app/login"
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

function RevenueSection() {
  return (
    <section className="bg-light-bg border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-purple mb-2">$40–65</div>
            <div className="text-sm text-text-secondary">Profit Per Test</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple mb-2">Next-Day</div>
            <div className="text-sm text-text-secondary">Results Delivery</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple mb-2">$0</div>
            <div className="text-sm text-text-secondary">New Equipment Needed</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Use Your Equipment",
      description: "Standard air pump and cassette that most home inspectors already own. No new equipment purchases required.",
    },
    {
      step: "02",
      title: "Collect Samples",
      description: "Take air samples during your regular home inspection — it adds minimal time to your existing workflow.",
    },
    {
      step: "03",
      title: "Ship to Our Lab",
      description: "Mail samples to our accredited laboratory. Prepaid shipping available for easy, hassle-free submission.",
    },
    {
      step: "04",
      title: "Deliver Results",
      description: "Receive professional reports the next business day. Share science-based results with your clients and earn $40–65 per test.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Add air quality testing to your inspection services in four simple steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-5xl font-bold text-purple/10 mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      title: "New Revenue Stream",
      description: "Earn $40–65 profit on every test. Offer air quality screening as a premium add-on to your home inspection services.",
      icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "No New Equipment",
      description: "Use the standard air pump and cassette you already own. Zero upfront investment to start offering air quality testing.",
      icon: "M11.42 15.17l-5.658-5.656a8.364 8.364 0 010-11.832l5.658 5.656a8.364 8.364 0 010 11.832zm0 0L6.75 21m4.67-5.83l5.658-5.656a8.364 8.364 0 000-11.832L11.42 3.34a8.364 8.364 0 000 11.832zm0 0L16.5 21",
    },
    {
      title: "Science-Based Results",
      description: "Real data from an accredited lab. Many homes come back clean — that's valuable peace of mind for your clients.",
      icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5",
    },
    {
      title: "API Integration",
      description: "Next-day results delivered via API integration or client portal. Seamless workflow integration with your existing tools.",
      icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    },
    {
      title: "Professional Reports",
      description: "Branded, professional reports that you can share directly with clients. Clear explanations — no confusing scientific jargon.",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    },
    {
      title: "Differentiation",
      description: "Stand out from other home inspectors by offering a service most don't. Air quality testing is a growing market.",
      icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Why Inspectors Choose AQ Professional
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white border border-light-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-purple/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{benefit.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
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
            Add Air Quality Testing to Your Services
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Join home inspectors across the US and Canada who are earning more
            per inspection with SporeCount AQ Professional.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple text-white font-semibold rounded-lg hover:bg-purple/90 transition-colors"
            >
              Get Started Today
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/20"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AQProfessional() {
  return (
    <>
      <HeroSection />
      <RevenueSection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
