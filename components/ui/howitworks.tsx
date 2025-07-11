"use client";
import { useState, useEffect, useRef } from "react";

export default function HowItWorksSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        const visibleTop = Math.max(0, windowHeight - rect.top);
        const visibleHeight = Math.min(visibleTop, sectionHeight);
        const progress = Math.max(
          0,
          Math.min(1, visibleHeight / (sectionHeight * 0.8))
        );
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

  const steps = [
    {
      title: "Sign Up",
      description:
        "Create your account with just your mobile number. Quick, secure, and ready to go in seconds.",
      tags: ["Quick Setup", "Secure"],
      icon: "📱",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Choose a Traveler",
      description:
        "Browse verified travelers heading to your destination and select the perfect match for your parcel.",
      tags: ["Verified Travelers", "Real-time Matching"],
      icon: "👥",
      color: "from-indigo-500 to-purple-600",
    },
    {
      title: "Send Your Parcel",
      description:
        "Hand over your package and track its journey in real-time until it safely reaches its destination.",
      tags: ["Live Tracking", "Instant Updates"],
      icon: "📦",
      color: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-[120vh]"
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
        {/* Progress Line - Now visible on all screen sizes, positioned to the left */}
        <div
          className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-200 rounded-full"
          style={{ top: "10px", height: "calc(100% - 80px)" }}
        >
          <div
            className="w-full bg-blue-500 rounded-full transition-all duration-500 ease-out"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Steps */}
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center mb-16 sm:mb-32 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content and Mobile Circle Wrapper */}
            {/* On mobile, this is a flex row with circle on left, content on right */}
            {/* On desktop, this becomes w-1/2 and aligns left/right based on index */}
            <div
              className={`w-full md:w-1/2 flex items-start ${
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              } pl-16 sm:pl-20`}
            >
              {/* Mobile/Desktop Circle Indicator */}
              <div
                className={`absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-10 bg-white border-2 border-gray-200 shadow-sm transition-all duration-500`}
                style={{ top: "0px" }} // Position at the top of the step content
              >
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center text-white text-lg sm:text-xl transition-all duration-500 ${
                    activeStep >= index
                      ? `bg-gradient-to-br ${step.color} scale-110 shadow-xl`
                      : "bg-gray-300"
                  }`}
                >
                  {step.icon}
                </div>
              </div>
              {/* Content Block */}
              <div className="flex-1">
                <div
                  className={`transition-all duration-700 ${
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
                className={`transition-all duration-700 ${
                  activeStep >= index
                    ? "opacity-100 translate-y-0"
                    : "opacity-50 translate-y-8"
                }`}
              >
                <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  {index === 0 && (
                    <SignUpIllustration isActive={activeStep >= 0} />
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
        ))}
      </div>
    </div>
  );
}

function SignUpIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-64 flex items-center justify-center">
      <div className="w-40 h-64 sm:w-48 sm:h-80 bg-gray-900 rounded-3xl p-2 sm:p-3 shadow-2xl">
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-6 sm:h-8 bg-gray-100 flex items-center justify-between px-2 sm:px-4 text-xs font-medium">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-1.5 sm:w-4 sm:h-2 bg-green-500 rounded-sm"></div>
            </div>
          </div>
          {/* App Header */}
          <div className="p-2 sm:p-4 text-center border-b border-gray-100">
            <h4 className="font-bold text-blue-600 text-base sm:text-lg">
              DeleMate
            </h4>
            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1">
              Create your account
            </p>
          </div>
          {/* Form */}
          <div className="p-2 sm:p-4 space-y-2 sm:space-y-4">
            <div>
              <label className="text-xs text-gray-500 block mb-0.5 sm:mb-1">
                Mobile Number
              </label>
              <div className="h-8 sm:h-10 bg-gray-50 rounded-lg flex items-center px-2 sm:px-3 border border-gray-200">
                <span className="text-sm text-gray-400">+91</span>
                {isActive && (
                  <div className="ml-1 sm:ml-2 flex items-center">
                    <span className="text-sm text-gray-900">9876543210</span>
                    <div className="w-0.5 h-3 sm:h-4 bg-blue-500 ml-0.5 sm:ml-1 animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-0.5 sm:mb-1">
                Full Name
              </label>
              <div className="h-8 sm:h-10 bg-gray-50 rounded-lg flex items-center px-2 sm:px-3 border border-gray-200">
                {isActive && (
                  <span className="text-sm text-gray-900">John Doe</span>
                )}
              </div>
            </div>
            <button className="w-full h-8 sm:h-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium mt-4 sm:mt-6 hover:shadow-lg transition-shadow text-sm">
              Create Account
            </button>
          </div>
          {/* Success State */}
          {isActive && (
            <div className="absolute inset-0 bg-white/95 flex items-center justify-center animate-fade-in">
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
                  Account Created!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function TravelerIllustration({ isActive }: { isActive: boolean }) {
  return (
    <div className="w-full h-56 flex items-center justify-center">
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
            <div className="text-blue-600 font-semibold text-xs sm:text-sm">
              ₹150
            </div>
          </div>
        </div>
        {/* Traveler 2 - Selected */}
        <div
          className={`bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-2 sm:p-2.5 text-white transition-all duration-700 ${
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
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></span>
            <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse"></div>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full"></span>
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
