"use client";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import Image from "next/image"; // Import Image component

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Daily Commuter",
      image: "/placeholder.svg?height=150&width=150", // Using placeholder
      quote:
        "I earn ₹600-800 every day just by delivering packages on my way to work. It's completely changed my monthly income!",
      rating: 5,
      location: "Mumbai",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Bike Delivery Partner",
      image: "/placeholder.svg?height=150&width=150", // Using placeholder
      quote:
        "The flexible routes mean I can earn while going anywhere in the city. Best side income I've ever had!",
      rating: 5,
      location: "Delhi",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Weekend Traveler",
      image: "/placeholder.svg?height=150&width=150", // Using placeholder
      quote:
        "Even on weekend trips, I can pick up deliveries along my route. It pays for my travel expenses!",
      rating: 5,
      location: "Bangalore",
    },
  ];
  const additionalTestimonials = [
    {
      name: "Amit Patel",
      role: "Car Driver",
      quote:
        "Perfect for long-distance routes. I've made over ₹15,000 this month just by adding deliveries to my regular trips.",
      image: "/placeholder.svg?height=80&width=80", // Using placeholder
    },
    {
      name: "Neha Gupta",
      role: "Train Commuter",
      quote:
        "Never thought I could earn money while taking the train to work. Simple registration and instant earnings!",
      image: "/placeholder.svg?height=80&width=80", // Using placeholder
    },
  ];
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-[#133bbf]/10 p-2 rounded-lg">
              <FaStar className="text-[#133bbf] text-xl" />
            </div>
            <span className="ml-2 text-gray-600 font-medium text-sm sm:text-base">
              Testimonial
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-tighter font-bold text-gray-900 mb-2">
            Here's what
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] tracking-tighter font-bold text-gray-900 mb-8">
            people are saying.
          </h2>
        </div>
        {/* Main Testimonial */}
        <div className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#133bbf] to-[#0f2ea3]">
                <Image
                  src={
                    testimonials[currentTestimonial].image || "/placeholder.svg"
                  }
                  alt={testimonials[currentTestimonial].name}
                  width={
                    testimonials[currentTestimonial].image.includes("150")
                      ? 150
                      : 80
                  } // Adjust width based on placeholder size
                  height={
                    testimonials[currentTestimonial].image.includes("150")
                      ? 150
                      : 80
                  } // Adjust height based on placeholder size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3 sm:mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-lg sm:text-xl"
                    />
                  )
                )}
              </div>
              <blockquote className="text-base sm:text-xl md:text-2xl text-gray-700 font-medium mb-4 sm:mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div>
                <div className="font-bold text-base sm:text-lg text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {testimonials[currentTestimonial].role} •{" "}
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>
          </div>
          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 md:left-6">
            <button
              onClick={prevTestimonial}
              className="bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors"
            >
              <FaChevronLeft className="text-[#133bbf] text-base sm:text-lg" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 md:right-6">
            <button
              onClick={nextTestimonial}
              className="bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-50 transition-colors"
            >
              <FaChevronRight className="text-[#133bbf] text-base sm:text-lg" />
            </button>
          </div>
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-[#133bbf]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        {/* Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {additionalTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <blockquote className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={testimonial.image.includes("150") ? 150 : 80} // Adjust width based on placeholder size
                  height={testimonial.image.includes("150") ? 150 : 80} // Adjust height based on placeholder size
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm sm:text-base text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-[#133bbf] hover:bg-[#0f2ea3] text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mb-4">
            View all
          </button>
          <p className="text-gray-600 text-xs sm:text-sm">
            📖 Read the remaining user and delivery partner testimonials
          </p>
        </div>
      </div>
    </div>
  );
}
