import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Inspector Air Testing (Canada) | SporeCount",
  description:
    "Add Sporecyte-powered air quality testing to your inspection business. $29 per sample, same-day reports, AI-powered analysis. For home inspectors, mold inspectors, HVAC technicians, and IAQ professionals in Canada.",
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue-light text-sm font-medium mb-6">
            Sporecount.com is an authorized representative of Sporecyte USA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Sporecyte Home{" "}
            <span className="text-blue-light">Air Testing</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Professional air quality testing powered by Sporecyte AI
            technology. Add a profitable new service to your business.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { value: "$29", label: "Per Sample" },
              { value: "Thousands", label: "of Happy Clients" },
              { value: "AI-Powered", label: "Sporecyte Technology" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="https://sporecount-agri-app.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfitableAdditionSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            A Profitable Addition to Your Services
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Environmental professionals across Canada are adding SporeCount
            to their service offerings. Here&apos;s why it works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          {/* Left: Who This Works For */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              Perfect for Environmental Professionals
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              If you&apos;re already visiting homes for inspections, HVAC
              services, or remediation work, adding air quality testing is a
              natural fit. It takes just 30–45 minutes on-site and provides
              significant additional revenue.
            </p>
            <h4 className="font-semibold text-navy mb-4">Who This Works For:</h4>
            <ul className="space-y-3">
              {[
                "Home Inspectors",
                "HVAC Technicians",
                "Mold Remediation Specialists",
                "Indoor Air Quality Consultants",
                "Property Management Companies",
                "Real Estate Professionals",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Economics Card */}
          <div className="bg-white border border-light-border rounded-2xl overflow-hidden">
            <div className="bg-blue/5 border-b border-light-border px-8 py-5">
              <h3 className="text-xl font-bold text-blue text-center">
                The Economics (4-Sample Home)
              </h3>
            </div>
            <div className="divide-y divide-light-border">
              {[
                { label: "Retail Price Range:", value: "$400–$650", highlight: false },
                { label: "Your Investment:", value: "$140", highlight: false },
                { label: "Time Added to Visit:", value: "30–45 min", highlight: false },
                { label: "Revenue for Your Time:", value: "$260+", highlight: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-8 py-5 ${
                    row.highlight ? "bg-blue/5" : ""
                  }`}
                >
                  <span className="text-sm text-text-secondary">{row.label}</span>
                  <span className={`text-xl font-bold ${row.highlight ? "text-blue" : "text-navy"}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SporecytePartnerSection() {
  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Powered by Sporecyte AI Technology
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Sporecount is an authorized representative of Sporecyte USA
            combining local expertise with cutting-edge AI analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Sporecyte Advantage */}
          <div className="bg-white border border-light-border rounded-2xl p-8 border-t-4 border-t-blue">
            <h3 className="text-xl font-bold text-navy mb-4">
              The Sporecyte Advantage
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Sporecyte uses advanced AI algorithms to analyze air and
              surface samples with unprecedented accuracy and speed. This
              isn&apos;t traditional lab testing — it&apos;s the future of
              air quality analysis.
            </p>
            <ul className="space-y-3">
              {[
                "AI-powered microscopic analysis",
                "Consistent, reliable results",
                "Rapid turnaround times",
                "Professional Certificate of Analysis",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Partnership Model */}
          <div className="bg-white border border-light-border rounded-2xl p-8 border-t-4 border-t-blue">
            <h3 className="text-xl font-bold text-navy mb-4">
              Our Partnership Model
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              As the Canadian Sporecyte franchise, BRS Lab Services handles
              all coordination, sample processing, and customer support. You
              focus on what you do best — serving your clients.
            </p>
            <ul className="space-y-3">
              {[
                "Full training and support provided",
                "Simple sample collection process",
                "Professional reports delivered automatically",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      step: "1",
      title: "Collect Samples",
      description:
        "Add 30–45 minutes to your existing service call to collect air and surface samples.",
    },
    {
      step: "2",
      title: "Send to Lab",
      description:
        "Ship samples to BRS Lab Services using provided materials.",
    },
    {
      step: "3",
      title: "AI Analysis",
      description:
        "Sporecyte technology analyzes samples for rapid, accurate results.",
    },
    {
      step: "4",
      title: "Professional Report",
      description:
        "Detailed consumer-friendly report delivered directly to you. (IAQ Professional report also available)",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Simple, streamlined process from sample collection to
            professional reporting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <svg className="w-6 h-6 text-blue-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-gradient-to-b from-blue to-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Join the growing network of environmental professionals adding
            Sporecyte-powered air quality testing to their services.
          </p>
          <div className="mt-10">
            <a
              href="https://sporecount-agri-app.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function RevenueSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden aspect-square bg-white border border-light-border">
            <Image
              src="/images/air-pump-kit.png"
              alt="Sporecyte professional air sampling equipment"
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Are you maximizing your revenue?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                The retail price for 4 samples per home is between $400–$650.
              </p>
              <p>
                The cost is about $140.00 with Materials, report &amp; shipping.
              </p>
              <p>
                At $400, revenue for time is $260.00 for the extra 30–45
                minutes on site.
              </p>
            </div>
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-lighter transition-colors"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortalLinksSection() {
  const links = [
    {
      title: "Order Supplies",
      description: "Order sampling supplies including cassettes, swabs, and shipping materials.",
      href: "mailto:windsorlab@brslab.com?subject=Supply%20Order%20Request",
      icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
    },
    {
      title: "Chain of Custody",
      description: "Submit samples and track your chain of custody documentation.",
      href: "https://sporecount-agri-app.vercel.app/client-portal/index.html",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    },
    {
      title: "New Client Form",
      description: "Register as a new SporeCount partner and get set up.",
      href: "https://sporecount-agri-app.vercel.app/register",
      icon: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z",
    },
    {
      title: "Sporecyte Sample Report",
      description: "View a sample Sporecyte Certificate of Analysis report.",
      href: "https://sporecyte.com",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Sporecyte Professional Air Testing
          </h2>
          <p className="mt-4 text-text-secondary">
            Sporecount is an authorized representative of Sporecyte USA
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-light-border rounded-xl p-5 text-center hover:shadow-md hover:border-blue/30 transition-all"
            >
              <div className="w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
              </div>
              <h3 className="text-sm font-bold text-navy group-hover:text-blue transition-colors">
                {link.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomeAirTesting() {
  return (
    <>
      <HeroSection />
      <ProfitableAdditionSection />
      <SporecytePartnerSection />
      <HowItWorksSection />
      <CTASection />
      <RevenueSection />
      <PortalLinksSection />
    </>
  );
}
