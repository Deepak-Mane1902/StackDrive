"use client";
import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";

const Views = () => {
  return (
    <main className="bg-[#101010] min-h-fit flex justify-center items-center px-4 py-10">
      <section className="w-full max-w-screen-lg h- bg-[#d45710] rounded-2xl p-8 md:p-12 shadow-2xl shadow-amber-700">
        <h1 className="text-white font-semibold text-[clamp(1.5rem,5vw,2.75rem)] leading-tight mb-8">
          Trust StackDrive, trusted by over{" "}
          <span className="text-yellow-200">700 million users</span> around the world
        </h1>

        <ul className="flex flex-wrap justify-between gap-8">
          <li className="flex-1 min-w-[120px]">
            <HiUsers className="text-white text-4xl mb-2" />
            <h4 className="text-white text-xl md:text-2xl font-semibold">700+</h4>
            <p className="text-[#c2c2c2] text-sm">Active Users</p>
          </li>

          <li className="flex-1 min-w-[120px]">
            <LuDownload className="text-white text-4xl mb-2" />
            <h4 className="text-white text-xl md:text-2xl font-semibold">199K+</h4>
            <p className="text-[#c2c2c2] text-sm">Uploaded Files</p>
          </li>

          <li className="flex-1 min-w-[120px]">
            <IoStarHalf className="text-white text-4xl mb-2" />
            <h4 className="text-white text-xl md:text-2xl font-semibold">4.5</h4>
            <p className="text-[#c2c2c2] text-sm">Rated on Trustpilot</p>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Views;
