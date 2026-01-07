import React from "react";
import Image from "next/image";

interface TeamMemberCardProps {
    name: string;
    role: string;
    image: string;
    size?: "large" | "small";
}

const TeamMemberCard = ({ name, role, image, size = "small" }: TeamMemberCardProps) => (
    <div className={`bg-white dark:bg-neutral-800 cursor-pointer transition-transform hover:scale-105 duration-700 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 flex flex-col items-center justify-center p-6 ${size === "large" ? "w-64 h-80" : "w-60 h-32 flex-row gap-4 text-left"}`}>
        <div className={`relative overflow-hidden rounded-full mb-4 ${size === "large" ? "w-24 h-24" : "w-16 h-16 mb-0 flex-shrink-0"}`}>
        <Image src={image} alt={name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className={size === "small" ? "flex flex-col" : "text-center"}>
        <h3 className={`font-bold text-neutral-900 dark:text-neutral-100 ${size === "large" ? "text-lg" : "text-sm"}`}>{name}</h3>
        <p className="text-neutral-500 dark:text-neutral-400 text-xs">{role}</p>
        </div>
    </div>
);

export default TeamMemberCard;
