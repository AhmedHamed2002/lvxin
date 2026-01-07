"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import { Eye, Gem, Rocket } from "lucide-react";
import PageHero from "@/components/PageHero";
import TeamMemberCard from "@/components/TeamMemberCard";
import CTASection from "@/components/CTASection";
import WhyChooseLVX from "@/components/WhyChooseLVX";
import NewsletterSection from "@/components/NewsletterSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";

export default function AboutUsPage() {
    const breadcrumbs = [
        { label: "Home", href: "/home" },
        { label: "about us" },
    ];

    return (
        <div className="min-h-screen bg-[#fcfdfe] dark:bg-neutral-950 font-sans overflow-x-hidden">
        <main className="pt-16">
            <PageHero title="about us" breadcrumbs={breadcrumbs} />

            {/* Team Section */}
            <section className="py-20 px-4  mx-auto bg-gradient-to-r from-[#d0dcff] to-[#eff1f7] dark:from-[#04152c] dark:to-[#0a2368] border-t-[3px] border-dotted border-blue-200 dark:border-blue-900">
                <div className="text-center mb-16 relative">
                    <h2 className="text-3xl font-bold text-[#111827] dark:text-[#cdd9f3cc] relative z-10 inline-block">
                        "Meet our expert team driving innovation in contract analysis"
                    </h2>
                    <div className="absolute  -top-6 right-8 md:-top-6 md:right-30 opacity-40 select-none">
                        <Image src="/assets/images/star.png" alt="star icon" width={20} height={20} className="w-[20px] h-[20px] object-contain"/>
                    </div>

                    <div className="absolute top-3 right-2 md:top-3 md:right-6 opacity-40 select-none">
                        <Image src="/assets/images/star.png" alt="star icon" width={16} height={16} className="w-[16px] h-[16px] object-contain"/>
                    </div>

                    <div className="absolute top-12 right-10 md:top-12 md:right-30 opacity-40 select-none">
                        <Image src="/assets/images/star.png" alt="star icon" width={18} height={18} className="w-[18px] h-[18px] object-contain"/>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative">
                    <div className="flex flex-col items-center">
                        <TeamMemberCard 
                            name="Abdulrahman Arabi" 
                            role="Operations Manager" 
                            image="/assets/images/Mahmoud.jpg"
                            size="large"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <TeamMemberCard name="Abdulrahman Arabi" role="Operations Manager" image="/assets/images/Mahmoud.jpg" />
                        <TeamMemberCard name="Abdulrahman Arabi" role="Operations Manager" image="/assets/images/Mahmoud.jpg" />
                        <TeamMemberCard name="Abdulrahman Arabi" role="Operations Manager" image="/assets/images/Mahmoud.jpg" />
                        <TeamMemberCard name="Abdulrahman Arabi" role="Operations Manager" image="/assets/images/Mahmoud.jpg" />
                    </div>
                </div>
            </section>

            {/* About & Stats Section */}
            <section className="py-24 px-4 bg-[#f2f3f7] dark:bg-[#202123b4]">
            <div className="mx-auto container px-10 flex flex-col justify-center lg:flex-row items-center gap-16">
                {/* Left: Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-5xl font-bold text-[#162d5f] dark:text-[#f2f6fff1] mb-8">About Livxin</h2>
                    <p className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        We are a next-generation legal technology platform specializing in AI-powered contract analysis and intelligent legal assistance. Our goal is to help companies, enterprises, and legal teams in China review, understand, and manage contracts with greater accuracy and speed.
                    </p>
                </div>
                
                {/* Right: Graphic and Stats */}
                <div className="relative w-full lg:w-1/2 flex justify-center items-center h-[400px]">
                    <div className="relative w-[270px] h-[270px] md:w-[370px] md:h-[370px]">
                        <Image
                            src="/assets/images/about-lvxin.png"
                            alt="Livxin Graphic"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain opacity-80 dark:opacity-40"
                        />

                        
                        <div className="absolute cursor-pointer bg-[#f9fbff] dark:bg-neutral-800 p-4 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 transition-transform hover:scale-105 z-10 top-3 left-[-20px] md:-left-4">
                            <div className="flex flex-col items-center">
                                <span className="text-base md:text-2xl font-bold text-[#1c4484] dark:text-[#dfe6f0e1] leading-none mb-1">1.6 K</span>
                                <span className="text-[10px] font-medium text-gray-500 dark:text-[#9b9da0e1] uppercase tracking-wider">+Contracts Analyzed</span>
                            </div>
                        </div>
                        <div className="absolute cursor-pointer bg-blue-600 p-4 rounded-xl shadow-lg border  transition-transform hover:scale-105 z-10 top-20 md:top-35 right-[-20px] md:-right-15">
                            <div className="flex flex-col items-center">
                                <span className="text-base md:text-2xl font-bold text-[#f9fcffe1] leading-none mb-1">1.9 K</span>
                                <span className="text-[10px] font-medium text-[#ebf3ffe1] uppercase tracking-wider">Active Users</span>
                            </div>
                        </div>
                        <div className="absolute cursor-pointer bg-[#bbceefe4] dark:bg-neutral-800 p-4 rounded-xl shadow-lg transition-transform hover:scale-105 z-10 bottom-0 left-1/4">
                            <div className="flex flex-col items-center">
                                <span className="text-base md:text-2xl font-bold text-blue-600 dark:text-blue-400 leading-none mb-1">63</span>
                                <span className="text-[10px] font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">Tech Members</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>

            {/* Vision Section */}
            <section className="min-h-[50vh] md:min-h-[80vh] py-24 container-fluid flex justify-center items-center flex-col bg-[#f2f3f7] dark:bg-[#202123b4]  bg-cover bg-center bg-no-repeat bg-[url('/assets/images/our-vision.png')]">
                <div className="max-w-8xl mx-6 cursor-pointer px-10 bg-white dark:bg-[#1d1c1cf2] rounded-3xl p-6 md:p-12 shadow-md border border-neutral-100 dark:border-neutral-700 flex flex-col md:flex-row items-center gap-8 relative z-10 transition-all hover:shadow-xl duration-700 hover:scale-95">
                    <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-2xl flex-shrink-0">
                        <Eye className="w-8 h-8 text-[#184892] dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#111827] dark:text-white mb-3">Our Vision</h3>
                        <p className="text-xs md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                            To become the most reliable AI-driven contract analysis partner in China, frequency empowering businesses review contracts with clarity, accuracy, and confidence.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-10 mt-10 cursor-pointer  bg-white dark:bg-[#1d1c1cf2] rounded-3xl p-6 md:p-12 shadow-md border border-neutral-100 dark:border-neutral-700 flex flex-col md:flex-row items-center gap-8 relative z-10 transition-all hover:shadow-xl duration-700 hover:scale-95">
                    <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-2xl flex-shrink-0">
                        <Rocket className="w-8 h-8 text-[#184892] dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#111827] dark:text-white mb-3">Our Mission</h3>
                        <p className="text-xs md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                            To simplify legal review by transforming hours of manual work into seconds of automated, intelligent analysis.
                        </p>
                    </div>
                </div>

                <div className="max-w-2xl mx-16 mt-10 cursor-pointer  bg-white dark:bg-[#1d1c1cf2] rounded-3xl p-6 md:p-12 shadow-md border border-neutral-100 dark:border-neutral-700 flex flex-col md:flex-row items-center gap-8 relative z-10 transition-all hover:shadow-xl duration-700 hover:scale-95">
                    <div className="bg-blue-50 dark:bg-blue-900/50 p-4 rounded-2xl flex-shrink-0">
                        <Gem className="w-8 h-8 text-[#184892] dark:text-blue-400" />
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#111827] dark:text-white mb-3">Our Values</h3>
                        <p className="text-xs md:text-base  text-neutral-600 dark:text-neutral-400 leading-relaxed italic">
                            Transparency — Clear explanations for every decision made by the AI.
                        </p>
                    </div>
                </div>

            </section>

            {/* Why Legal Teams Choose LVX */}
            <section className="bg-[#f2f3f7] dark:bg-[#202123b4]">
                <WhyChooseLVX />
            </section>

            {/* Partner Section */}
            <section className="bg-[#f2f3f7] dark:bg-[#202123b4]">
                <PartnersSection />
            </section>

            {/* Contact Section */}
            <section className="bg-[#f2f3f7] dark:bg-[#202123b4]">
                <ContactSection />
            </section>

            {/* Newsletter Section */}
            <div className="bg-[#f2f3f7] dark:bg-[#1b1f2c]">
                <NewsletterSection />
            </div>

            {/* CTA Section */}
            <CTASection />
        </main>

        {/* Footer */}
        <Footer />
        </div>
    );
}
