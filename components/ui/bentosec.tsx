"use client";

export default function BentoSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-y-6 mb-16 px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-semibold tracking-tighter leading-tight sm:leading-16">
            Send With{" "}
            <span className="text-[#133bb7] italic text-4xl sm:text-5xl md:text-[52px]">
              heart
            </span>{" "}
            <br className="sm:hidden" />
            Travel with{" "}
            <span className="text-[#133bb7] italic text-4xl sm:text-5xl md:text-[52px]">
              Purpose
            </span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {/* First row of cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
            {/* Live Tracking - Large purple card with world map animation */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[700px] h-[300px] sm:h-[350px] bg-[#7043dc] rounded-4xl p-6 sm:p-8 text-white hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-full relative z-10">
                <div className="flex-1 pr-0 sm:pr-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                    Live Tracking
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Track your packages in real-time with precise location
                    updates
                  </p>
                  <div className="flex items-center gap-2 text-white/80 font-medium text-sm">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Active now</span>
                  </div>
                </div>
                {/* Large animated world map with moving package */}
                <div className="w-full h-auto max-w-[180px] sm:max-w-[256px] sm:h-[192px] relative flex-shrink-0 mt-4 sm:mt-0">
                  <svg
                    width="256"
                    height="192"
                    viewBox="0 0 256 192"
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* World map outline */}
                    <path
                      d="M20 60 Q40 40 80 50 Q120 45 160 55 Q200 50 240 60 L240 80 Q200 90 160 85 Q120 90 80 85 Q40 80 20 80 Z"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.1)"
                    />
                    <path
                      d="M30 100 Q60 95 100 105 Q140 100 180 110 Q220 105 250 115 L250 140 Q220 150 180 145 Q140 150 100 145 Q60 140 30 140 Z"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.1)"
                    />
                    {/* Flight path */}
                    <path
                      d="M40 70 Q128 30 220 75"
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="8 4"
                      className="animate-pulse"
                    />
                    {/* Moving package/plane */}
                    <g>
                      <circle r="6" fill="white" className="drop-shadow-lg">
                        <animateMotion dur="4s" repeatCount="indefinite">
                          <mpath href="#flightPath" />
                        </animateMotion>
                      </circle>
                      <circle
                        r="12"
                        fill="none"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="1"
                      >
                        <animateMotion dur="4s" repeatCount="indefinite">
                          <mpath href="#flightPath" />
                        </animateMotion>
                      </circle>
                      <path
                        id="flightPath"
                        d="M40 70 Q128 30 220 75"
                        fill="none"
                        stroke="none"
                      />
                    </g>
                    {/* Pulsing location pins */}
                    <g>
                      <circle
                        cx="40"
                        cy="70"
                        r="8"
                        fill="rgba(34, 197, 94, 0.8)"
                        className="animate-ping"
                      />
                      <circle cx="40" cy="70" r="4" fill="rgb(34, 197, 94)" />
                    </g>
                    <g>
                      <circle
                        cx="220"
                        cy="75"
                        r="8"
                        fill="rgba(239, 68, 68, 0.8)"
                        className="animate-ping"
                        style={{ animationDelay: "1s" }}
                      />
                      <circle cx="220" cy="75" r="4" fill="rgb(239, 68, 68)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {/* KYC Verification - Medium yellow card with large document scanner */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[480px] h-[300px] sm:h-[350px] bg-[#ffb434] rounded-4xl p-6 sm:p-8 text-gray-800 hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex-shrink-0">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                    KYC Verification
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6">
                    Secure identity verification for trusted deliveries
                  </p>
                </div>
                {/* Large animated document scanner */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-24 h-32 sm:w-32 sm:h-40 relative">
                    {/* Document */}
                    <div className="w-full h-full bg-white rounded-lg shadow-lg border-2 border-gray-300 relative overflow-hidden">
                      {/* Document content */}
                      <div className="p-2 sm:p-3 space-y-1 sm:space-y-2">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full mx-auto mb-1 sm:mb-2"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-300 rounded w-full"></div>
                          <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                        </div>
                      </div>
                      {/* Scanning beam */}
                      <div className="absolute left-0 right-0 h-1 bg-green-400 shadow-lg shadow-green-400/50 scanning-beam"></div>
                    </div>
                    {/* Verification checkmarks */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center verification-check">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="white"
                      >
                        <path d="M13.5 3.5L6 11l-3.5-3.5L1 9l5 5 9-9-1.5-1.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 font-medium mt-4 sm:mt-0">
                  Verified & Secure
                </div>
              </div>
            </div>
          </div>
          {/* Second row of cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full">
            {/* Fast & Affordable - Medium blue card with rocket animation */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[480px] h-[300px] sm:h-[350px] bg-[#133bb7] rounded-4xl p-6 sm:p-8 text-white hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex-shrink-0">
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                    Fast & Affordable
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
                    Best rates guaranteed with lightning-fast delivery
                  </p>
                </div>
                {/* Large rocket animation */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 relative">
                    <svg
                      width="128"
                      height="128"
                      viewBox="0 0 128 128"
                      className="rocket-container w-full h-full"
                    >
                      {/* Rocket body */}
                      <g className="rocket">
                        <ellipse cx="64" cy="45" rx="12" ry="25" fill="white" />
                        <ellipse
                          cx="64"
                          cy="35"
                          rx="8"
                          ry="15"
                          fill="rgba(255,255,255,0.8)"
                        />
                        <circle
                          cx="64"
                          cy="30"
                          r="4"
                          fill="rgba(255,255,255,0.6)"
                        />
                        {/* Rocket fins */}
                        <path
                          d="M52 60 L58 70 L64 60 Z"
                          fill="rgba(255,255,255,0.7)"
                        />
                        <path
                          d="M76 60 L70 70 L64 60 Z"
                          fill="rgba(255,255,255,0.7)"
                        />
                      </g>
                      {/* Rocket flames */}
                      <g className="flames">
                        <ellipse
                          cx="64"
                          cy="75"
                          rx="6"
                          ry="12"
                          fill="rgba(255, 165, 0, 0.8)"
                          className="flame-1"
                        />
                        <ellipse
                          cx="64"
                          cy="80"
                          rx="4"
                          ry="8"
                          fill="rgba(255, 69, 0, 0.6)"
                          className="flame-2"
                        />
                        <ellipse
                          cx="64"
                          cy="85"
                          rx="2"
                          ry="6"
                          fill="rgba(255, 255, 0, 0.4)"
                          className="flame-3"
                        />
                      </g>
                      {/* Speed lines */}
                      <g className="speed-lines">
                        <line
                          x1="20"
                          y1="40"
                          x2="35"
                          y2="40"
                          stroke="rgba(255,255,255,0.6)"
                          strokeWidth="2"
                        />
                        <line
                          x1="15"
                          y1="50"
                          x2="35"
                          y2="50"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="2"
                        />
                        <line
                          x1="25"
                          y1="60"
                          x2="40"
                          y1="60"
                          stroke="rgba(255,255,255,0.5)"
                          strokeWidth="2"
                        />
                        <line
                          x1="93"
                          y1="40"
                          x2="108"
                          y2="40"
                          stroke="rgba(255,255,255,0.6)"
                          strokeWidth="2"
                        />
                        <line
                          x1="93"
                          y1="50"
                          x2="113"
                          y2="50"
                          stroke="rgba(255,255,255,0.4)"
                          strokeWidth="2"
                        />
                        <line
                          x1="88"
                          y1="60"
                          x2="103"
                          y2="60"
                          stroke="rgba(255,255,255,0.5)"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* 5 Step Verification - Large red card with large progress wheel */}
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-[700px] h-[300px] sm:h-[350px] bg-[#ff3659] rounded-4xl p-6 sm:p-8 text-white hover:shadow-lg transition-all duration-300 group relative overflow-hidden flex-shrink-0">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between h-full relative z-10">
                <div className="flex-1 pr-0 sm:pr-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">
                    5 Step Verification
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                    Comprehensive security process for maximum safety
                  </p>
                  {/* Step indicators */}
                  <div className="flex gap-2 sm:gap-3">
                    {[1, 2, 3, 4, 5].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div
                          className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-[#ff3659] rounded-full flex items-center justify-center text-xs sm:text-sm font-bold step-indicator"
                          style={{ animationDelay: `${step * 0.6}s` }}
                        >
                          {step}
                        </div>
                        <div className="text-xs mt-1 opacity-80">
                          Step {step}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Large animated progress wheel */}
                <div className="w-full h-auto max-w-[128px] sm:max-w-[192px] sm:h-[192px] relative flex-shrink-0 mt-4 sm:mt-0">
                  <svg
                    width="192"
                    height="192"
                    viewBox="0 0 192 192"
                    className="transform -rotate-90 w-full h-full"
                  >
                    {/* Background circle */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress circles */}
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="white"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="502"
                      strokeDashoffset="502"
                      className="progress-circle"
                      strokeLinecap="round"
                    />
                    {/* Inner decorative circles */}
                    <circle
                      cx="96"
                      cy="96"
                      r="60"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4 4"
                      className="rotate-slow"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="40"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="1"
                      fill="none"
                      strokeDasharray="2 2"
                      className="rotate-reverse"
                    />
                  </svg>
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold mb-1">
                        5
                      </div>
                      <div className="text-sm opacity-80">STEPS</div>
                    </div>
                  </div>
                  {/* Floating security icons */}
                  <div className="absolute inset-0 hidden sm:block">
                    <div className="security-icon security-icon-1">🔒</div>
                    <div className="security-icon security-icon-2">🛡️</div>
                    <div className="security-icon security-icon-3">✓</div>
                    <div className="security-icon security-icon-4">🔐</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .scanning-beam {
          animation: scan 2s ease-in-out infinite;
        }
        .verification-check {
          animation: checkPop 3s ease-in-out infinite;
        }
        .rocket {
          animation: rocketFloat 2s ease-in-out infinite;
        }
        .flames .flame-1 {
          animation: flicker1 0.5s ease-in-out infinite alternate;
        }
        .flames .flame-2 {
          animation: flicker2 0.7s ease-in-out infinite alternate;
        }
        .flames .flame-3 {
          animation: flicker3 0.3s ease-in-out infinite alternate;
        }
        .speed-lines {
          animation: speedLines 1s ease-in-out infinite;
        }
        .progress-circle {
          animation: progressFill 5s ease-in-out infinite;
        }
        .step-indicator {
          animation: stepPulse 3s ease-in-out infinite;
        }
        .rotate-slow {
          animation: rotateSlow 10s linear infinite;
        }
        .rotate-reverse {
          animation: rotateReverse 8s linear infinite;
        }
        .security-icon {
          position: absolute;
          font-size: 20px;
          animation: float 3s ease-in-out infinite;
        }
        .security-icon-1 {
          top: 20px;
          left: 20px;
          animation-delay: 0s;
        }
        .security-icon-2 {
          top: 20px;
          right: 20px;
          animation-delay: 0.5s;
        }
        .security-icon-3 {
          bottom: 20px;
          left: 20px;
          animation-delay: 1s;
        }
        .security-icon-4 {
          bottom: 20px;
          right: 20px;
          animation-delay: 1.5s;
        }
        @keyframes scan {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: calc(100% - 4px);
            opacity: 0;
          }
        }
        @keyframes checkPop {
          0%,
          70% {
            transform: scale(0);
            opacity: 0;
          }
          80% {
            transform: scale(1.2);
            opacity: 1;
          }
          90% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes rocketFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes flicker1 {
          0% {
            opacity: 0.8;
            transform: scaleY(1);
          }
          100% {
            opacity: 1;
            transform: scaleY(1.2);
          }
        }
        @keyframes flicker2 {
          0% {
            opacity: 0.6;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.9;
            transform: scaleY(1.3);
          }
        }
        @keyframes flicker3 {
          0% {
            opacity: 0.4;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.7;
            transform: scaleY(1.4);
          }
        }
        @keyframes speedLines {
          0% {
            opacity: 0.3;
            transform: translateX(0);
          }
          50% {
            opacity: 0.8;
            transform: translateX(5px);
          }
          100% {
            opacity: 0.3;
            transform: translateX(0);
          }
        }
        @keyframes progressFill {
          0% {
            stroke-dashoffset: 502;
          }
          70% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 502;
          }
        }
        @keyframes stepPulse {
          0%,
          60% {
            transform: scale(1);
            background-color: white;
          }
          70% {
            transform: scale(1.2);
            background-color: #fbbf24;
          }
          80% {
            transform: scale(1);
            background-color: white;
          }
        }
        @keyframes rotateSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes rotateReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-8px) scale(1.1);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
