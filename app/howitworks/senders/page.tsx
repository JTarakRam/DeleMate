"use client";
import { useState, useEffect, useRef } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import {
  Package,
  Shield,
  Clock,
  CreditCard,
  Users,
  Zap,
  MapPin,
  Box,
} from "lucide-react"; // Added Truck, Box
import { motion } from "framer-motion";
import Link from "next/link";

// New PostPackageIllustration component
function PostPackageIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-full max-w-xs bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 relative overflow-hidden">
        <div className="text-center mb-4">
          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
            New Package Details
          </h4>
          <p className="text-xs text-gray-500">Enter your parcel information</p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">
              Pickup Location
            </label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <MapPin className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && (
                <span className="text-sm text-gray-900">Mumbai, India</span>
              )}
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">
              Delivery Location
            </label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <MapPin className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && (
                <span className="text-sm text-gray-900">Delhi, India</span>
              )}
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">
              Package Weight (kg)
            </label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <Box className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && <span className="text-sm text-gray-900">2.5</span>}
            </div>
          </div>
        </div>

        <button className="w-full h-9 bg-gradient-to-r from-v0-blue to-blue-600 text-white rounded-lg font-medium mt-4 text-sm">
          Post Package
        </button>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute inset-0 bg-white/95 flex items-center justify-center animate-fade-in"
          >
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900">
                Package Posted!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function TravelerIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-56 flex flex-col items-center justify-center">
      <div className="text-center mb-2 sm:mb-3">
        <h4 className="font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">
          Available Travelers
        </h4>
        <p className="text-xs text-gray-500">Mumbai → Delhi</p>
      </div>
      <div className="space-y-1 sm:space-y-1.5 w-full max-w-xs mx-auto">
        {/* Traveler 1 */}
        <div
          className={`bg-gray-50 rounded-lg p-2 sm:p-2.5 border border-gray-200 transition-all duration-500 ${
            isActive ? "translate-x-0 opacity-100" : "translate-x-4 opacity-60"
          }`}
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xs">👨</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-xs sm:text-sm">
                Rahul Kumar
              </div>
              <div className="text-xs text-gray-500">⭐ 4.8 • 23 trips</div>
            </div>
            <div className="text-v0-blue font-semibold text-xs sm:text-sm">
              ₹150
            </div>
          </div>
        </div>
        {/* Traveler 2 - Selected */}
        <div
          className={`bg-gradient-to-r from-v0-blue to-blue-600 rounded-lg p-2 sm:p-2.5 text-white transition-all duration-700 ${
            isActive
              ? "scale-105 shadow-lg translate-x-0 opacity-100"
              : "translate-x-4 opacity-60"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xs">👩</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-xs sm:text-sm">Priya Sharma</div>
              <div className="text-xs text-white/80">⭐ 4.9 • 45 trips</div>
            </div>
            <div className="font-semibold text-xs sm:text-sm">₹120</div>
          </div>
          {isActive && (
            <div className="mt-1 text-center animate-fade-in">
              <span className="text-xs">✓ Selected</span>
            </div>
          )}
        </div>
        {/* Traveler 3 */}
        <div
          className={`bg-gray-50 rounded-lg p-2 sm:p-2.5 border border-gray-200 transition-all duration-900 ${
            isActive ? "translate-x-0 opacity-60" : "translate-x-4 opacity-30"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xs">👨</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-xs sm:text-sm">
                Amit Singh
              </div>
              <div className="text-xs text-gray-500">⭐ 4.7 • 12 trips</div>
            </div>
            <div className="text-gray-600 font-semibold text-xs sm:text-sm">
              ₹180
            </div>
          </div>
        </div>
      </div>
      {/* Route indicator */}
      {isActive && (
        <div className="mt-2 sm:mt-3 flex items-center justify-center animate-fade-in">
          <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-500">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-v0-blue rounded-full"></span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-v0-blue to-blue-600 animate-pulse"></div>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></span>
          </div>
        </div>
      )}
    </div>
  );
}

function TrackingIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="text-center">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto relative transition-transform duration-500 ${
            isActive ? "scale-110" : ""
          }`}
        >
          <span className="text-3xl sm:text-4xl">📦</span>
          {isActive && (
            <>
              <div className="absolute inset-0 border-2 border-purple-300 rounded-full animate-ping"></div>
              <div
                className="absolute -inset-2 border border-purple-200 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-purple-600 font-medium text-sm">
            <span>📍</span>
            <span>Live Location</span>
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-600 text-sm">
            <span>🚚</span>
            <span>In Transit</span>
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-500 text-sm">
            <span>📱</span>
            <span>Real-time Updates</span>
          </div>
        </div>
        {isActive && (
          <div className="mt-4 sm:mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse"
                style={{ width: "75%" }}
              ></div>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
              75% Complete
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Senders() {
  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast Delivery",
      description: "Get your packages delivered in hours, not days",
    },
    {
      icon: Shield,
      title: "100% Secure & Insured",
      description: "Every package is insured and tracked in real-time",
    },
    {
      icon: CreditCard,
      title: "Affordable Pricing",
      description: "Save up to 60% compared to traditional courier services",
    },
    {
      icon: Users,
      title: "Verified Travelers",
      description: "All travelers are background-checked and verified",
    },
  ];

  // State and ref for How It Works section
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const scrollY = -rect.top;
        const totalScrollDistance = rect.height + viewportHeight;
        const currentScrollPosition = scrollY + viewportHeight;

        let progress = currentScrollPosition / totalScrollDistance;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial progress on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActiveStep = (progress: number) => {
    if (progress < 0.33) return 0;
    if (progress < 0.66) return 1;
    return 2;
  };
  const activeStep = getActiveStep(scrollProgress);

  // Updated howItWorksSteps to use Lucide icons and match content
  const howItWorksSteps = [
    {
      title: "Post Your Package",
      description: "Enter pickup and delivery details with package information",
      tags: ["Quick Setup", "Secure"],
      icon: Package, // Using Lucide Package icon
      color: "from-v0-blue to-blue-600",
    },
    {
      title: "Choose a Traveler",
      description: "Browse verified travelers going to your destination",
      tags: ["Verified Travelers", "Real-time Matching"],
      icon: Users, // Using Lucide Users icon
      color: "from-blue-600 to-purple-600",
    },
    {
      title: "Track & Receive",
      description: "Real-time tracking until your package is delivered safely",
      tags: ["Live Tracking", "Instant Updates"],
      icon: MapPin, // Using Lucide MapPin icon
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - With dots and text animations */}
      <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-200px)] relative px-4 overflow-hidden">
        {/* Minimal Dots Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#133bb7]/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#7043dc]/50 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#133bb7]/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/5 right-1/5 w-2.5 h-2.5 bg-[#133bb7]/35 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/5 left-1/5 w-3.5 h-3.5 bg-[#7043dc]/40 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#133bb7]/45 rounded-full animate-bounce delay-800"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-[#133bb7]/35 rounded-full animate-bounce delay-400"></div>
        </div>
        {/* Status Badge with animation */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#133bb7]/20 to-[#7043dc]/20 border border-[#133bb7]/10 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm">
            <Package className="w-4 h-4 text-[#133bb7]" />
            <span className="text-sm font-medium text-[#133bb7]">
              For Senders 📦
            </span>
          </div>
        </motion.div>
        <div className="text-center flex items-center flex-col gap-y-4 relative z-10">
          {/* Animated Main Heading */}
          <motion.h1
            className="text-[56px] font-bold text-gray-800 tracking-tighter leading-16 max-w-4xl z-20 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Send Packages with{" "}
            <motion.span
              className="text-[62px] text-[#133bb7]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Trusted Travelers
            </motion.span>
          </motion.h1>
          {/* Animated Subtitle */}
          <motion.div
            className="text-center z-20 relative w-[70%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2
              className="text-md text-gray-800/70 leading-6 tracking-normal font-outfit"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Connect with verified travelers heading to your destination. Send
              your packages quickly, safely, and affordably with DeleMate's
              trusted network.
            </h2>
          </motion.div>
          {/* Animated Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { icon: Zap, text: "Lightning Fast" },
              { icon: Shield, text: "100% Secure" },
              { icon: Package, text: "Real-time Tracking" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-2 rounded-full shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-4 h-4 text-[#133bb7]" />
                <span
                  className="text-sm font-medium text-gray-700"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
          {/* Animated Discount Badge */}
          <motion.div
            className="bg-white/40 mt-4 border border-gray-300 px-4 py-1 rounded-4xl backdrop-blur-2xl flex items-center gap-x-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-[#133bb7]" />
            <h2
              className="text-[13px] font-light text-gray-600"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Get upto 60% off on your first package
            </h2>
          </motion.div>
          {/* Animated Download Buttons */}
          <motion.div
            className="flex items-center gap-4 mt-2 z-30 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.delemate.delemate&hl=en_US"
              target="_blank"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <IoLogoGooglePlaystore className="w-10 h-10 text-white fill-white" />
              </div>
              <div className="text-left">
                <div
                  className="text-xs text-gray-300"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  GET IT ON
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Google Play
                </div>
              </div>
            </motion.a>
            <motion.a
              href="https://apps.apple.com/in/app/delemate/id6547860986"
              target="_blank"
              className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-md flex items-center justify-center">
                <FaApple className="w-10 h-10 text-white" />
              </div>
              <div className="text-left">
                <div
                  className="text-xs text-gray-300"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Download on the
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  App Store
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] tracking-tighter font-bold text-gray-900 mb-6">
              Why Choose DeleMate?
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Experience the future of package delivery with our innovative
              peer-to-peer network
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#133bbf]/10 rounded-full p-4 mb-4 group-hover:bg-[#133bbf]/20 transition-colors">
                      <Icon className="w-8 h-8 text-[#133bbf]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#133bbf]">
                      {benefit.title}
                    </h3>
                    <p className="text-sm opacity-70">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        ref={sectionRef}
        className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-[200vh]"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How DeleMate Works
          </h2>
          <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
            Send your parcels across India in three simple steps. Fast, secure,
            and reliable.
          </p>
        </div>
        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div
            className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-200 rounded-full" // Changed width to w-1
            style={{ top: "10px", height: "calc(100% - 80px)" }}
          >
            <div
              className="w-full bg-[#133bb7] rounded-full transition-all duration-1000 ease-out" // Progress line color
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          {/* Steps */}
          {howItWorksSteps.map((step, index) => {
            const StepIcon = step.icon; // Get the Lucide React component
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-16 sm:mb-32 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content and Mobile Circle Wrapper */}
                <div
                  className={`w-full md:w-1/2 flex items-start ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  } pl-16 sm:pl-20`}
                >
                  {/* Mobile/Desktop Circle Indicator */}
                  <div
                    className={`absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-10 bg-white border-2 border-gray-200 shadow-sm transition-all duration-1000`}
                    style={{ top: "0px" }} // Position at the top of the step content
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center text-white transition-all duration-1000 ${
                        activeStep >= index
                          ? `bg-gradient-to-br ${step.color} scale-110 shadow-xl`
                          : "bg-gray-300"
                      }`}
                    >
                      <StepIcon className="w-6 h-6 sm:w-7 sm:h-7" />{" "}
                      {/* Render Lucide Icon */}
                    </div>
                  </div>
                  {/* Content Block */}
                  <div className="flex-1">
                    <div
                      className={`transition-all duration-1000 ${
                        activeStep >= index
                          ? "opacity-100 translate-y-0"
                          : "opacity-50 translate-y-8"
                      }`}
                    >
                      <div className="text-left">
                        <div className="inline-flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                          <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                          {step.description}
                        </p>
                        <div className="flex gap-2 sm:gap-3 justify-start flex-wrap">
                          {step.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 sm:px-4 sm:py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Illustration */}
                <div
                  className={`w-full md:w-1/2 mt-8 md:mt-0 ${
                    index % 2 === 0 ? "md:pl-16" : "md:pr-16"
                  } pl-0 pr-0`}
                >
                  <div
                    className={`transition-all duration-1000 ${
                      activeStep >= index
                        ? "opacity-100 translate-y-0"
                        : "opacity-50 translate-y-8"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      {index === 0 && (
                        <PostPackageIllustration isActive={activeStep >= 0} />
                      )}
                      {index === 1 && (
                        <TravelerIllustration isActive={activeStep >= 1} />
                      )}
                      {index === 2 && (
                        <TrackingIllustration isActive={activeStep >= 2} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section - Clean white background */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-4 py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-x-2 bg-[#133bbf]/10 px-4 py-2 rounded-full text-[#133bbf] mb-6 border border-[#133bbf]/20">
                <Package className="w-4 h-4" />
                <p className="font-medium text-[16px]">Send Packages</p>
              </div>
              <div className="text-[48px] text-gray-900 font-semibold tracking-tighter text-center">
                Ready to Send Your{" "}
                <span className="text-[#133bbf] text-[56px]">
                  First Package?
                </span>
              </div>
              <p
                className="text-[18px] text-gray-600 text-center font-normal mb-8 max-w-2xl"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Join thousands of satisfied senders who trust DeleMate for their
                delivery needs.
              </p>
              <motion.button
                className="bg-[#133bbf] hover:bg-[#133bbf]/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-[#133bbf]/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.delemate.delemate&hl=en_US#"
                >
                  Get Started Now
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
