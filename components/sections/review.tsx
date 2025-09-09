"use client";

import type * as React from "react";
import { Trophy, Star, Award, Crown } from "lucide-react";
import { cn } from "@/lib/utlis";

type Achievement = {
  id: string;
  label: string;
  value: string;
  helper?: string;
  icon?: React.ReactNode;
};

type Brand = "blue";

const brandStyles: Record<
  Brand,
  {
    ring: string;
    border: string;
    text: string;
    glow: string;
    dot: string;
    badge: string;
    accent: string;
  }
> = {
  blue: {
    ring: "ring-blue-500/30",
    border: "border-blue-100",
    text: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 border border-blue-100",
    accent: "bg-blue-500",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    dot: "bg-blue-500",
  },
};

export function AchievementsAwesome({
  title = "Your Achievements",
  subtitle = "Clean, elevated cards with a single accent color",
  items,
  brand = "blue",
  className,
}: {
  title?: string;
  subtitle?: string;
  items: Achievement[];
  brand?: Brand;
  className?: string;
}) {
  const b = brandStyles[brand];

  return (
    <section className={cn("w-full", className)}>
      <header className="mb-6 md:mb-8 text-center">
        <h2 className="text-balance text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        <p className="text-pretty text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </header>

      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-4 md:gap-6"
        role="list"
      >
        {items.map((item, index) => (
          <li key={item.id} className="h-full max-w-[400px]">
            <Card brand={brand} delay={index * 0.1}>
              {/* Floating icon */}
              <div className="relative mb-6">
                <div
                  className={cn(
                    "absolute -top-4 -right-4 h-12 w-12 rounded-xl flex items-center justify-center",
                    "bg-white border-2 border-blue-100 shadow-lg",
                    "transform rotate-3 hover:rotate-6 transition-all duration-300"
                  )}
                >
                  {item.icon ?? <Trophy className="h-6 w-6 text-blue-600" />}
                </div>
              </div>

              {/* Badge */}
              <div className="mb-6">
                <span
                  className={cn(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold",
                    "transform hover:scale-105 transition-all duration-200",
                    b.badge
                  )}
                >
                  <span
                    className={cn("h-2 w-2 rounded-full", b.dot)}
                    aria-hidden
                  />
                  {item.label}
                </span>
              </div>

              {/* Value */}
              <div className="mb-4">
                <div className="text-xl md:text-5xl font-bold tracking-tight text-gray-900 tabular-nums mb-2">
                  {item.value}
                </div>
                {item.helper && (
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {item.helper}
                  </p>
                )}
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Card({
  children,
  brand,
  delay = 0,
}: {
  children: React.ReactNode;
  brand: Brand;
  delay?: number;
}) {
  const b = brandStyles[brand];

  return (
    <div
      className={cn(
        "group relative flex h-full min-h-60 flex-col overflow-hidden w-full",
        "rounded-3xl bg-white text-gray-900 p-6 md:p-8",
        "border-2 border-gray-100 hover:border-blue-200 active:border-blue-300",
        // Always-on shadows with enhanced states
        "shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]",
        "hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_40px_rgba(59,130,246,0.1)]",
        "active:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.35),0_0_50px_rgba(59,130,246,0.2)]",
        // Transform states
        "transform hover:-translate-y-2 hover:scale-[1.02]",
        "active:-translate-y-1 active:scale-[1.01]",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-4",
        b.ring
      )}
      style={{
        animationDelay: `${delay}s`,
        animation: "fadeInUp 0.6s ease-out forwards",
      }}
      tabIndex={0}
      aria-label="Achievement card"
    >
      {/* Animated accent line */}
      <div
        className={cn(
          "absolute top-0 left-0 h-1 rounded-full transition-all duration-300 ease-out",
          "group-hover:h-2 group-active:h-3 w-12 group-hover:w-full group-active:w-full",
          b.accent
        )}
        aria-hidden
      />

      {/* Subtle inner border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/60"
        aria-hidden
      />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden
      />

      <div className="relative flex h-full flex-col z-10">{children}</div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// Demo component
export function DemoAchievements() {
  const items: Achievement[] = [
    {
      id: "downloads",
      label: "Downloads",
      value: "10,000+",
      icon: <Trophy className="h-6 w-6 text-blue-600" aria-hidden />,
      helper: "Total app installs",
    },
    {
      id: "orders",
      label: "Orders",
      value: "500+",
      icon: <Award className="h-6 w-6 text-blue-600" aria-hidden />,
      helper: "Delivered successfully",
    },
    {
      id: "rating",
      label: "Rating",
      value: "4.6★",
      icon: <Star className="h-6 w-6 text-blue-600" aria-hidden />,
      helper: "Average app rating",
    },
    {
      id: "customers",
      label: "Customers",
      value: "2,500+",
      icon: <Crown className="h-6 w-6 text-blue-600" aria-hidden />,
      helper: "Happy users worldwide",
    },
  ];

  return (
    <div className="py-16 pb-20 px-16">
      <AchievementsAwesome
        items={items}
        brand="blue"
        title="🚀 Trusted by Thousands"
        subtitle="Beautiful achievement cards with smooth animations and modern design"
      />
    </div>
  );
}

export default DemoAchievements;
