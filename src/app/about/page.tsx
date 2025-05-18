"use client";

import dynamic from "next/dynamic";
import Header from "@/frontend/components/Header";
import Footer from "@/frontend/components/Footer";
import Image from "next/image";
import React from "react";

const ScrollProvider = dynamic(() => import("@/frontend/components/scrollProvider"), { ssr: false });

// rest of your AboutPage code remains the same


const teamMembers = [
  {
    name: "Deepak Mane",
    image: "/whats01.webp", // <-- Add real image in public/team/
    whatsapp: "919960633200",
  },
  {
    name: "Om Mishra",
    image: "/dragon.webp", // <-- Add real image in public/team/
    whatsapp: "919321886497",
  },
  {
    name: "Divyesh Odale",
    image: "/ninja.webp", // <-- Add real image in public/team/
    whatsapp: "917021109610",
  },
];

const AboutPage = () => {
  return (
    <ScrollProvider>
      <main>
        <Header />

        <section
          className="bg-[#1e1e1e] text-white py-20 px-6 sm:px-12 md:px-24 min-h-screen flex flex-col justify-center"
          data-scroll
        >
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h2
              className="pt-12 text-4xl sm:text-5xl font-bold text-[#ff6913]"
              data-scroll
              data-scroll-speed="1"
            >
              About StackDrive
            </h2>

            <p
              className="text-lg sm:text-xl text-[#cfcfcf] leading-relaxed"
              data-scroll
              data-scroll-speed="2"
            >
              StackDrive is a modern, performance-focused cloud storage solution
              created to simplify the way users manage their files. Our platform
              offers fast, secure, and user-friendly tools designed for
              students, professionals, and teams.
            </p>

            <div
              className="border-t border-[#d45710] pt-10 space-y-6"
              data-scroll
              data-scroll-speed="1.5"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                Meet the Team
              </h3>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                {teamMembers.map((member) => (
                  <a
                    key={member.name}
                    href={`https://wa.me/${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#ff6913] group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="mt-3 text-lg text-[#d45710] group-hover:underline group-hover:text-[#ff6913] transition-colors duration-200">
                      {member.name}
                    </span>
                  </a>
                ))}
              </div>

              <p className="text-sm text-gray-400 pt-6 max-w-2xl mx-auto">
                This project is part of our capstone initiative to showcase
                skills in modern web development using Next.js, Tailwind CSS,
                and cloud integration technologies.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ScrollProvider>
  );
};

export default AboutPage;
