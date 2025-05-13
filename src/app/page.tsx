"use client";

import FeaturesSection from "@/frontend/components/About";
import PricingSection from "@/frontend/components/Cards";
import Footer from "@/frontend/components/Footer";
import Header from "@/frontend/components/Header";
import HeroSection from "@/frontend/components/HeroSection";
import Outro from "@/frontend/components/Outro";
import TestimonialSlider from "@/frontend/components/Rating";
import Views from "@/frontend/components/Views";
import React from "react";// import wrapper

const Page = () => {
  return (
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

  );
};

export default Page;
