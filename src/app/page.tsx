"use client";

import FeaturesSection from "@/frontend/components/About";
import PricingSection from "@/frontend/components/Cards";
import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import HeroSection from "@/frontend/components/HeroSection";
import Outro from "@/frontend/components/Outro";
import TestimonialSlider from "@/frontend/components/Rating";
import Views from "@/frontend/components/Views";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ScrollProvider to disable SSR (fix document not defined error)
const ScrollProvider = dynamic(() => import("@/frontend/components/scrollProvider"), {
  ssr: false,
});

const Page = () => {
  return (
    <ScrollProvider>
      <main>
        <Header />
        <HeroSection />
        <Views />
        <FeaturesSection />
        <PricingSection />
        <TestimonialSlider />
        <Outro />
        <Footer />
      </main>
    </ScrollProvider>
  );
};

export default Page;
