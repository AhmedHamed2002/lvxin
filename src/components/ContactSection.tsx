"use client";

import React from "react";
import { Mail, Linkedin, Instagram } from "lucide-react";

// X (formerly Twitter) icon is not in standard Lucide but can be added via SVG or custom
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 fill-current"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ContactSection = () => {
  return (
    <div className="w-full  py-24 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0e2259] dark:text-[#b4bed7] mb-6">
          Contact us
        </h2>
        <p className="text-gray-500 text-sm md:text-base mb-12">
          We are always happy to assist and answer your questions.
        </p>

        {/* Email Card */}
        <div className="inline-flex items-center justify-between gap-4 shadow bg-[#ffffff] dark:bg-[#111111]  rounded-2xl p-6 md:p-8 hover:border-blue-500/50 transition-colors group cursor-pointer mb-12">
          <span className="text-lg md:text-2xl font-semibold group-hover:text-blue-400 transition-colors">
            support@Livxin.com
          </span>
          <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <Mail size={24} />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6">
          <a
            href="#"
            className="p-4 bg-[#ffffff] dark:bg-[#111111] rounded-lg shadow text-blue-500 hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="#"
            className="p-4 bg-[#ffffff] dark:bg-[#111111] rounded-lg shadow text-gray-400 hover:bg-neutral-800 hover:text-white transition-all transform hover:scale-110"
            aria-label="X"
          >
            <XIcon />
          </a>
          <a
            href="#"
            className="p-4 bg-[#ffffff] dark:bg-[#111111] rounded-lg shadow text-pink-500 hover:bg-pink-600 hover:text-white transition-all transform hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
