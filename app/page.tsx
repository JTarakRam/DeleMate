"use client";
import HeroSection from "@/components/sections/hero";
import BentoSection from "@/components/ui/bentosec";
import HowItWorksSection from "@/components/ui/howitworks";
import TravelOptionsSection from "@/components/ui/rewardscard";
import { MarqueeDemo } from "@/components/ui/testimonals";
import CTASection from "@/components/ui/cta";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-start py-4 sm:py-6 px-4 sm:px-6">
        <div className="min-h-[92vh] w-full max-w-screen-xl bg-gradient-to-l from-orange-100/40 via-green-100/30 to-blue-100/40 backdrop-blur-md rounded-4xl p-4 sm:p-6 border border-gray-200/20 shadow-xl shadow-gray-500/10">
          {/* <Navbar /> */}
          <HeroSection />
        </div>
      </div>
      {/* Video instead of image with negative margin to overlap */}
      <div className="flex items-center justify-center -mt-40 sm:-mt-60 mb-8 sm:mb-16 px-4">
        {" "}
        <Image
          className="rounded-3xl border-4 sm:border-6 border-gray-200 backdrop-blur-2xl shadow-xl w-full max-w-xl sm:max-w-3xl lg:max-w-[950px] h-auto"
          src="/mockup.jpg"
          alt="mockup"
          width={950}
          height={200}
        />{" "}
      </div>
      <BentoSection />
      <HowItWorksSection />
      <TravelOptionsSection />
      <MarqueeDemo />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
}
