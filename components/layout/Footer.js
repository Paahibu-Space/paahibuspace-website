import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="bg-primary text-white relative mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image src="/logo-white.png" alt="Paahibu Space Logo" width={628} height={250} className="h-17 w-auto object-contain" />
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Bridging the gender gap in technology through education, mentorship,
              and entrepreneurship. We are building the future of tech in Africa.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://www.linkedin.com/company/paahibuspace/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="Instagram"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://www.instagram.com/paahibuspace?igsh=bmx1eTh6ZmRuZm5h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="Facebook"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://www.facebook.com/share/19F93yo1ko/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="TikTok"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://www.tiktok.com/@paahibu.space?_r=1&_t=ZS-98uBlsOHjK3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="YouTube"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://youtube.com/@paahibuspace?si=V__5RwZUwu7e0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                aria-label="WhatsApp"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all duration-300 group"
                href="https://whatsapp.com/channel/0029VaJvEH6HwXbKRSOk783K"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm leading-6 text-white uppercase tracking-wider mb-6">
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
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/our-work"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Our Work
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
                  href="/research-insights"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm leading-6 text-gray-300 hover:text-secondary transition-colors flex items-center gap-2"
                  href="/community"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    chevron_right
                  </span>
                  Community
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
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-sm leading-6 text-white uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul role="list" className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                  location_on
                </span>
                <span className="text-sm leading-6 text-gray-300">
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
                  href="tel:+233556410924"
                >
                  +233 55 641 0924
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
            <h3 className="text-sm leading-6 text-white uppercase tracking-wider mb-6">
              Office Hours
            </h3>
            <div>
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
                  <span className="text-white font-medium">10am - 4pm</span>
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
              href="/partners"
            >
              Partners
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/team"
            >
              Leadership & Team
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/careers"
            >
              Careers
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/safeguarding"
            >
              Safeguarding
            </Link>
            <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/privacy"
            >
              Privacy
            </Link>
            {/* <Link
              className="text-xs leading-5 text-gray-400 hover:text-white transition-colors"
              href="/resources"
            >
              Resources
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
