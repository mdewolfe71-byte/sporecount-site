import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SporeCount terms of service governing use of our website and agricultural testing services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <section className="relative bg-navy pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white">Terms of Service</h1>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gray-500 leading-relaxed"><em>Last updated: April 2026</em></p>

          <p className="text-gray-600 leading-relaxed mt-4">
            These Terms of Service govern your use of the SporeCount website and agricultural pathogen monitoring services provided by BRS Lab Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 45260 Indian Creek, Canton, Michigan 48187. By using our services, you agree to these terms.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">1. Services</h2>
          <p className="text-gray-600 leading-relaxed">
            SporeCount Agri provides proprietary agricultural pathogen monitoring and spore quantification services for farms, greenhouses, and agribusiness operations. Testing is performed at our accredited laboratories in the United States and Canada. Results are provided as scientific data to support agronomic decision-making.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">2. Nature of Results</h2>
          <p className="text-gray-600 leading-relaxed">
            SporeCount results are provided as scientific monitoring data and are not a guarantee of crop safety, yield, or regulatory compliance. Agricultural and treatment decisions based on our results remain the sole responsibility of the operator. We recommend consulting with a licensed agronomist or crop consultant when making significant management decisions.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">3. Sample Submission</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for collecting and shipping samples according to our provided instructions. Results may be affected by improper sample handling prior to laboratory receipt. Samples are retained for 30 days following report delivery and then properly disposed of.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">4. Payment</h2>
          <p className="text-gray-600 leading-relaxed">
            Fees are due as specified in your service agreement or upon ordering. We reserve the right to withhold results for overdue accounts. Prices are subject to change with notice.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">5. Data Ownership</h2>
          <p className="text-gray-600 leading-relaxed">
            You retain ownership of your farm and operational data. We retain the right to use anonymized, aggregated data for research and service improvement purposes. We will not share your identifiable data with competitors or third parties without your consent.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">6. Intellectual Property</h2>
          <p className="text-gray-600 leading-relaxed">
            SporeCount Agri&trade; is a trademark of BRS Lab Services. Our proprietary monitoring methodologies, algorithms, and report formats are protected intellectual property. Unauthorized reproduction is prohibited.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">7. Limitation of Liability</h2>
          <p className="text-gray-600 leading-relaxed">
            Our liability for any claim is limited to fees paid for the specific service giving rise to the claim. We are not liable for crop losses, yield impacts, or consequential damages arising from use of or reliance on our results.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">8. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These terms are governed by the laws of the State of Michigan. Disputes shall be resolved in the courts of Wayne County, Michigan.
          </p>

          <h2 className="text-xl font-bold mt-8 mb-3">Contact</h2>
          <p className="text-gray-600 leading-relaxed">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:Matthew.dewolfe@brslab.com" className="text-teal-600 hover:underline">
              Matthew.dewolfe@brslab.com
            </a>{" "}
            or 45260 Indian Creek, Canton, Michigan 48187.
          </p>

          <p className="text-gray-500 mt-8 text-xs">&copy; 2026 BRS Lab Services. All rights reserved.</p>
        </div>
      </section>
    </>
  );
}
