import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/sporecount-full-logo.png"
                alt="SporeCount - Smart Science. Safe Spaces. Powered by BRS Lab Services"
                width={240}
                height={100}
                className="h-auto w-56 brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Smart Science. Safe Spaces. Residential air testing through Sporecyte and proprietary agricultural pathogen monitoring.
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
                { href: "/home-air-testing", label: "Home Inspector (Canada)" },
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
                  href="https://sporecyte.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Sporecyte (Technology Partner)
                </a>
              </li>
              <li>
                <a
                  href="https://sporecount-agri-app.vercel.app/login"
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
                  href="https://sporecount-agri-app.vercel.app/login"
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
