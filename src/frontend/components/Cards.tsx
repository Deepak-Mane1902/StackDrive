"use client";
import React, { useState } from "react";
 // Optional: Replace or remove
const plans = {
  monthly: [
    {
      title: "Standard",
      price: "$15",
      subtitle: "Best choice for personal",
      features: [
        "One account user",
        "100 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
    {
      title: "Advanced",
      price: "$24",
      subtitle: "Best choice for teams",
      highlighted: true,
      features: [
        "3 account user",
        "500 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
    {
      title: "Enterprise",
      price: "$150",
      subtitle: "Best choice for company",
      features: [
        "100 account user",
        "5,000 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
  ],
  annual: [
    {
      title: "Standard",
      price: "$150",
      subtitle: "Best choice for personal",
      features: [
        "One account user",
        "100 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
    {
      title: "Advanced",
      price: "$240",
      subtitle: "Best choice for teams",
      highlighted: true,
      features: [
        "3 account user",
        "500 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
    {
      title: "Enterprise",
      price: "$1500",
      subtitle: "Best choice for company",
      features: [
        "100 account user",
        "5,000 GB of secure storage",
        "Easy-to-use content protection and sharing controls",
      ],
    },
  ],
};

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="bg-[#101010] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center bg-[#1a1a1a] py-10 rounded-2xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          We offer a range of options to choose from for you
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Simple, transparent pricing that grows with you. Try any plan free for 30 days.
        </p>

        {/* Toggle */}
        <div className="inline-flex rounded-full border border-gray-500 p-1 mb-12 ">
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-orange-500 text-black"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly Billing
          </button>
          <button
            className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
              billingCycle === "annual"
                ? "bg-orange-500 text-black"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setBillingCycle("annual")}
          >
            Annual Billing
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-30">
          {plans[billingCycle].map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between bg-[#1a1a1a] rounded-xl border border-gray-700 p-6 transition transform hover:scale-[1.02]  ${
                plan.highlighted
                  ? "border-orange-500 ring-2 ring-orange-500"
                  : "hover:border-orange-400"
              }`}
            >
              <div>
                <p className="text-sm text-gray-400 mb-2">{plan.subtitle}</p>
                <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                <p className="text-2xl font-extrabold mb-4">{plan.price}</p>
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="text-gray-300">• {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className={`mt-6 px-4 py-2 rounded-lg font-semibold text-sm transition cursor-pointer ${
                  plan.highlighted
                    ? "bg-black text-white border border-white hover:border-[#101010] hover:bg-[#ff6913] hover:text-black"
                    : "bg-white text-black hover:bg-[#d45710]"
                }`}
              >
                Purchase Now →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
