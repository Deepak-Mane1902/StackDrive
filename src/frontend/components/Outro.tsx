"use client";

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const Outro = () => {
  return (
    <main className="w-full bg-[#d45710] flex justify-center items-center px-4 pt-10">
      <section className="w-full max-w-6xl flex flex-col items-center text-center">
        <h1 className="text-white font-bold leading-tight text-[clamp(1.8rem,5vw,3rem)] mb-6">
          Get organized and stay <br className="hidden sm:block" /> productive with StackDrive
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button className="cursor-pointer bg-[#ff6913] text-black border-2 border-black hover:bg-black hover:text-[#ff6913] hover:border-[#d45710] transition-all duration-300 ease-in-out">
            Get in Touch
          </Button>
          <Button className="cursor-pointer bg-black text-white border hover:bg-[#101010] hover:border-[#ff6913] hover:text-[#ff6913] transition-all duration-300 ease-in-out">
            Learn More
          </Button>
        </div>

        <Image
          src="/search.png"
          alt="Productivity tools interface screenshot"
          width={800}
          height={500}
          priority
          sizes="(max-width: 768px) 90vw, 50vw"
          className="rounded-xl w-full max-w-[600px] h-auto object-contain"
        />
      </section>
    </main>
  );
};

export default Outro;
