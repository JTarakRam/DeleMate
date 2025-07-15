"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactUsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-100px)] relative px-4 py-20 overflow-hidden text-center">
        {/* Minimal Dots Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#133bbf]/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#7043dc]/50 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#133bbf]/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/5 right-1/5 w-2.5 h-2.5 bg-[#133bbf]/35 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/5 left-1/5 w-3.5 h-3.5 bg-[#7043dc]/40 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#133bbf]/45 rounded-full animate-bounce delay-800"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-[#133bbf]/35 rounded-full animate-bounce delay-400"></div>
        </div>

        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#133bbf]/20 to-[#7043dc]/20 border border-[#133bbf]/10 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm">
            <Mail className="w-4 h-4 text-[#133bbf]" />
            <span className="text-sm font-medium text-[#133bbf]">
              Get in Touch!
            </span>
          </div>
        </motion.div>

        <div className="text-center flex items-center flex-col gap-y-6 relative z-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#133bbf] to-[#7043dc]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              DeleMate
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're here to help! For any inquiries, feedback, or support, please
            reach out to us directly via email.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-[#133bbf]/10 p-4 rounded-full">
              <Mail className="w-8 h-8 text-[#133bbf]" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Email Us</h3>
              <a
                href="mailto:contact@delemate.com"
                className="text-xl text-[#133bbf] hover:underline transition-colors"
              >
                contact@delemate.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
