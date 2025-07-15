"use client";
import { useState, useEffect, useRef } from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import {
  FaApple,
  FaTrain,
  FaBus,
  FaBicycle,
  FaPlane,
  FaCar,
} from "react-icons/fa";
import {
  DollarSign,
  MapPin,
  Clock,
  Shield,
  Star,
  Smartphone,
  BanknoteIcon as BiMoney,
  CheckCircle,
  Wallet,
  Route,
} from "lucide-react";
import { motion } from "framer-motion";

// New Illustration Components for Travelers
function SignUpVerifyIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-40 h-64 sm:w-48 sm:h-80 bg-gray-900 rounded-3xl p-2 sm:p-3 shadow-2xl">
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-6 sm:h-8 bg-gray-100 flex items-center justify-between px-2 sm:px-4 text-xs font-medium">
            <span>10:30</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-500 rounded-sm"></div>
            </div>
          </div>
          {/* App Header */}
          <div className="p-2 sm:p-4 text-center border-b border-gray-100">
            <h4 className="font-bold text-[#133bb7] text-base sm:text-lg">
              DeleMate Traveler
            </h4>
            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
              Complete your profile
            </p>
          </div>
          {/* Form */}
          <div className="p-2 sm:p-4 space-y-2 sm:space-y-4">
            <div>
              <label className="text-xs text-gray-500 block mb-0.5 sm:mb-1">
                Profile Photo
              </label>
              <div className="h-8 sm:h-10 bg-gray-50 rounded-lg flex items-center px-2 sm:px-3 border border-gray-200">
                {isActive && (
                  <span className="text-sm text-gray-900">Upload...</span>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-0.5 sm:mb-1">
                ID Verification
              </label>
              <div className="h-8 sm:h-10 bg-gray-50 rounded-lg flex items-center px-2 sm:px-3 border border-gray-200">
                {isActive && (
                  <span className="text-sm text-gray-900">Pending...</span>
                )}
              </div>
            </div>
            <button className="w-full h-8 sm:h-10 bg-gradient-to-r from-[#133bb7] to-blue-600 text-white rounded-lg font-medium mt-4 sm:mt-6 hover:shadow-lg transition-shadow text-sm">
              Submit for Review
            </button>
          </div>
          {/* Success State */}
          {isActive && (
            <div className="absolute inset-0 bg-white/95 flex items-center justify-center animate-fade-in">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  Profile Verified!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SetRouteIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-full max-w-xs bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 relative overflow-hidden">
        <div className="text-center mb-4">
          <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
            Set Your Travel Route
          </h4>
          <p className="text-xs text-gray-500">Add your upcoming trips</p>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">Origin</label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <MapPin className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && <span className="text-sm text-gray-900">Delhi</span>}
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">
              Destination
            </label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <MapPin className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && (
                <span className="text-sm text-gray-900">Mumbai</span>
              )}
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-0.5">
              Departure Date
            </label>
            <div className="h-8 bg-gray-50 rounded-lg flex items-center px-2 border border-gray-200">
              <Clock className="w-4 h-4 text-gray-400 mr-1" />
              {isActive && (
                <span className="text-sm text-gray-900">2024-08-15</span>
              )}
            </div>
          </div>
        </div>

        <button className="w-full h-9 bg-gradient-to-r from-[#133bb7] to-blue-600 text-white rounded-lg font-medium mt-4 text-sm">
          Save Route
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
                <Route className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">Route Added!</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function EarnMoneyIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="text-center">
        <div
          className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-100 to-teal-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto relative transition-transform duration-500 ${
            isActive ? "scale-110" : ""
          }`}
        >
          <Wallet className="w-10 h-10 sm:w-12 sm:h-12 text-green-600" />
          {isActive && (
            <>
              <div className="absolute inset-0 border-2 border-green-300 rounded-full animate-ping"></div>
              <div
                className="absolute -inset-2 border border-green-200 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </>
          )}
        </div>
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-green-600 font-medium text-sm">
            <DollarSign className="w-4 h-4" />
            <span>Current Earnings</span>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-gray-900">
            {isActive ? "₹880" : "₹0"}
          </div>
          <div className="flex items-center justify-center gap-1 sm:gap-2 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            <span>Last updated: 1 min ago</span>
          </div>
        </div>
        {isActive && (
          <div className="mt-4 sm:mt-6">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors">
              Withdraw Funds
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Travelers() {
  const travelOptions = [
    {
      icon: FaTrain,
      name: "Train",
      range: "₹400-600",
      description: "Long distance routes",
    },
    {
      icon: FaBus,
      name: "Bus",
      range: "₹300-500",
      description: "City & intercity travel",
    },
    {
      icon: FaBicycle,
      name: "Bike",
      range: "₹200-400",
      description: "Quick local delivery",
    },
    {
      icon: FaPlane,
      name: "Plane",
      range: "₹600-800",
      description: "Domestic & international",
    },
    {
      icon: FaCar,
      name: "Car",
      range: "₹500-700",
      description: "Flexible routes",
    },
  ];
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Extra Income",
      description:
        "Make ₹200-800 per delivery while traveling your usual routes",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose when and where you want to deliver packages",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description:
        "All packages are insured and you're protected by our guarantee",
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Earn ratings and become a trusted traveler in our network",
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

  const howItWorks = [
    {
      step: 1,
      title: "Sign Up & Verify",
      description:
        "Create your profile and complete our quick verification process",
      icon: Smartphone,
      color: "from-[#133bb7] to-blue-600", // Consistent color for progress
    },
    {
      step: 2,
      title: "Set Your Route",
      description: "Add your travel plans and available space for packages",
      icon: MapPin,
      color: "from-blue-600 to-purple-600", // Consistent color for progress
    },
    {
      step: 3,
      title: "Earn Money",
      description: "Accept delivery requests and earn money while you travel",
      icon: DollarSign,
      color: "from-purple-600 to-pink-600", // Consistent color for progress
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - With dots and text animations */}
      <section className="flex flex-col items-center justify-center gap-y-8 min-h-[calc(100vh-200px)] relative px-4 overflow-hidden">
        {/* Minimal Dots Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#ffb434]/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#133bb7]/50 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#ffb434]/30 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-1/5 right-1/5 w-2.5 h-2.5 bg-[#133bb7]/35 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/5 left-1/5 w-3.5 h-3.5 bg-[#7043dc]/40 rounded-full animate-bounce delay-1200"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-[#ffb434]/45 rounded-full animate-bounce delay-800"></div>
          <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-[#133bb7]/35 rounded-full animate-bounce delay-400"></div>
          <div className="absolute top-1/6 left-1/6 w-2.5 h-2.5 bg-[#ffb434]/50 rounded-full animate-bounce delay-600"></div>
        </div>
        {/* Status Badge with animation */}
        <motion.div
          className="flex justify-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#133bb7]/20 to-[#7043dc]/20 border border-[#133bb7]/10 px-6 py-3 rounded-full shadow-lg shadow-blue-500/10 flex items-center gap-2 backdrop-blur-sm">
            <DollarSign className="w-4 h-4 text-[#133bb7]" />
            <span className="text-sm font-medium text-[#133bb7]">
              For Travelers 💰
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
            Earn Money While{" "}
            <motion.span
              className="text-[62px] text-[#133bb7]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              You Travel
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
              Turn your daily commute or travel plans into extra income. Deliver
              packages along your route and earn money with every trip.
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
              { icon: DollarSign, text: "Extra Income" },
              { icon: Clock, text: "Flexible Schedule" },
              { icon: Shield, text: "Safe & Secure" },
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
          {/* Animated Earnings Badge */}
          <motion.div
            className="bg-white/40 mt-4 border border-gray-300 px-4 py-1 rounded-4xl backdrop-blur-2xl flex items-center gap-x-2 shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <BiMoney className="w-4 h-4 text-[#133bb7]" />
            <h2
              className="text-[13px] font-light text-gray-600"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Earn ₹15,000+ average monthly income
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
              href="#"
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
              href="#"
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
      {/* Travel Options Section - With animations */}
      <section className="bg-[#133bbf] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="flex items-center justify-center mb-4 py-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <motion.div
                className="flex items-center gap-x-2 bg-[#fff]/80 px-2 py-1 rounded-md text-[#000]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <BiMoney />
                <p className="font-light text-[16px]">Earn Money</p>
              </motion.div>
              <motion.div
                className="text-[48px] text-[#fff] font-semibold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Earn Upto{" "}
                <span className="text-[#ffb434] text-[56px]">800</span>{" "}
                EveryTime you travel
              </motion.div>
              <motion.p
                className="text-[18px] text-gray-300/80 text-center font-normal"
                style={{ fontFamily: "var(--font-outfit)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Turn your daily commute into extra income. Deliver parcels along
                your route and <br /> earn money while traveling.
              </motion.p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {travelOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white hover:bg-gray-50 rounded-2xl p-6 text-[#133bbf] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#133bbf]/10 rounded-full p-4 mb-4 group-hover:bg-[#133bbf]/20 transition-colors">
                      <IconComponent className="text-3xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {option.name}
                    </h3>
                    <div className="text-lg font-bold text-[#133bbf] mb-1">
                      {option.range}
                    </div>
                    <p className="text-sm opacity-70">{option.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white hover:bg-gray-100 text-[#133bbf] font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Earning Today
            </motion.button>
            <p className="text-gray-300 mt-4">
              Join thousands of travelers already earning extra income
            </p>
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
              Why Become a DeleMate Traveler?
            </h2>
            <p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Join our community of trusted travelers and start earning today
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
      {/* How It Works */}
      <section
        ref={sectionRef}
        className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-[200vh]"
      >
        {/* Header */}
        <div className="text-center mb-8 sm:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            How It Works for Travelers
          </h2>
          <p
            className="text-base sm:text-xl text-gray-600 leading-relaxed"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Start earning in 3 simple steps
          </p>
        </div>
        {/* Steps Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div
            className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-200 rounded-full"
            style={{ top: "10px", height: "calc(100% - 80px)" }}
          >
            <div
              className="w-full bg-[#133bbf] rounded-full transition-all duration-1000 ease-out" // Progress line color
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          {/* Steps */}
          {howItWorks.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.step}
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
                      <StepIcon className="w-6 h-6 sm:w-7 sm:h-7" />
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
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                          {step.description}
                        </p>
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
                        <SignUpVerifyIllustration isActive={activeStep >= 0} />
                      )}
                      {index === 1 && (
                        <SetRouteIllustration isActive={activeStep >= 1} />
                      )}
                      {index === 2 && (
                        <EarnMoneyIllustration isActive={activeStep >= 2} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
