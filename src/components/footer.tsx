'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#0f172b]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-14">
            
            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-6 w-full">

                {/* Logo & Description */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-2/5">
                    <div className="relative w-[180px] h-[62px] mb-4">
                        <Image
                            src="/assets/images/logo.png"
                            alt="LVXIN Logo"
                            fill
                            loading="lazy"
                            className="object-contain"
                            sizes="(max-width: 640px) 140px, (max-width: 1024px) 160px, 180px"
                        />
                    </div>
                    <p className="text-base leading-[26px] text-[#90a1b8]">
                    Empowering legal teams with next-<br />
                    generation AI tools. Secure, accurate,<br />
                    and efficient.
                    </p>
                </div>

                {/* Links Sections */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 px-5 w-full lg:w-3/5 text-center sm:text-left m-auto">
                    
                    {/* Company */}
                    <div>
                        <h3 className="text-xl font-medium text-[#e9dddd] mb-4">Company</h3>
                        <ul className="space-y-3 text-[#cad5e2]">
                            <Link href="/about-us">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">About Us</li>
                            </Link>
                            <Link href="/contact-us">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Contact</li>
                            </Link>
                            <Link href="/blog">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Blog</li>
                            </Link>
                            <Link href="/lawyer-request">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Lawyer Request</li>
                            </Link>
                            <Link href="/partnership-request">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Partnership Request</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-xl font-medium text-[#e9dddd] mb-4">Legal</h3>
                        <ul className="space-y-3 text-[#cad5e2]">
                            <Link href="/privacy-policy">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Privacy Policy</li>
                            </Link>
                            <Link href="/terms-of-service">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Terms of Service</li>
                            </Link>
                            <Link href="/security">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Security</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-medium text-[#e9dddd] mb-4">Resources</h3>
                        <ul className="space-y-3 text-[#cad5e2]">
                            <Link href="/pricing">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Pricing</li>
                            </Link>
                            <Link href="/success-stories">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">Success Stories</li>
                            </Link>
                            <Link href="/faq">
                                <li className="cursor-pointer mb-3 transform transition duration-300 hover:text-blue-500 hover:scale-105">FAQ</li>
                            </Link>
                        </ul>
                    </div>


                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-14 pt-6 border-t border-[#1c283c] flex flex-col lg:flex-row gap-4 justify-between items-center text-center lg:text-left">
            
            <p className="text-sm text-[#61738d]">
                © 2024 LVX Law. All rights reserved.
            </p>

            <div className="text-sm text-[#697282]">
                © 2025 iContract AI · ICP License: 沪ICP备2025012345号-1 · 沪公网安备 31011502025678号
            </div>

            </div>
        </div>
        </footer>
    );
};

export default Footer;
