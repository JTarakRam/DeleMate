"use client";
import type React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Using lucide-react for icons
import { motion } from "framer-motion";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp"; // Assuming this path is correct for your LampContainer

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const SocialIcon = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: React.ElementType;
    label: string;
  }) => {
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
        <Link
          href={href}
          aria-label={label}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 transition-colors duration-200"
        >
          <Icon className="text-gray-300" size={14} />
        </Link>
      </motion.div>
    );
  };

  return (
    <section className="p-4 max-sm:p-3">
      <footer className={`bg-black rounded-[18px]`}>
        {/* LampContainer section with generic text for DeleMate */}
        <LampContainer>
          <motion.h1 className="mt-0 bg-white py-0 bg-clip-text text-center text-3xl sm:text-4xl md:text-7xl tracking-wide text-transparent font-semibold">
            DeleMate
            <br />
          </motion.h1>
          <motion.div>
            <motion.span className="text-white text-base sm:text-lg w-full font-medium font-inter text-center block tracking-wide">
              Your Partner in Parcel Delivery.
            </motion.span>
          </motion.div>
        </LampContainer>

        {/* Main footer content from DeleMate, styled for the dark theme */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Company Info */}
            <div className="lg:col-span-2 flex flex-col items-center md:items-start">
              <div className="mb-4 rounded-xl w-fit">
                <Image
                  src="/logowhite.jpg" // DeleMate logo path
                  width={100}
                  height={120}
                  alt="delemate logo"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                Making parcel delivery simple, fast, and reliable for everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refund-policy"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:info@delemate.com"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    info@delemate.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+911234567890"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +91-1234567890
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom - copyright and social icons, styled for dark theme */}
          <div className="border-t border-zinc-800 py-6 mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 sm:mb-0">
              © {currentYear} DeleMate. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={Facebook} label="Facebook" />
              <SocialIcon href="#" icon={Twitter} label="Twitter" />
              <SocialIcon href="#" icon={Instagram} label="Instagram" />
              <SocialIcon href="#" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
