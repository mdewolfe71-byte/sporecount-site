import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SporeCount privacy policy describing how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">Privacy Policy</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-500 leading-relaxed"><em>Last updated: April 2026</em></p>

          <p className="text-gray-600 leading-relaxed mt-4">
            BRS Lab Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates SporeCount Agri. This Privacy Policy explains how we collect, use, and protect information when you use our services or visit this website. Our address is 45260 Indian Creek, Canton, Michigan 48187.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Information We Collect</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information you provide when engaging our services, including your name, business name, contact information, and farm or facility details needed to contextualize your test results. We also collect sample metadata and operational information you share to help us interpret results accurately.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">How We Use Your Information</h2>
          <p className="text-gray-600 leading-relaxed">
            We use your information to perform testing, generate and deliver results reports, process payments, and provide support. We may use anonymized, aggregated data across our client base for research and to improve our testing methodologies. We do not sell your personal or operational information.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Confidentiality of Farm Data</h2>
          <p className="text-gray-600 leading-relaxed">
            We treat your farm identification, operational data, and test results as confidential. Results are released only to your authorized contacts. We do not share identifiable farm data with competitors, agricultural input suppliers, or government agencies unless required by law.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Data Security</h2>
          <p className="text-gray-600 leading-relaxed">
            Your data is stored on secure, encrypted infrastructure with access limited to authorized personnel. We conduct regular security reviews and implement reasonable measures to protect your information against unauthorized access.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Data Retention</h2>
          <p className="text-gray-600 leading-relaxed">
            Physical samples are retained for 30 days after report delivery. Electronic records are retained for a minimum of 3 years or as required by applicable regulations.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Your Rights</h2>
          <p className="text-gray-600 leading-relaxed">
            You may request access to, correction of, or deletion of your personal information at any time. We will respond to all requests within 30 days.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            For privacy questions, contact{" "}
            <a href="mailto:Matthew.dewolfe@brslab.com" className="text-teal-600 hover:underline">
              Matthew.dewolfe@brslab.com
            </a>{" "}
            or write to us at 45260 Indian Creek, Canton, Michigan 48187.
          </p>

          <p className="text-gray-500 mt-8 text-xs">&copy; 2026 BRS Lab Services. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
