"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Utility for dynamic class
  const linkClass = (href: string) =>
    `cursor-pointer transition-colors duration-200 ${
      pathname === href ? "text-[#ff6913]" : "text-[#c2c2c2] hover:text-[#ff6913]"
    }`;

  return (
    <header
      className={`w-full bg-[#101010] text-white px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between shadow-md z-50 fixed top-0 transition-transform duration-300 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="StackDrive Logo"
          width={40}
          height={40}
          priority
          className="w-[8vw] sm:w-[40px] h-auto"
        />
        <h1 className="text-[5vw] cursor-pointer sm:text-xl font-bold hover:text-[#ff6913] transition-colors duration-300">
          StackDrive
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center gap-8"
        role="navigation"
        aria-label="Main Navigation"
      >
        <ul className="flex items-center gap-6 text-base font-semibold">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </Link>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact Us
          </Link>
        </ul>
        <Button className="bg-[#ff6913] text-white hover:text-[#ff6913] transition-all duration-200 ease-in-out hover:bg-transparent border border-transparent hover:border-[#ff6913] text-base cursor-pointer">
          <a href="sign-in">Register</a>
        </Button>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white z-50 relative focus:outline-none"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm bg-[#101010] z-40 shadow-xl transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col p-6 pt-20 gap-6 text-[#c2c2c2] bg-[#101010] rounded-lg">
          <ul className="flex flex-col gap-4 text-base font-semibold">
            <Link href="/" onClick={closeMenu} className={linkClass("/")}>
              Home
            </Link>
            <Link href="/pricing" onClick={closeMenu} className={linkClass("/pricing")}>
              Pricing
            </Link>
            <Link href="/about" onClick={closeMenu} className={linkClass("/about")}>
              About
            </Link>
            <Link href="/contact" onClick={closeMenu} className={linkClass("/contact")}>
              Contact Us
            </Link>
          </ul>
          <Button
            onClick={closeMenu}
            className="w-full bg-[#ff6913] text-white hover:text-[#ff6913] transition-all duration-200 ease-in-out hover:bg-transparent border border-transparent hover:border-[#ff6913] text-base cursor-pointer"
          >
            <a href="sign-in">Register</a>
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30 lg:hidden transition-opacity duration-300"
        />
      )}
    </header>
  );
};

export default Header;
