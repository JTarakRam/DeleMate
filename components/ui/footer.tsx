import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#133bbf] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-4  rounded-xl w-fit">
                <Image
                  src="/logowhite.jpg"
                  width={100}
                  height={120}
                  alt="delemate logo"
                />
              </div>
              <p className="text-sm text-blue-100 leading-relaxed max-w-xs">
                Making parcel delivery simple, fast, and reliable for everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@delemate.com"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    info@delemate.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+911234567890"
                    className="text-sm text-blue-100 hover:text-white transition-colors"
                  >
                    +91-1234567890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-400 border-opacity-30 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-blue-100 mb-4 sm:mb-0">
              © 2025 DeleMate. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
