import {
  FaTruck,
  FaRoute,
  FaMobile,
  FaBox,
  FaUsers,
  FaClock,
  FaShippingFast,
} from "react-icons/fa";

export default function CTASection() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Illustration */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Main Mobile Device */}
              <div className="bg-gradient-to-br from-[#133bbf] to-[#0f2ea3] rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-[#133bbf] rounded-full flex items-center justify-center">
                      <FaTruck className="text-white text-sm" />
                    </div>
                    <span className="font-semibold text-gray-800">
                      Available Parcels
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700">
                        3 Parcels Available
                      </span>
                      <span className="text-green-600 text-[14px] font-bold">
                        Hyderabad → Bengaluru
                      </span>
                    </div>
                    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700">
                        2 Local Deliveries
                      </span>
                      <span className="text-blue-600 font-bold">Same City</span>
                    </div>
                    <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-700">
                        Express Package
                      </span>
                      <span className="text-purple-600 font-bold">
                        Priority
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <FaBox className="text-lg" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#133bbf] text-white p-3 rounded-full shadow-lg animate-pulse">
                <FaShippingFast className="text-lg" />
              </div>

              <div className="absolute top-1/2 -left-8 bg-orange-500 text-white p-2 rounded-full shadow-lg">
                <FaClock className="text-sm" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-8 left-1/4 w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-8 right-1/4 w-6 h-6 bg-pink-400 rounded-full opacity-40"></div>
              <div className="absolute top-1/4 -right-8 w-3 h-3 bg-blue-400 rounded-full opacity-70"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Send Parcels Anytime & Anywhere
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your{" "}
              <span className="bg-gradient-to-r from-[#133bbf] to-[#0f2ea3] bg-clip-text text-transparent">
                Personal
              </span>
              <br />
              <span className="bg-green-400 text-black px-3 py-1 rounded-lg">
                Parcel
              </span>{" "}
              Hub.
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We've designed the perfect platform to connect your parcels with
              travelers going your way, making it easy to send packages quickly
              and reliably across any distance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-[#133bbf] mb-1">
                  3000+
                </div>
                <div className="text-sm text-gray-600">Users</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  6-8 hr
                </div>
                <div className="text-sm text-gray-600">Avg. Delivery Time</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                <span className="mr-2">Send Your Parcel</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <FaUsers className="text-green-500" />
                  <span>Trusted by 3000+ users</span>
                </div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <FaMobile className="text-blue-500" />
                  <span>Track in real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
