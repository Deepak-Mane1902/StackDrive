// contact/page.tsx
"use client";

import React, { useState } from "react";
import axios from "axios";
import Footer from '@/frontend/components/Footer'
import Header from '@/frontend/components/Header'
import dynamic from 'next/dynamic';

// Dynamically import ScrollProvider with no SSR
const ScrollProvider = dynamic(() => import('@/frontend/components/scrollProvider'), {
  ssr: false,
});

const ContactPage = () => {
  // your existing code ...

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("/api/contact", form);
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.log(err);
      alert("Failed to send. Try again.");
    }
    setLoading(false);
  };

  return (
<ScrollProvider>
      <main className="bg-[#ff6913] w-full min-h-screen">
    <Header />
    <div className="min-h-screen bg-[#101010] text-white p-6 sm:p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-[#ff6913]">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded border border-[#333] focus:outline-none focus:border-[#ff6913]"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded border border-[#333] focus:outline-none focus:border-[#ff6913]"
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded border border-[#333] focus:outline-none focus:border-[#ff6913]"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your message..."
            className="bg-[#1e1e1e] text-white px-4 py-3 rounded border border-[#333] focus:outline-none focus:border-[#ff6913]"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#ff6913] text-white py-3 px-6 rounded hover:bg-transparent hover:text-[#ff6913] border border-[#ff6913] transition-all"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
          {sent && <p className="text-green-500">Message sent successfully!</p>}
        </form>

        {/* Right: Map */}
        <div className="w-full h-[400px] rounded overflow-hidden shadow-lg">
          <iframe
            title="Map"
            width="100%"
            height="100%"
            className="border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160993248!2d72.74109915!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63a87247c4f%3A0x3c4880d3bd69e3cb!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1631706529822!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <hr className=" w-[0%] h-0.1"/>
    <Footer/>
    </main>
</ScrollProvider>
  );
};

export default ContactPage;
