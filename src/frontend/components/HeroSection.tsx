"use client";

import { Button } from "@/components/ui/button";
import WaveDivider from "@/components/ui/custom/wave-divider";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main>
      <section className="bg-[#101010] text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-20 transition-all duration-300">
        <WaveDivider />
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-2xl ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 px-2 md:px-10 leading-tight text-balance ">
            Experience the cloud storage with{" "}
            <span className="text-[#ff6913]">StackDrive</span>
          </h1>
          <p className="text-sm md:text-lg text-[#c2c2c2] mb-6 px-2 md:px-10">
            Collaboration is made easy with our cloud storage platform. Share files with friends, family, or colleagues, and work on them together in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 px-2 md:px-10">
            <Button className="cursor-pointer bg-[#d45710] hover:bg-transparent hover:text-[#ff6913] border border-[#ff6913] transition-all duration-200">
              <a href="sign-up">Get Started</a>
            </Button>
            <Button className="cursor-pointer bg-transparent border border-white hover:text-[#d45710] hover:bg-transparent hover:border-[#ff6913] transition-all duration-200">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <Image
            src="/hero.png"
            alt="Cloud Storage Illustration"
            width={500}
            height={500}
            className="cursor-pointer object-contain w-[80%] md:w-[90%] transition-transform duration-300 hover:scale-105"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
