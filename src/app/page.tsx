import Link from "next/link";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, #3B5BDB 1px, transparent 1px), radial-gradient(circle at 75% 75%, #2D8B4E 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-blue/10 border border-blue/20 rounded-full text-blue-light text-sm font-medium mb-8">
            Powered by BRS Lab Services
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Smart Science.{" "}
            <span className="text-blue-light">Safe Spaces.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Two distinct solutions for air quality and microbial monitoring
            — residential air testing through our Sporecyte partnership in
            Canada, and our proprietary patent-pending agricultural pathogen
            monitoring available worldwide.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Next-Day Results", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
              { label: "Patent-Pending Method", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
              { label: "Dual-Licensed Labs", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" },
              { label: "Research-Backed", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" },
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
              Home Inspector (Canada)
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

function TrustBar() {
  const items = [
    "Powered by BRS Lab Services",
    "Next-Day Results",
    "Patent-Pending Agricultural Method",
    "Sporecyte Authorized Rep (Canada)",
    "Dual-Licensed Labs (US & Canada)",
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
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Two Products. Two Different Approaches.
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            SporeCount operates two distinct testing programs — each built
            for a different industry with its own methodology and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sporecyte Home */}
          <div className="group bg-white border border-light-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue">
            <div className="p-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-blue">Home Inspector</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue/5 text-blue">Canada Only</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                Powered by Sporecyte AI Technology
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                A profitable addition to your services. Add Sporecyte-powered
                air quality testing to your inspection business — just 30–45
                minutes on-site, $29/sample, same-day reports delivered
                directly to you. Available for environmental professionals
                across Canada.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "$29 per sample — retail $400–$650 per home",
                  "Sporecyte AI — 100% of every slide analyzed",
                  "Same-day reports delivered directly to you",
                  "30–45 minutes added to your service call",
                  "ISO/IEC 17025:2017 accredited lab analysis",
                  "Full training and support provided",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/home-air-testing"
                className="inline-flex items-center text-sm font-semibold text-blue group-hover:underline"
              >
                Learn More
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* SporeCount Agricultural */}
          <div className="group bg-white border border-light-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border-t-4 border-t-green">
            <div className="p-8">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-green">SporeCount Agricultural</h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green/5 text-green">Worldwide</span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-4">
                Patent-Pending Center-Baseline Method
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                Our proprietary pathogen monitoring system for greenhouses,
                cannabis operations, and food production. Detect airborne
                threats 5–14 days before visible symptoms — and reduce
                fungicide applications by 40–50%.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Patent-pending center-baseline sampling method",
                  "65+ fungal taxa detected (inc. powdery mildew)",
                  "5–14 day early warning before visible symptoms",
                  "FSMA, HACCP, SQF, CanadaGAP compliant",
                  "Cloud platform with digital chain of custody",
                  "Next-day results — vs. 7–14 days for culture",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 shrink-0 mt-0.5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/agricultural-testing"
                className="inline-flex items-center text-sm font-semibold text-green group-hover:underline"
              >
                Learn More
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LabSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Advanced Microscopy &amp; Analysis
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Whether through Sporecyte&apos;s AI platform for residential testing
            or our own lab for agricultural monitoring — every sample gets
            thorough, professional analysis.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light-bg">
            <Image
              src="/images/mold-scan.png"
              alt="AI-powered mold spore identification under microscopy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light-bg">
            <Image
              src="/images/yeast-mold-scan.png"
              alt="Yeast and mold detection via digital whole-slide imaging"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light-bg">
            <Image
              src="/images/mold-scan-2.png"
              alt="Detailed spore analysis with AI classification"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySporeCountSection() {
  const features = [
    {
      title: "BRS Lab Services",
      description:
        "SporeCount is powered by BRS Lab Services — dual-licensed laboratories in Windsor, Ontario and Canton, Michigan with cross-border capability.",
      icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    },
    {
      title: "Speed That Matters",
      description:
        "Same-day and next-business-day results across both products. No waiting weeks for critical air quality or crop protection data.",
      icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    },
    {
      title: "Research-Backed",
      description:
        "Active collaboration with Dr. John F. Trant at the University of Windsor. Our agricultural methodology is built on peer-reviewed science.",
      icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    },
    {
      title: "Proven Partners",
      description:
        "Our residential program leverages Sporecyte's ISO/IEC 17025:2017 accredited AI platform. Our agricultural program uses our own patent-pending methodology.",
      icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
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
                <svg className="w-7 h-7 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Smart Science. Safe Spaces.
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Whether you&apos;re an environmental professional looking to add
            a profitable new service, or an agricultural operation that
            needs proactive pathogen monitoring — SporeCount has a solution
            built for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/home-air-testing"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue text-white font-semibold rounded-lg hover:bg-blue-dark transition-colors"
            >
              Home Inspector (Canada)
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
      <LabSection />
      <WhySporeCountSection />
      <CTASection />
    </>
  );
}
