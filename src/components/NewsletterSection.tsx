"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full bg-linear-to-r from-[#4461f2] to-[#3652e1] rounded-3xl overflow-hidden px-8 py-12 md:py-20 md:px-16 flex flex-col md:flex-row items-center gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Subscribe for the latest AI contract <br className="hidden lg:block" />
              insights and updates.
            </h2>
            
            <div className="mt-8 flex flex-col flex-wrap lg:flex-row gap-4 max-w-lg">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full bg-white/20 border border-white/30 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <Button className="bg-white text-blue-600 cursor-pointer hover:bg-white/90 rounded-full px-8 py-6 font-semibold shadow-lg transition-transform active:scale-95">
                Subscribe
              </Button>
            </div>
            
            <p className="mt-6 text-white/70 text-sm">
              Stay ahead with the latest AI contract updates.
            </p>
          </div>

          {/* Illustration - Using a representative image if available or placeholder */}
          <div className="flex-1 flex justify-center md:justify-end items-center relative h-[250px] w-full max-w-[400px]">
            <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-105">
                 {/* Using public/assets/images/big-logo.png or logo.png as a placeholder for the illustration if specific one not found */}
                <Image
                    src="/assets/images/send.png" 
                    alt="Newsletter Illustration"
                    fill
                    className="object-contain drop-shadow-2xl opacity-90"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
            </div>
          </div>

          {/* Background Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
