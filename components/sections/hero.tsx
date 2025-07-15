"use client";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start("visible");
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-300px)] relative px-4 sm:px-6 lg:px-8">
      {/* Live banner - already animated */}
      <motion.div className="flex justify-center" variants={itemVariants}>
        <div className="bg-gradient-to-r from-[#133bb7]/20 to-[#7043dc]/20 border border-[#133bb7]/10 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-[#133bb7]">
            DeleMate is now live! 🚀
          </span>
        </div>
      </motion.div>

      {/* Main content block with staggered animations */}
      <motion.div
        className="text-center flex items-center flex-col gap-y-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Parcel Image with floating animation */}
        <motion.div
          className="absolute -left-[150px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block lg:-left-[250px] xl:-left-[250px]"
          variants={floatingVariants}
          animate="animate"
        >
          <Image
            src="/fromyou.png"
            alt="Parcel from you"
            width={200}
            height={200}
            className="drop-shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px]"
          />
        </motion.div>
        {/* Right Parcel Image with floating animation */}
        <motion.div
          className="absolute -right-[150px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block lg:-right-[250px] xl:-right-[250px]"
          variants={floatingVariants}
          animate="animate"
        >
          <Image
            src="/anywhere.png"
            alt="Parcel to destination"
            width={200}
            height={200}
            className="drop-shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px]"
          />
        </motion.div>

        {/* Glowing Rope-like Curved Line - Behind everything and moved down */}
        <svg
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-full max-w-[1200px] h-auto hidden lg:block"
          viewBox="0 0 1200 400"
        >
          <defs>
            <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#60a5fa" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#2563eb" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.6" />
            </linearGradient>
            <filter id="ropeGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {/* Main rope path with multiple curves - light blue colors */}
          <path
            d="M 20 150 Q 200 120 350 180 Q 500 240 650 160 Q 800 100 950 180 Q 1050 220 1150 150"
            stroke="url(#ropeGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#ropeGlow)"
            strokeLinecap="round"
          />
          {/* Additional glow layer */}
          <path
            d="M 20 150 Q 200 120 350 180 Q 500 240 650 160 Q 800 100 950 180 Q 1050 220 1150 150"
            stroke="url(#ropeGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
          />
          {/* Light blue animated dots */}
          <circle r="4" fill="#3b82f6" className="opacity-60">
            <animateMotion dur="5s" repeatCount="indefinite">
              <mpath href="#ropePath" />
            </animateMotion>
          </circle>
          <circle r="3" fill="#60a5fa" className="opacity-50">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s">
              <mpath href="#ropePath" />
            </animateMotion>
          </circle>
          <path
            id="ropePath"
            d="M 20 150 Q 200 120 350 180 Q 500 240 650 160 Q 800 100 950 180 Q 1050 220 1150 150"
            fill="none"
            stroke="none"
          />
        </svg>

        {/* Main Heading with animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-gray-800 tracking-tighter leading-tight sm:leading-16 max-w-4xl z-20 relative"
          variants={itemVariants}
        >
          Send your{" "}
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[62px] text-[#133bb7]">
            Parcels{" "}
          </span>{" "}
          seamlessly <br className="hidden sm:inline" /> with DeleMate.
        </motion.h1>

        {/* Description with animation */}
        <motion.div
          className="text-center z-20 relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] px-4"
          variants={itemVariants}
        >
          <h2
            className="text-sm sm:text-md text-gray-800/70 leading-6 tracking-normal font-outfit"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            DeleMate makes sending packages easier and cheaper than ever before.
            Just sign up and tell us where you want your package to go.
          </h2>
        </motion.div>

        {/* Discount banner with animation */}
        <motion.div
          className="bg-white/40 mt-4 border border-gray-300 px-3 py-1 rounded-4xl backdrop-blur-2xl flex items-center gap-x-1 sm:gap-x-2 shadow-xl"
          variants={itemVariants}
        >
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#133bb7]" />
          <h2
            className="text-[11px] sm:text-[13px] font-light text-gray-600"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get upto 60% off on your first order
          </h2>
        </motion.div>

        {/* Download Buttons - now always in a row and centered, with animation */}
        <motion.div
          className="flex flex-row items-center gap-3 sm:gap-4 mt-4 z-30 relative justify-center"
          variants={itemVariants}
        >
          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-0 sm:gap-3 bg-black hover:bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center">
              <IoLogoGooglePlaystore className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
            </div>
            <div className="text-left hidden sm:block">
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
          </a>
          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-0 sm:gap-3 bg-black hover:bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center">
              <FaApple className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="text-left hidden sm:block">
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
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
