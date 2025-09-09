"use client";

import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Enhanced blur + slide animation variants
  const blurSlideVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  // Text reveal animation with blur
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 30,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  // Staggered word animation for main heading
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
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

  // Enhanced button hover animations
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.25, 0, 1],
      },
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  // Split text into words for staggered animation
  const mainText = "Send your";
  const highlightText = "Parcels";
  const endText = "seamlessly with DeleMate.";

  const words = [...mainText.split(" "), highlightText, ...endText.split(" ")];

  return (
    <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-300px)] relative px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Live banner with enhanced blur animation */}
      <motion.div
        className="flex justify-center"
        variants={blurSlideVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div
          className="bg-gradient-to-r from-[#133bb7]/20 to-[#7043dc]/20 border border-[#133bb7]/10 px-4 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 40px rgba(19, 59, 183, 0.15)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-xs sm:text-sm font-medium text-[#133bb7]">
            DeleMate is now live! 🚀
          </span>
        </motion.div>
      </motion.div>

      {/* Main content block with enhanced staggered animations */}
      <motion.div
        className="text-center flex items-center flex-col gap-y-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Parcel Image with enhanced floating and blur */}
        <motion.div
          className="absolute -left-[150px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block lg:-left-[250px] xl:-left-[250px]"
          initial={{ opacity: 0, x: -100, filter: "blur(20px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            ease: [0.25, 0.25, 0, 1],
          }}
        >
          <motion.div variants={floatingVariants} animate="animate">
            <Image
              src="/fromyou.png"
              alt="Parcel from you"
              width={200}
              height={200}
              className="drop-shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px]"
            />
          </motion.div>
        </motion.div>

        {/* Right Parcel Image with enhanced floating and blur */}
        <motion.div
          className="absolute -right-[150px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block lg:-right-[250px] xl:-right-[250px]"
          initial={{ opacity: 0, x: 100, filter: "blur(20px)" }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            delay: 0.7,
            ease: [0.25, 0.25, 0, 1],
          }}
        >
          <motion.div variants={floatingVariants} animate="animate">
            <Image
              src="/anywhere.png"
              alt="Parcel to destination"
              width={200}
              height={200}
              className="drop-shadow-xl lg:w-[250px] lg:h-[250px] xl:w-[350px] xl:h-[350px]"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Glowing Rope with animated appearance */}
        <motion.svg
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 w-full max-w-[1200px] h-auto hidden lg:block"
          viewBox="0 0 1200 400"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
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
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <motion.path
            d="M 20 150 Q 200 120 350 180 Q 500 240 650 160 Q 800 100 950 180 Q 1050 220 1150 150"
            stroke="url(#ropeGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#ropeGlow)"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
          />
          <motion.path
            d="M 20 150 Q 200 120 350 180 Q 500 240 650 160 Q 800 100 950 180 Q 1050 220 1150 150"
            stroke="url(#ropeGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
          />
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
        </motion.svg>

        {/* Enhanced Main Heading with staggered word animation */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-gray-800 tracking-tighter leading-tight sm:leading-16 max-w-4xl z-20 relative"
          variants={containerVariants}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`inline-block mr-2 ${
                word === "Parcels"
                  ? "text-5xl sm:text-6xl md:text-7xl lg:text-[62px] text-[#133bb7]"
                  : ""
              }`}
              whileHover={
                word === "Parcels"
                  ? {
                      scale: 1.05,
                      color: "#0f2a8a",
                      transition: { duration: 0.2 },
                    }
                  : {}
              }
            >
              {word}
              {(index === 1 || index === 2) && (
                <br className="hidden sm:inline" />
              )}
            </motion.span>
          ))}
        </motion.h1>

        {/* Enhanced Description with blur animation */}
        <motion.div
          className="text-center z-20 relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] px-4"
          variants={textRevealVariants}
        >
          <h2
            className="text-sm sm:text-md text-gray-800/70 leading-6 tracking-normal font-outfit"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            DeleMate makes sending packages easier and cheaper than ever before.
            Just sign up and tell us where you want your package to go.
          </h2>
        </motion.div>

        {/* Enhanced Discount banner */}
        <motion.div
          className="bg-white/40 mt-4 border border-gray-300 px-3 py-1 rounded-4xl backdrop-blur-2xl flex items-center gap-x-1 sm:gap-x-2 shadow-xl"
          variants={blurSlideVariants}
          whileHover={{
            scale: 1.02,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-[#133bb7]" />
          </motion.div>
          <h2
            className="text-[11px] sm:text-[13px] font-light text-gray-600"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Get upto 60% off on your first order
          </h2>
        </motion.div>

        {/* Enhanced Download Buttons with individual animations */}
        <motion.div
          className="flex flex-row items-center gap-3 sm:gap-4 mt-4 z-30 relative justify-center"
          variants={containerVariants}
        >
          {/* Google Play Button */}
          <motion.div variants={buttonVariants}>
            <Link
              alt="googleplaylink"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.delemate.delemate&hl=en_US"
              className="block"
            >
              <motion.div
                className="flex items-center gap-0 sm:gap-3 bg-black hover:bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoLogoGooglePlaystore className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white" />
                </motion.div>
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
              </motion.div>
            </Link>
          </motion.div>

          {/* App Store Button */}
          <motion.div variants={buttonVariants}>
            <Link
              alt="appstorelink"
              target="_blank"
              href="https://apps.apple.com/in/app/delemate/id6547860986"
              className="block"
            >
              <motion.div
                className="flex items-center gap-0 sm:gap-3 bg-black hover:bg-gray-800 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-xl transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-md flex items-center justify-center"
                  whileHover={{ rotate: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaApple className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
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
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
