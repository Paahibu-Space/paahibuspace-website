import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
<img src="/logo.png" alt="Paahibu Space Logo" className="h-12 w-auto object-contain bg-white rounded-full p-1" />
              <span className="text-xl font-bold tracking-wide">Paahibu Space</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Bridging the gender gap in technology through education, mentorship,
              and entrepreneurship. We are building the future of tech in Africa.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                aria-label="Twitter"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  alternate_email
                </span>
              </a>
              <a
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  work
                </span>
              </a>
              <a
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  thumb_up
                </span>
              </a>
              <a
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="#"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
                  photo_camera
                </span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">
              Explore
            </h3>
            <ul role="list" className="space-y-4">
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/about"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/programs"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Our Programs
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/impact"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/involve"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/donate"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul role="list" className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="text-sm leading-6 text-gray-300">
                  Insurance Road
                  <br />
                  Wa-UWR
                  <br />
                  Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  call
                </span>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white"
                  href="tel:+233247254326"
                >
                  +233 24 725 4326
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary shrink-0">
                  mail
                </span>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white"
                  href="mailto:info@paahibuspace.org"
                >
                  info@paahibuspace.org
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours & Legal */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white uppercase tracking-wider mb-6">
              Office Hours
            </h3>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-secondary">
                  schedule
                </span>
                <span className="text-sm font-medium text-white">
                  Opening Times
                </span>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Mon - Fri</span>
                  <span className="text-white font-medium">9am - 5pm</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>Weekends</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#1e2160]/50">
        <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Paahibu Space. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/cookies"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
