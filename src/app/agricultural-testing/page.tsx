import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agricultural Testing | SporeCount",
  description:
    "Patent-pending center-baseline pathogen monitoring for greenhouses, cannabis, and food production. 65+ fungal taxa detected. Next-day results. FSMA/HACCP compliant.",
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-1.5 bg-green/10 border border-green/20 rounded-full text-green-light text-sm font-medium mb-6">
            Patent-Pending Technology &bull; Available Worldwide
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            SporeCount{" "}
            <span className="text-green-light">Agricultural</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Patent-pending center-baseline pathogen monitoring for greenhouses,
            cannabis operations, and food production. Detect airborne threats
            5–14 days before visible symptoms — and reduce fungicide
            applications by 40–50%.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { label: "Patent-Pending Method", icon: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" },
              { label: "65+ Fungal Taxa", icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5" },
              { label: "Next-Day Results", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" },
              { label: "FSMA / HACCP Ready", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
              >
                <svg className="w-4 h-4 text-green-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.label}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://sporecount-agri-app.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors"
            >
              New Client Registration
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

function StatsSection() {
  const stats = [
    { value: "65+", label: "Fungal Taxa Detected" },
    { value: "5–14", label: "Days Early Warning" },
    { value: "40–50%", label: "Fungicide Reduction" },
    { value: "Next-Day", label: "Results Turnaround" },
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

function PatentSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-green/10 rounded-full text-green text-xs font-semibold uppercase tracking-wider mb-4">
              Patent-Pending Technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Center-Baseline Pathogen Monitoring System
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Our patent-pending methodology (Application #63/938,784)
              establishes the geometric center of your facility as a
              baseline reference point, with peripheral sampling locations
              positioned at strategic intervals throughout the growing
              environment.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              By calculating deviation ratios between center and peripheral
              readings, SporeCount identifies pathogen ingress points,
              airflow anomalies, and contamination hotspots — often 5–14
              days before visible symptoms appear on crops.
            </p>
            <div className="bg-light-bg border border-light-border rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-3">How It Works:</h4>
              <ul className="space-y-2">
                {[
                  "Baseline sample collected at geometric center of facility",
                  "Peripheral samples collected at strategic locations",
                  "Deviation ratios calculated to identify contamination patterns",
                  "Trend analysis tracks pathogen levels over time",
                  "Actionable alerts when thresholds are exceeded",
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light-bg border border-light-border">
              <Image
                src="/images/spore-pic.jpg"
                alt="Microscopic view of airborne spores detected by SporeCount"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-light-border rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-green mb-1">21</div>
                <div className="text-xs text-text-secondary">Patent Claims</div>
              </div>
              <div className="bg-white border border-light-border rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-green mb-1">Dec 2025</div>
                <div className="text-xs text-text-secondary">Filed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PathogenCardsSection() {
  const pathogens = [
    {
      name: "Powdery Mildew",
      scientific: "Erysiphales spp.",
      threat: "Critical",
      description:
        "The most common greenhouse pathogen. SporeCount detects airborne conidia 7–14 days before visible white patches appear on leaves.",
      threshold: "> 50 spores/m³ = elevated risk",
    },
    {
      name: "Botrytis (Gray Mold)",
      scientific: "Botrytis cinerea",
      threat: "Critical",
      description:
        "Devastating crop pathogen in high-humidity environments. Our monitoring catches rising Botrytis levels before bud rot develops.",
      threshold: "> 100 spores/m³ = elevated risk",
    },
    {
      name: "Aspergillus / Penicillium",
      scientific: "Aspergillus & Penicillium spp.",
      threat: "High",
      description:
        "Key indicator organisms for cannabis compliance. Elevated levels may indicate storage issues or HVAC contamination.",
      threshold: "> 500 spores/m³ = elevated risk",
    },
    {
      name: "Fusarium",
      scientific: "Fusarium spp.",
      threat: "High",
      description:
        "Root rot and wilt pathogen detectable in air before soil symptoms appear. Critical for greenhouse vegetable operations.",
      threshold: "> 50 spores/m³ = elevated risk",
    },
    {
      name: "Cladosporium",
      scientific: "Cladosporium spp.",
      threat: "Moderate",
      description:
        "Ubiquitous outdoor fungus. SporeCount tracks indoor/outdoor ratios to identify ventilation problems and filter effectiveness.",
      threshold: "Deviation from baseline = investigate",
    },
    {
      name: "Alternaria",
      scientific: "Alternaria spp.",
      threat: "Moderate",
      description:
        "Early blight and leaf spot pathogen. Monitoring airborne levels helps time protective fungicide applications precisely.",
      threshold: "> 100 spores/m³ = elevated risk",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Key Pathogens We Monitor
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            SporeCount detects 65+ fungal taxa. Here are the critical
            agricultural pathogens our center-baseline method is designed to
            catch early.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathogens.map((pathogen) => (
            <div
              key={pathogen.name}
              className="bg-white border border-light-border rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-navy">{pathogen.name}</h3>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    pathogen.threat === "Critical"
                      ? "bg-red-50 text-red-600"
                      : pathogen.threat === "High"
                      ? "bg-orange-50 text-orange-600"
                      : "bg-yellow-50 text-yellow-700"
                  }`}
                >
                  {pathogen.threat}
                </span>
              </div>
              <p className="text-xs text-text-muted italic mb-3">
                {pathogen.scientific}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {pathogen.description}
              </p>
              <div className="pt-3 border-t border-light-border">
                <p className="text-xs font-medium text-green">
                  {pathogen.threshold}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestingMethodsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Air Testing + Surface Testing
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Comprehensive environmental monitoring combining airborne
            pathogen detection with surface contamination analysis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Air Testing */}
          <div className="bg-white border border-light-border rounded-2xl p-8 border-t-4 border-t-green">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Air Testing</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Volumetric air sampling captures airborne spores and particulates
              at calibrated flow rates. Our center-baseline methodology positions
              samplers to detect pathogen ingress before contamination spreads.
            </p>
            <ul className="space-y-2">
              {[
                "Calibrated volumetric air pumps",
                "Spore trap cassettes (standard & high-volume)",
                "Center-baseline sampling methodology",
                "Indoor/outdoor ratio analysis",
                "65+ fungal taxa identified per sample",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Surface Testing */}
          <div className="bg-white border border-light-border rounded-2xl p-8 border-t-4 border-t-green">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 4.5H6.5L5 14.5m14 0H5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">Surface Testing</h3>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Tape lift and swab sampling for direct surface contamination
              analysis. Identifies settled spores, active growth, and
              biofilm formation on equipment and growing surfaces.
            </p>
            <ul className="space-y-2">
              {[
                "Tape lift samples for settled spores",
                "Swab sampling for equipment surfaces",
                "Biofilm and active growth detection",
                "HVAC system contamination assessment",
                "Post-remediation verification testing",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
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

function DormantSporesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-light-bg border border-light-border">
              <Image
                src="/images/ym-images.png"
                alt="Microscopic detection of dormant and fragile spores"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <div className="inline-flex items-center px-3 py-1 bg-green/10 rounded-full text-green text-xs font-semibold uppercase tracking-wider mb-4">
              Advantage: SporeCount
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
              Dormant &amp; Fragile Spores
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Traditional culture-based testing only detects viable (living)
              organisms — missing dormant spores and fragile structures that
              can reactivate when conditions change. This creates dangerous
              blind spots in your monitoring program.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              SporeCount&apos;s direct microscopy approach detects all spore
              structures regardless of viability — including dormant spores,
              fragile hyphal fragments, and non-culturable species. This
              gives you the complete picture of your growing environment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Dormant Spores", desc: "Detected by SporeCount, missed by culture" },
                { label: "Fragile Structures", desc: "Hyphal fragments & conidiophores" },
                { label: "Non-Culturable", desc: "Species that won't grow on media" },
                { label: "Dead Spores", desc: "Still allergenic, invisible to culture" },
              ].map((item) => (
                <div key={item.label} className="bg-light-bg rounded-lg p-3">
                  <div className="text-sm font-semibold text-navy">{item.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            SporeCount vs. Culture-Based Testing
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            See why leading agricultural operations are switching from
            traditional culture methods to SporeCount&apos;s direct
            microscopy approach.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-light-border">
          <table className="w-full">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left py-4 px-6 text-sm font-semibold">Feature</th>
                <th className="text-center py-4 px-6 text-sm font-semibold">SporeCount</th>
                <th className="text-center py-4 px-6 text-sm font-semibold text-gray-400">Culture Method</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Results Turnaround", ours: "Next business day", theirs: "7–14 days" },
                { feature: "Taxa Detected", ours: "65+ fungal taxa", theirs: "10–15 culturable" },
                { feature: "Dormant Spores", ours: "Detected", theirs: "Missed entirely" },
                { feature: "Fragile Structures", ours: "Detected", theirs: "Destroyed in process" },
                { feature: "Quantitative Data", ours: "Spores per m³", theirs: "CFU (colony counts)" },
                { feature: "Sampling Method", ours: "Center-baseline (patent-pending)", theirs: "Random or fixed" },
                { feature: "Trend Analysis", ours: "Cloud platform with history", theirs: "Manual record keeping" },
                { feature: "Compliance", ours: "FSMA, HACCP, SQF, CanadaGAP", theirs: "Varies" },
              ].map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-light-bg"}>
                  <td className="py-4 px-6 text-sm font-medium text-navy">{row.feature}</td>
                  <td className="py-4 px-6 text-sm text-center text-green font-medium">{row.ours}</td>
                  <td className="py-4 px-6 text-sm text-center text-text-muted">{row.theirs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  const industries = [
    {
      title: "Cannabis & Hemp",
      description:
        "Mandatory microbial testing for licensed producers. Catch contamination early in the growing cycle to protect your crop and maintain compliance with Health Canada and state regulations.",
      icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
    },
    {
      title: "Greenhouse Operations",
      description:
        "Continuous monitoring for greenhouse vegetables, floriculture, and propagation facilities. Proactive pathogen detection prevents devastating losses from powdery mildew and botrytis.",
      icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      title: "Food Processing & Storage",
      description:
        "FSMA and HACCP compliant environmental monitoring for food manufacturing, packaging, and cold storage. Documented pathogen surveillance for regulatory audits.",
      icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z",
    },
    {
      title: "Grain & Commodity Storage",
      description:
        "Monitor airborne fungal levels in grain elevators, silos, and commodity storage facilities. Prevent mycotoxin contamination and storage losses before they start.",
      icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Built For Your Industry
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            SporeCount&apos;s center-baseline monitoring methodology adapts to
            any enclosed growing or production environment.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="bg-white border border-light-border rounded-2xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-green/10 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{industry.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EconomicsSection() {
  return (
    <section className="py-20 sm:py-28 bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            The Economics of Prevention
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Proactive monitoring pays for itself by reducing chemical inputs,
            preventing crop losses, and ensuring compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              metric: "40–50%",
              label: "Fungicide Reduction",
              description: "Targeted applications based on real data — not calendar-based spraying.",
            },
            {
              metric: "5–14 Days",
              label: "Early Detection",
              description: "Catch airborne pathogens before visible symptoms appear on crops.",
            },
            {
              metric: "Next-Day",
              label: "Fast Turnaround",
              description: "vs. 7–14 days for culture. Make decisions while they still matter.",
            },
            {
              metric: "Complete",
              label: "Compliance Records",
              description: "Digital chain of custody and cloud reporting for all audits.",
            },
          ].map((item) => (
            <div key={item.label} className="bg-white border border-light-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green mb-2">{item.metric}</div>
              <div className="text-sm font-semibold text-navy mb-2">{item.label}</div>
              <p className="text-xs text-text-secondary leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortalLinksSection() {
  const links = [
    {
      title: "New Client Registration",
      description: "Get started with SporeCount Agricultural. Register your facility and set up your monitoring program.",
      href: "https://sporecount-agri-app.vercel.app/register",
      icon: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z",
      primary: true,
    },
    {
      title: "Client Portal",
      description: "Access your account, submit samples, and manage your monitoring program.",
      href: "https://sporecount-agri-app.vercel.app/login",
      icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
      primary: false,
    },
    {
      title: "Chain of Custody",
      description: "Submit samples and track your chain of custody documentation through our digital portal.",
      href: "https://sporecount-agri-app.vercel.app/client-portal/index.html",
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
      primary: false,
    },
    {
      title: "Order Supplies",
      description: "Reorder sampling supplies including cassettes, swabs, and shipping materials.",
      href: "mailto:windsorlab@brslab.com?subject=Supply%20Order%20Request",
      icon: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
      primary: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Client Resources
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Everything you need to manage your SporeCount monitoring program.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-2xl p-6 transition-all hover:shadow-md ${
                link.primary
                  ? "bg-green text-white"
                  : "bg-white border border-light-border"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  link.primary
                    ? "bg-white/20"
                    : "bg-green/10"
                }`}
              >
                <svg
                  className={`w-6 h-6 ${link.primary ? "text-white" : "text-green"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={link.icon} />
                </svg>
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  link.primary ? "text-white" : "text-navy"
                }`}
              >
                {link.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  link.primary ? "text-white/80" : "text-text-secondary"
                }`}
              >
                {link.description}
              </p>
              <div className="mt-4 flex items-center gap-1">
                <span
                  className={`text-sm font-semibold ${
                    link.primary ? "text-white" : "text-green"
                  }`}
                >
                  Open
                </span>
                <svg
                  className={`w-4 h-4 group-hover:translate-x-0.5 transition-transform ${
                    link.primary ? "text-white" : "text-green"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
            </a>
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
            Start monitoring your growing environment with SporeCount&apos;s
            patent-pending center-baseline methodology. Next-day results mean
            you can act fast when it matters most.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://sporecount-agri-app.vercel.app/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green text-white font-semibold rounded-lg hover:bg-green-dark transition-colors"
            >
              Get Started — Register Now
            </a>
            <a
              href="mailto:windsorlab@brslab.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/20"
            >
              Contact Sales
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Already a client?{" "}
            <a
              href="https://sporecount-agri-app.vercel.app/client-portal/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-light hover:underline"
            >
              Access Chain of Custody Portal
            </a>
            {" "}&bull;{" "}
            <a
              href="https://sporecount-agri-app.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-light hover:underline"
            >
              View Results Dashboard
            </a>
          </p>
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
      <PatentSection />
      <PathogenCardsSection />
      <TestingMethodsSection />
      <DormantSporesSection />
      <ComparisonSection />
      <IndustriesSection />
      <EconomicsSection />
      <PortalLinksSection />
      <CTASection />
    </>
  );
}
