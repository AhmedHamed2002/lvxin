"use client";

import React from "react";
import Image from "next/image";

const PartnersSection = () => {
  const partners = [
    "/assets/images/Partner1.png",
    "/assets/images/Partner2.png",
    "/assets/images/Partner3.png",
    "/assets/images/Partner4.png",
    "/assets/images/Partner5.png",
    "/assets/images/Partner6.png",
    "/assets/images/Partner7.png",
    "/assets/images/Partner8.png",
  ];

  return (
    <div className="w-full  py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2259] dark:text-[#b4bed7] mb-4">
            Our Partners
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            We serve a wide range of organizations including
          </p>
        </div>

        <div className="relative overflow-hidden mt-10 bg-white dark:bg-[#181c25]">
          {/* Scrolling Container */}
          <div className="flex w-fit items-center gap-12 sm:gap-20 animate-infinite-scroll py-4">
            {partners.concat(partners).map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  width={120}
                  height={40}
                  className="object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default PartnersSection;
