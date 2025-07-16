import Link from "next/link";
import { BiMoney } from "react-icons/bi";
import { FaTrain, FaBus, FaBicycle, FaPlane, FaCar } from "react-icons/fa";

export default function TravelOptionsSection() {
  const travelOptions = [
    {
      icon: FaTrain,
      name: "Train",
      description: "Long distance routes",
    },
    {
      icon: FaBus,
      name: "Bus",
      description: "City & intercity travel",
    },
    {
      icon: FaBicycle,
      name: "Bike",
      description: "Quick local delivery",
    },
    {
      icon: FaPlane,
      name: "Plane",
      description: "Domestic & international",
    },
    {
      icon: FaCar,
      name: "Car",
      description: "Flexible routes",
    },
  ];
  return (
    <div className="bg-[#133bbf] py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-8 sm:mb-12 py-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-x-2 bg-[#fff]/80 px-3 py-1 rounded-md text-[#000] mb-4">
              <BiMoney className="text-lg" />
              <p className="font-light text-sm sm:text-base">Earn Money</p>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] text-[#fff] font-semibold tracking-tighter leading-tight sm:leading-none mb-4">
              Earn Upto{" "}
              <span className="text-[#ffb434] text-4xl sm:text-5xl md:text-6xl lg:text-[56px]">
                800
              </span>{" "}
              EveryTime you travel
            </div>
            <p
              className="text-sm sm:text-base lg:text-[18px] text-gray-300/80 text-center font-normal max-w-2xl"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Turn your daily commute into extra income. Deliver parcels along
              your route and <br className="hidden sm:inline" /> earn money
              while traveling.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {travelOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <div
                key={index}
                className="bg-white hover:bg-gray-50 rounded-2xl p-6 text-[#133bbf] transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#133bbf]/10 rounded-full p-4 mb-4 group-hover:bg-[#133bbf]/20 transition-colors">
                    <IconComponent className="text-3xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {option.name}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-70">
                    {option.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="bg-white hover:bg-gray-100 text-[#133bbf] font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Link
              href="https://play.google.com/store/apps/details?id=com.delemate.delemate&hl=en_US"
              target="_blank"
            >
              Start Earning Today
            </Link>
          </button>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            Join thousands of travelers already earning extra income
          </p>
        </div>
      </div>
    </div>
  );
}
