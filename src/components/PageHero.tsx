"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Breadcrumb {
    label: string;
    href?: string;
}

interface PageHeroProps {
    title: string;
    breadcrumbs: Breadcrumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, breadcrumbs }) => {
    return (
        <section className="relative h-[55vh] md:h-[65vh] flex flex-col justify-center items-center py-24 lg:py-32 bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home.png')] dark:bg-[url('/assets/images/home-dark.png')]">
        <div className="absolute inset-0 z-0">
            <Image
            src="/assets/images/mainFrame.png"
            alt="Background Wave"
            fill
            priority
            className="object-cover opacity-60 dark:opacity-20 translate-y-[-10%]"
            />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#12203f] dark:text-[#ebedf4ea] mb-6 z-10 capitalize">
            {title}
        </h1>
        <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 z-10">
            {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
                {crumb.href ? (
                <Link
                    href={crumb.href}
                    className="hover:text-[#184892] transition-colors"
                >
                    {crumb.label}
                </Link>
                ) : (
                <span className="font-bold text-[#111827] dark:text-white underline decoration-2 decoration-[#184892] underline-offset-4">
                    {crumb.label}
                </span>
                )}
                {index < breadcrumbs.length - 1 && <span>|</span>}
            </React.Fragment>
            ))}
        </nav>
        </section>
    );
};

export default PageHero;
