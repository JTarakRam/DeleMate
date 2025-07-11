"use client";

import { useState } from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  Users,
  Smartphone,
  Package,
  Star,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Sign Up",
      subtitle:
        "Create an account by entering your mobile number, and you're ready to send parcels.",
      time: "Sign up in less than 30 seconds",
      icon: Smartphone,
      color: "bg-blue-500",
      image: "/signup-mockup.jpg",
    },
    {
      id: 2,
      title: "Choose a Traveler",
      subtitle:
        "Find a traveler heading to your destination, and select them to carry your package.",
      time: "Over 5000+ verified travelers",
      icon: Users,
      color: "bg-green-500",
      image: "/traveler-mockup.jpg",
    },
    {
      id: 3,
      title: "Send Your Parcel",
      subtitle:
        "Send your parcel and enjoy real-time tracking until it reaches its destination.",
      time: "100% secure delivery guarantee",
      icon: Package,
      color: "bg-purple-500",
      image: "/tracking-mockup.jpg",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Get your parcels delivered in minutes, not hours",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Every delivery is insured and tracked in real-time",
    },
    {
      icon: Users,
      title: "Verified Travelers",
      description: "All our travelers are background-checked and verified",
    },
    {
      icon: Star,
      title: "Rated 4.9/5",
      description: "Trusted by thousands of satisfied customers",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#133bb7] to-[#7043dc] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              Why Spending Hours?
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get Parcels Delivered in{" "}
              <span className="text-yellow-300">Minutes</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              DeleMate makes sending packages easier and cheaper than ever
              before. Just sign up and tell us where you want your package to
              go.
            </p>
          </div>

          {/* App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-2xl text-lg font-medium flex items-center gap-3 shadow-2xl transition-all">
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300">GET IT ON</span>
                <span className="text-lg font-bold">Google Play</span>
              </div>
            </button>
            <button className="bg-black hover:bg-black/80 text-white px-8 py-6 rounded-2xl text-lg font-medium flex items-center gap-3 shadow-2xl transition-all">
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-300">DOWNLOAD ON THE</span>
                <span className="text-lg font-bold">App Store</span>
              </div>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-3 inline-block">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Intuitive Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the simplicity of managing deliveries with our powerful
              yet easy-to-use dashboard.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Live Dashboard
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Live Updates</span>
                </div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Active Deliveries
                        </p>
                        <p className="text-3xl font-bold text-[#133bb7]">24</p>
                      </div>
                      <Package className="w-8 h-8 text-[#133bb7]" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">
                          Available Travelers
                        </p>
                        <p className="text-3xl font-bold text-green-500">156</p>
                      </div>
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Success Rate</p>
                        <p className="text-3xl font-bold text-purple-500">
                          99.8%
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#133bb7]/10 to-[#7043dc]/10 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Simplified Process
                </h4>
                <p className="text-gray-600">
                  Track all your deliveries, manage travelers, and monitor
                  payments in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How DeleMate Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to send your parcels across India
              quickly and securely.
            </p>
          </div>

          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4 bg-gray-100 rounded-full p-2">
              {steps.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeStep === step.id
                      ? "bg-[#133bb7] text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Step {step.id}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {steps.map((step) => {
                const Icon = step.icon;
                if (step.id !== activeStep) return null;

                return (
                  <div key={step.id} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`${step.color} p-4 rounded-2xl text-white`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">
                          Step {step.id}
                        </span>
                        <h3 className="text-3xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600 leading-relaxed">
                      {step.subtitle}
                    </p>

                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500" />
                        <span className="font-semibold text-gray-900">
                          {step.time}
                        </span>
                      </div>
                    </div>

                    <button className="bg-[#133bb7] hover:bg-[#133bb7]/90 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2 transition-all">
                      Get Started Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 mx-auto">
                    {(() => {
                      const step = steps.find((s) => s.id === activeStep);
                      if (!step) return null;
                      const Icon = step.icon;
                      return <Icon className="w-16 h-16 text-[#133bb7]" />;
                    })()}
                  </div>
                  <p className="text-gray-600">
                    Step {activeStep} Visualization
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Steps Overview */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative">
                    <div
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-xl transition-shadow cursor-pointer h-full"
                      onClick={() => setActiveStep(step.id)}
                    >
                      <div className="p-8 text-center">
                        <div
                          className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-500">
                            Step {step.id}
                          </span>
                          <h3 className="text-2xl font-bold text-gray-900 mt-1">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4">{step.subtitle}</p>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <span className="text-sm font-medium text-gray-700">
                            {step.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="w-8 h-8 text-gray-300" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#133bb7] to-[#7043dc] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of satisfied customers who trust DeleMate for their
            delivery needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#133bb7] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium transition-all">
              Start Sending Parcels
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#133bb7] px-8 py-4 rounded-full text-lg font-medium bg-transparent transition-all">
              Become a Traveler
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
