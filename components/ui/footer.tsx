"use client";

import type React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

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
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          target="_blank"
          href={href}
          aria-label={label}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform duration-200"
        >
          <Icon className="text-white" size={18} />
        </Link>
      </motion.div>
    );
  };

  return (
    <footer className="bg-[#133bb7] text-white py-12 sm:py-16">
      {/* Top section with DeleMate title and tagline */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          DeleMate
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
          Delivering Trust
        </p>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Company Info */}
          <div className="flex flex-col items-center md:items-start lg:items-start">
            <div className="mb-4 rounded-xl w-fit">
              {/* <Image
                src="/logowhite.png" // DeleMate logo path
                width={100}
                height={120}
                alt="delemate logo"
              /> */}
              <h1 className="text-xl sm:text-xl md:text-2xl font-bold tracking-tight mb-4">
                DeleMate
              </h1>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed max-w-xs mx-auto md:mx-0">
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
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
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
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
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
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  contact@delemate.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+911234567890"
                  className="text-sm text-gray-200 hover:text-white transition-colors"
                >
                  +91-6305835023
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - copyright and social icons */}
        <div className="border-t border-v0-blue-dark py-6 mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-sm text-gray-200 mb-4 sm:mb-0">
            © {currentYear} DeleMate. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* <SocialIcon href="#" icon={Facebook} label="Facebook" />
            <SocialIcon href="#" icon={Twitter} label="Twitter" /> */}
            <SocialIcon
              href="https://www.instagram.com/dele_mate/"
              icon={Instagram}
              label="Instagram"
            />
            <SocialIcon
              href="https://www.linkedin.com/company/delemate/?originalSubdomain=in"
              icon={Linkedin}
              label="LinkedIn"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
