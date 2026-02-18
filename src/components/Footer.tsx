import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-blue rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight">SporeCount</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              AI-powered air quality testing for homes, inspectors, and agriculture. Next-day results you can trust.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>windsorlab@brslab.com</p>
              <p>Windsor, ON (Canada)</p>
              <p>Canton, MI (USA)</p>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/home-air-testing", label: "Home Air Testing" },
                { href: "/aq-professional", label: "AQ Professional" },
                { href: "/agricultural-testing", label: "Agricultural Testing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://brslabservices.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  BRS Lab Services
                </a>
              </li>
              <li>
                <a
                  href="https://testyourworld.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Test Your World
                </a>
              </li>
              <li>
                <a
                  href="https://app.sporecyte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Client Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:windsorlab@brslab.com" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://app.sporecyte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Login to Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} SporeCount — A BRS Lab Services Brand. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-600 max-w-3xl">
            SporeCount provides AI-powered air quality testing services. Test results are provided for informational and screening purposes. For health or safety concerns, consult a qualified healthcare provider or licensed environmental professional.
          </p>
        </div>
      </div>
    </footer>
  );
}
