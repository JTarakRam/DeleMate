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
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu open/close
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false); // State for desktop dropdown hover
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // State for mobile dropdown click
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: "How It Works", href: "/howitworks", hasDropdown: true },
    { name: "Blogs", href: "/blogs" },
    { name: "About", href: "/about-us" },
    { name: "Others", href: "/others" },
  ];

  const dropdownItems = [
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDesktopDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white/30 mt-4 mx-auto w-full max-w-4xl backdrop-blur-3xl shadow-lg shadow-gray-900/5 rounded-2xl md:rounded-full border border-gray-300/60">
        <nav className="flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-gray-800 hover:text-[#133bb7] transition-colors"
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="flex items-center text-sm font-medium tracking-tight text-gray-700 hover:text-[#133bb7] transition-colors relative group">
                      {nav.name}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          isDesktopDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#133bb7] transition-all group-hover:w-full"></span>
                    </button>
                    {/* Dropdown Menu */}
                    {isDesktopDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {dropdownItems.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={index}
                              href={item.href}
                              className="flex items-start px-6 py-4 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="flex-shrink-0 mr-4">
                                <div className="w-10 h-10 bg-[#133bb7]/10 rounded-full flex items-center justify-center group-hover:bg-[#133bb7]/20 transition-colors">
                                  <Icon className="w-5 h-5 text-[#133bb7]" />
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
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    className="text-sm font-medium tracking-tight text-gray-700 hover:text-[#133bb7] transition-colors relative group"
                    href={nav.href}
                  >
                    {nav.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#133bb7] transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/signup"
              className="bg-[#133bbf] hover:from-[#133bb7]/80 hover:to-[#7043dc]/80 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-tight shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:scale-105"
            >
              Contact Us
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
                        className="flex items-center justify-between w-full text-sm font-medium text-gray-700 hover:text-[#133bb7] transition-colors"
                        onClick={() =>
                          setIsMobileDropdownOpen(!isMobileDropdownOpen)
                        }
                        aria-expanded={isMobileDropdownOpen}
                      >
                        {nav.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transition-transform ${
                            isMobileDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isMobileDropdownOpen && (
                        <div className="pl-4 space-y-3 pt-2">
                          {dropdownItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={index}
                                href={item.href}
                                className="flex items-start gap-3 text-sm text-gray-600 hover:text-[#133bb7] transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon className="w-4 h-4 mt-0.5 text-[#133bb7]" />
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
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
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
                  href="/login"
                  className="block text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium text-center shadow-lg shadow-blue-500/25"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
