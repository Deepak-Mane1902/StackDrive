"use client";
import Image from "next/image";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-[#101010] text-white py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6">
        {/* Logo & Address */}
        <div className="flex flex-col items-start gap-4 max-w-xs">
          <div className="flex items-center gap-2 text-[#ff6913] font-semibold text-xl cursor-pointer hover:text-[#803409]">
            <Image
              src="/logo.png"
              alt="StackDrive Logo"
              width={40}
              height={40}
              priority
              className="w-10 h-auto"
            />
            <span>StackDrive</span>
          </div>
          <address className="text-[#c2c2c2] not-italic text-sm">
            St Deepak_Mane, Ambernath,<br />
            Mumbai - 400010
          </address>
        </div>

        {/* Link Columns */}
        <div className="flex flex-wrap gap-10">
          {/* Products */}
          <div className="text-[#c2c2c2]">
            <h3 className="text-white font-semibold text-lg mb-2">Products</h3>
            <ul className="space-y-1 text-sm">
              {["Cloud Storage", "Object Storage", "Sync", "Backup", "Share", "Pricing"].map((item) => (
                <li key={item} className="hover:text-[#ff6913] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="text-[#c2c2c2]">
            <h3 className="text-white font-semibold text-lg mb-2">Resources</h3>
            <ul className="space-y-1 text-sm">
              {["Mobile apps", "Desktop apps", "Cmd", "Cmd for NAS"].map((item) => (
                <li key={item} className="hover:text-[#ff6913] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-[#c2c2c2]">
            <h3 className="text-white font-semibold text-lg mb-2">Company</h3>
            <ul className="space-y-1 text-sm">
              {["About", "Careers", "Media", "Achievements"].map((item) => (
                <li key={item} className="hover:text-[#ff6913] cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[#ff6913] font-semibold text-lg">
            Keep in touch with us.
          </h3>
          <form className="flex w-full sm:w-80 border border-[#ff6913] hover:bg-[#ff6913] transition-all duration-300">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-grow px-3 py-2 bg-[#101010] text-white text-sm focus:outline-none placeholder:text-[#c2c2c2]"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className=" flex items-center justify-center bg-[#803409] hover:bg-[#ff6913] cursor-pointer hover:text-[#101010] transition-all ease-in-out duration-150 w-12"
              aria-label="Subscribe"
            >
              <MdArrowForward size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="border-t border-[#803410] mt-10" />
      <p className="text-center text-sm mt-4">
        Created by <span className="text-[#ff6913]">Deepak_Mane</span>
      </p>
    </footer>
  );
};

export default Footer;
