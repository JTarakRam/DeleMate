"use client";
import {
  Users,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Leaf,
  CheckCircle,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const whyChooseUs = [
    {
      icon: Target,
      title: "Affordability",
      description:
        "Traditional courier services can be expensive, but DeleMate offers a more affordable alternative.",
    },
    {
      icon: CheckCircle,
      title: "Speed",
      description: "We ensure your parcel is delivered as quickly as possible.",
    },
    {
      icon: Shield,
      title: "Trustworthy",
      description:
        "We verify all our users using KYC to ensure safe transactions.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "By utilizing travelers, we reduce carbon emissions and make deliveries more sustainable.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer-Centric",
      description:
        "We prioritize the needs of our users to provide exceptional service.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly work on enhancing our platform with cutting-edge technology.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "Transparency and honesty are at the core of everything we do.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We aim to reduce our environmental impact and contribute to a greener future.",
    },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced with more dynamic elements */}
      <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-100px)] relative px-4 py-20 overflow-hidden">
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

        {/* Status Badge with animation */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#133bbf]/20 to-[#7043dc]/20 border border-[#133bbf]/10 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm">
            <Users className="w-4 h-4 text-[#133bbf]" />
            <span className="text-sm font-medium text-[#133bbf]">
              About DeleMate 👋
            </span>
          </div>
        </motion.div>

        <div className="text-center flex items-center flex-col gap-y-6 relative z-10 max-w-5xl mx-auto">
          {/* Animated Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 tracking-tighter leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#133bbf] to-[#7043dc]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              DeleMate!
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            DeleMate is an innovative peer-to-peer delivery platform designed to
            make parcel delivery easier, faster, and more affordable. We connect
            travelers with people who need to send parcels, offering a
            convenient solution for long-distance deliveries at a fraction of
            the cost of traditional courier services.
          </motion.p>

          {/* Animated Feature Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { icon: Target, text: "Affordable" },
              { icon: CheckCircle, text: "Fast Delivery" },
              { icon: Shield, text: "Secure" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/60 px-4 py-2 rounded-full shadow-sm"
                variants={fadeIn}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <feature.icon className="w-4 h-4 text-[#133bbf]" />
                <span className="text-sm font-medium text-gray-700">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Mission Badge */}
          <motion.div
            className="bg-white/40 mt-6 border border-gray-300 px-5 py-2 rounded-full backdrop-blur-2xl flex items-center gap-x-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-4 h-4 text-[#133bbf]" />
            <h2 className="text-sm font-light text-gray-600">
              Learn everything about us
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Bold and impactful */}
      <section className="bg-[#133bbf] py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-x-2 bg-white/80 px-3 py-1.5 rounded-md text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Target className="w-4 h-4" />
              <p className="font-medium text-sm">Our Mission</p>
            </motion.div>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl text-white font-extrabold tracking-tighter leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Create a <span className="text-[#ffb434]">Faster</span> & More
              Efficient Delivery Network
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our mission is simple: to create a faster, more affordable, and
              more efficient delivery network by leveraging the power of
              technology and the shared economy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - Grid with animated cards */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tighter mb-6">
              Why Choose DeleMate?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes DeleMate the perfect choice for your delivery
              needs
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-[#133bbf]/10 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-[#133bbf]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#133bbf]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Dynamic layout with image/stats */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tighter mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              How DeleMate came to life and our journey so far
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  DeleMate was founded by a group of passionate individuals who
                  saw an opportunity to change the way deliveries are made. With
                  backgrounds in technology, business, and logistics, we came
                  together with one common goal: to revolutionize parcel
                  delivery.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We understand that sending a parcel can sometimes be a hassle.
                  Our solution is designed to make the process smooth, fast, and
                  affordable, all while connecting people across distances and
                  fostering a community of trusted users.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-[#133bbf] to-[#7043dc] rounded-2xl p-10 text-white shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    10K+
                  </div>
                  <div className="text-white/80 text-base">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    50K+
                  </div>
                  <div className="text-white/80 text-base">Deliveries</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    100+
                  </div>
                  <div className="text-white/80 text-base">Cities</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">99%</div>
                  <div className="text-white/80 text-base">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section - Grid with animated cards */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tighter mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at DeleMate
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="bg-[#133bbf]/10 rounded-full p-4 mb-6 w-16 h-16 flex items-center justify-center mx-auto group-hover:bg-[#133bbf]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#133bbf]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Clean white background with strong message */}
      <section className="bg-white py-20 sm:py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-x-2 bg-[#133bbf]/10 px-4 py-2 rounded-full text-[#133bbf] mb-6 border border-[#133bbf]/20">
              <Star className="w-4 h-4" />
              <p className="font-medium text-base">Our Future</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-extrabold tracking-tighter leading-tight mb-6">
              Thank You for Choosing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#133bbf] to-[#7043dc]">
                DeleMate
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              We are continuously improving DeleMate, expanding our network, and
              building new features to enhance the user experience. Our goal is
              to make DeleMate the go-to platform for peer-to-peer deliveries,
              offering a fast, affordable, and reliable service. We're excited
              to be part of your delivery journey!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
