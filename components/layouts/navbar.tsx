"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Package,
  DollarSign,
  Shield,
  FileText,
  Briefcase,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<{
    [key: string]: boolean;
  }>({});
  const timeoutRef = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  const navigation = [
    {
      name: "How It Works",
      href: "/howitworks",
      hasDropdown: true,
      dropdownKey: "howItWorks",
    },
    { name: "Blogs", href: "/blog" },
    { name: "About", href: "/about-us" },
    { name: "Others", href: "#", hasDropdown: true, dropdownKey: "others" },
  ];

  const howItWorksDropdownItems = [
    {
      icon: Package,
      title: "For Senders",
      description: "Send packages with trusted travelers",
      href: "/howitworks/senders",
    },
    {
      icon: DollarSign,
      title: "For Travelers",
      description: "Earn money while you travel",
      href: "/howitworks/travelers",
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Your safety is our top priority",
      href: "/howitworks/safety",
    },
  ];

  const othersDropdownItems = [
    {
      icon: FileText,
      title: "Privacy Policy",
      description: "Understand how we protect your data",
      href: "/privacy-policy",
    },
    {
      icon: BookOpen,
      title: "Terms & Conditions",
      description: "Our service agreements and guidelines",
      href: "/terms-and-conditions",
    },
    {
      icon: Shield,
      title: "Refund Policy",
      description: "Information on refunds and cancellations",
      href: "/refund-policy",
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our team and build the future",
      href: "/careers",
    },
  ];

  const getDropdownItems = (key: string) => {
    if (key === "howItWorks") return howItWorksDropdownItems;
    if (key === "others") return othersDropdownItems;
    return [];
  };

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current[key]) {
      clearTimeout(timeoutRef.current[key]!);
    }
    setIsDesktopDropdownOpen((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    timeoutRef.current[key] = setTimeout(() => {
      setIsDesktopDropdownOpen((prev) => ({ ...prev, [key]: false }));
    }, 150);
  };

  const toggleMobileDropdown = (key: string) => {
    setIsMobileDropdownOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white/30 mt-4 mx-auto w-full max-w-4xl backdrop-blur-3xl shadow-lg shadow-gray-900/5 rounded-2xl md:rounded-full border border-gray-300/60">
        <nav className="flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-gray-800 hover:text-[#133bbf] transition-colors"
            >
              <Image
                src="/delematelogo.png"
                alt="delemate logo"
                width={120}
                height={120}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((nav) => (
              <div key={nav.name} className="relative">
                {nav.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(nav.dropdownKey!)}
                    onMouseLeave={() => handleMouseLeave(nav.dropdownKey!)}
                  >
                    <button className="flex items-center text-sm font-medium tracking-tight text-gray-700 hover:text-[#133bbf] transition-colors relative group">
                      {nav.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          isDesktopDropdownOpen[nav.dropdownKey!]
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#133bbf] transition-all group-hover:w-full"></span>
                    </button>

                    {/* Dropdown Menu */}
                    {isDesktopDropdownOpen[nav.dropdownKey!] && (
                      <div
                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                        onMouseEnter={() => handleMouseEnter(nav.dropdownKey!)}
                        onMouseLeave={() => handleMouseLeave(nav.dropdownKey!)}
                      >
                        {getDropdownItems(nav.dropdownKey!).map(
                          (item, index) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={index}
                                href={item.href}
                                className="flex items-start px-6 py-4 hover:bg-gray-50 transition-colors group"
                              >
                                <div className="flex-shrink-0 mr-4">
                                  <div className="w-10 h-10 bg-[#133bbf]/10 rounded-full flex items-center justify-center group-hover:bg-[#133bbf]/20 transition-colors">
                                    <Icon className="w-5 h-5 text-[#133bbf]" />
                                  </div>
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900 mb-1">
                                    {item.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className="text-sm font-medium tracking-tight text-gray-700 hover:text-[#133bbf] transition-colors relative group"
                    href={nav.href}
                  >
                    {nav.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#133bbf] transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons - FIXED DUAL BOX SHADOWS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact-us"
              className="relative bg-[#133bb7] text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-tight transition-all transform hover:scale-105 overflow-hidden"
              style={{
                // Combined both box shadows with comma separation
                boxShadow:
                  "inset 0px 2.14px 5.14px 0px rgba(255, 255, 255, 0.3), 0px 1.14px 2.14px 0px #133bb7, 0px 4px 15px rgba(19, 59, 183, 0.25)",
              }}
            >
              {/* Optional: Add a subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-black/5 rounded-full hover:bg-black/0 transition-all"></div>
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200/60 bg-white/95 backdrop-blur-xl rounded-b-2xl py-4">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((nav) => (
                <div key={nav.name}>
                  {nav.hasDropdown ? (
                    <div className="space-y-2">
                      <button
                        className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-[#133bbf] transition-colors"
                        onClick={() => toggleMobileDropdown(nav.dropdownKey!)}
                        aria-expanded={isMobileDropdownOpen[nav.dropdownKey!]}
                      >
                        {nav.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            isMobileDropdownOpen[nav.dropdownKey!]
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen[nav.dropdownKey!] && (
                        <div className="pl-4 space-y-3 pt-2">
                          {getDropdownItems(nav.dropdownKey!).map(
                            (item, index) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-[#133bbf] transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <Icon className="w-4 h-4 mt-0.5 text-[#133bbf]" />
                                  <div>
                                    <div className="font-medium">
                                      {item.title}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className="block text-sm font-medium text-gray-700 hover:text-[#133bbf] transition-colors"
                      href={nav.href}
                      onClick={() => setIsOpen(false)}
                    >
                      {nav.name}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200/60 space-y-3">
                <Link
                  href="/contact-us"
                  className="block bg-[#133bb7] text-white px-6 py-2.5 rounded-full text-sm font-medium text-center"
                  style={{
                    // Same dual box shadows for mobile
                    boxShadow:
                      "inset 0px 2.14px 5.14px 0px rgba(255, 255, 255, 0.3), 0px 1.14px 2.14px 0px #133bb7, 0px 4px 15px rgba(19, 59, 183, 0.25)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
