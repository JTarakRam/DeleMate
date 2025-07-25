"use client";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import {
  Shield,
  CheckCircle,
  Lock,
  Eye,
  Phone,
  Users,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Safety() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "100% Insured Deliveries (Coming Soon)",
      description:
        "Every package is fully insured up to ₹50,000 against loss or damage",
    },
    {
      icon: Eye,
      title: "Real-time Tracking",
      description:
        "Track your package every step of the way with live GPS updates",
    },
    {
      icon: Users,
      title: "Verified Travelers",
      description:
        "All travelers undergo background checks and identity verification",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Encrypted payment processing with money-back guarantee",
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for any issues or concerns",
    },
    {
      icon: Star,
      title: "Rating System",
      description:
        "Community-driven ratings ensure quality and trustworthiness",
    },
  ];

  const verificationSteps = [
    {
      step: 1,
      title: "Identity Verification",
      description: "Government ID verification with photo matching",
      icon: CheckCircle,
    },
    {
      step: 2,
      title: "Background Check",
      description: "Comprehensive background screening for all travelers",
      icon: Shield,
    },
    {
      step: 3,
      title: "Phone Verification",
      description: "Mobile number verification with OTP confirmation",
      icon: Phone,
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
          <div className="absolute top-1/6 left-1/6 w-2.5 h-2.5 bg-[#7043dc]/50 rounded-full animate-bounce delay-600"></div>
        </div>

        {/* Status Badge with animation */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#133bb7]/20 to-[#7043dc]/20 border border-[#133bb7]/10 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-[#133bb7]" />
            <span className="text-sm font-medium text-[#133bb7]">
              Safety & Security 🛡️
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
            Your Safety is Our{" "}
            <motion.span
              className="text-[62px] text-[#133bb7]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Top Priority
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
              We've built multiple layers of security and verification to ensure
              every delivery is safe, secure, and reliable. Your trust is our
              foundation.
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
              { icon: Shield, text: "100% Insured" },
              { icon: Eye, text: "Real-time Tracking" },
              { icon: Users, text: "Verified Travelers" },
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

          {/* Animated Safety Badge */}
          <motion.div
            className="bg-white/40 mt-4 border border-gray-300 px-4 py-1 rounded-4xl backdrop-blur-2xl flex items-center gap-x-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-4 h-4 text-[#133bb7]" />
            <h2
              className="text-[13px] font-light text-gray-600"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              99.8% safe delivery rate across India
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

      {/* Safety Features */}
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
              Our Safety Features
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Multiple layers of protection to ensure your packages and personal
              information are always secure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
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
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-70">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[48px] tracking-tighter font-bold text-gray-900 mb-6">
              Traveler Verification Process
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Every traveler goes through our rigorous verification process
              before they can deliver packages
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group text-center border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-[#133bbf]/10 rounded-full p-4 mb-6 group-hover:bg-[#133bbf]/20 transition-colors w-20 h-20 flex items-center justify-center mx-auto">
                    <Icon className="w-10 h-10 text-[#133bbf]" />
                  </div>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-500">
                      Step {step.step}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-1">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
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
                <Shield className="w-4 h-4" />
                <p className="font-medium text-[16px]">Safety First</p>
              </div>
              <div className="text-[48px] text-gray-900 font-semibold tracking-tighter text-center">
                Feel Safe, Send with{" "}
                <span className="text-[#133bbf] text-[56px]">Confidence</span>
              </div>
              <p
                className="text-[18px] text-gray-600 text-center font-normal mb-8 max-w-2xl"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Experience the most secure package delivery service in India.
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
                  Start Secure Delivery
                </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
