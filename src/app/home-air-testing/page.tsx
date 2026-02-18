import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Air Testing (Canada)",
  description:
    "Professional residential air quality testing in Canada. AI-powered analysis by Sporecyte with next-day results. Certified environmental professionals on-site.",
};

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #3B5BDB 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue-light text-sm font-medium mb-6">
            Available in Canada
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            SporeCount{" "}
            <span className="text-blue-light">Home</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Professional air quality testing for residential properties.
            Certified environmental professionals collect samples on-site, with
            results powered by Sporecyte AI technology.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Book a Test
            </a>
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

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Schedule Your Test",
      description:
        "Contact us to book a convenient time. A certified environmental professional will come to your property.",
    },
    {
      step: "02",
      title: "Professional Collection",
      description:
        "Our certified technician collects air samples using calibrated equipment in key areas of your home.",
    },
    {
      step: "03",
      title: "AI-Powered Analysis",
      description:
        "Samples are analyzed at our accredited lab using Sporecyte AI technology for accurate identification of up to 182 contaminants.",
    },
    {
      step: "04",
      title: "Get Your Report",
      description:
        "Receive a comprehensive Certificate of Analysis with next-day results — clear, actionable information about your air quality.",
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
            Professional air quality testing made simple — from booking to results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="relative">
              <div className="text-5xl font-bold text-blue/10 mb-4">
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

function FeaturesSection() {
  const features = [
    {
      title: "Sporecyte AI Technology",
      description: "Cutting-edge machine learning identifies and quantifies up to 182 airborne contaminants with lab-grade accuracy.",
      icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
    },
    {
      title: "Certified Professionals",
      description: "Licensed environmental technicians collect samples in your home using calibrated, professional-grade equipment.",
      icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
    },
    {
      title: "Comprehensive Reports",
      description: "Detailed Certificate of Analysis with species identification, concentration levels, and clear recommendations.",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    },
    {
      title: "Next-Day Results",
      description: "No waiting weeks. Get your air quality results the next business day so you can take action fast.",
      icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Accredited Laboratory",
      description: "Analysis performed at our dual-licensed facility in Windsor, Ontario — the same lab behind BRS Lab Services.",
      icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    },
    {
      title: "Proven Track Record",
      description: "Over a year of successful operations serving homeowners across Canada with consistent, reliable results.",
      icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            What&apos;s Included
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-light-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
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
            Ready to Test Your Home&apos;s Air Quality?
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Get professional, AI-powered air quality testing with next-day results. Available for residential properties across Canada.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Contact Us to Book
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

export default function HomeAirTesting() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <CTASection />
    </>
  );
}
