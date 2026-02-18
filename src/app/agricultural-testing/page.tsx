import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agricultural Testing",
  description:
    "Precision microbial monitoring for greenhouses and food production. FSMA/HACCP compliant. 30 key pathogens detected with next-day results.",
};

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 30%, #2D8B4E 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-green/10 border border-green/20 rounded-full text-green-light text-sm font-medium mb-6">
            Available Worldwide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            SporeCount{" "}
            <span className="text-green-light">Agricultural</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Precision microbial monitoring for greenhouses and food production.
            Proactive crop protection powered by continuous pathogen detection
            for modern agriculture.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors"
            >
              Get Started
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

function StatsSection() {
  const stats = [
    { value: "30", label: "Key Pathogens Detected" },
    { value: "Next-Day", label: "Results Turnaround" },
    { value: "FSMA", label: "& HACCP Compliant" },
    { value: "AI", label: "Powered Analysis" },
  ];

  return (
    <section className="bg-light-bg border-b border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAgriSection() {
  const features = [
    {
      title: "30 Key Pathogens",
      description: "Focused detection panel targeting the most critical agricultural threats including powdery mildew, botrytis, fusarium, and more.",
      icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5",
    },
    {
      title: "Early Detection",
      description: "Catch powdery mildew and other threats before visible symptoms appear. Proactive monitoring saves crops and reduces losses.",
      icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z",
    },
    {
      title: "Center-Baseline Method",
      description: "Our proprietary sampling methodology establishes accurate baseline readings for your facility, enabling meaningful trend analysis over time.",
      icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    },
    {
      title: "Regulatory Compliance",
      description: "Meets FSMA and HACCP requirements for food safety. Documentation and reporting designed for regulatory audits.",
      icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    },
    {
      title: "Actionable Intelligence",
      description: "Reports designed for agricultural operators — clear data that drives real decisions about crop protection and facility management.",
      icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    },
    {
      title: "Next-Day Results",
      description: "Rapid response for time-sensitive crop protection. Get results the next business day so you can act before it's too late.",
      icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Built for Agriculture
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Precision monitoring tools designed specifically for greenhouse operators and food production facilities.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white border border-light-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

function UseCasesSection() {
  const useCases = [
    {
      title: "Cannabis & Hemp",
      description: "Mandatory microbial testing for licensed producers. Catch contamination early in the growing cycle to protect your crop and compliance.",
    },
    {
      title: "Greenhouse Vegetables",
      description: "Continuous monitoring for food-safe production environments. Meet FSMA requirements with documented pathogen surveillance.",
    },
    {
      title: "Floriculture",
      description: "Protect high-value ornamental crops from powdery mildew and botrytis. Early detection prevents devastating losses.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Industries We Serve
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-white border border-light-border rounded-2xl p-8 border-t-4 border-t-green"
            >
              <h3 className="text-xl font-bold text-navy mb-3">{useCase.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{useCase.description}</p>
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
            Protect Your Crops with Data
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Start monitoring your growing environment today. Next-day results mean
            you can act fast when it matters most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors"
            >
              Contact Us
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

export default function AgriculturalTesting() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyAgriSection />
      <UseCasesSection />
      <CTASection />
    </>
  );
}
