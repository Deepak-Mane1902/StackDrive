"use client";

import PricingSection from '@/frontend/components/Cards';
import Footer from '@/frontend/components/Footer';
import Header from '@/frontend/components/Header';
import dynamic from "next/dynamic";
import React from 'react';

// Dynamically import ScrollProvider to avoid document errors on SSR
const ScrollProvider = dynamic(() => import('@/frontend/components/scrollProvider'), {
  ssr: false,
});

const PricingPage = () => {
  return (
    <ScrollProvider>
      <main>
        <Header />
        <section className='bg-[#d45710] w-full h-screen mb-20'>
          <PricingSection />
          <br />
          <br />
        </section>
        <Footer />
      </main>
    </ScrollProvider>
  );
};

export default PricingPage;
