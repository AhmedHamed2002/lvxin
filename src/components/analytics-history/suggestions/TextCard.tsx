'use client';

import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pencil } from "lucide-react"

interface TextCardProps {
    title: string;
    variant: "original" | "ai";
}

export default function TextCard({ title, variant }: TextCardProps) {
    return (
        <Card className="relative p-4 bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm dark:shadow-black/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
            <h3
            className={`font-semibold ${
                variant === "ai" ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-gray-100"
            }`}
            >
            {title}
            </h3>
            <Pencil className="w-4 h-4 text-gray-400 dark:text-gray-300 cursor-pointer" />
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="h-64 p-4 bg-gray-50 dark:bg-[#11131b] rounded-md [&_[data-radix-scroll-area-thumb]]:bg-blue-500 dark:[&_data-radix-scroll-area-thumb]:bg-blue-400 [&_[data-radix-scroll-area-track]]:bg-gray-200 dark:[&_data-radix-scroll-area-track]:bg-gray-700">
            <div className="text-sm space-y-3 leading-relaxed text-gray-800 dark:text-gray-200">
            <p>
                [2.2] Tenant shall be responsible for exterior maintenance as reasonably required.
            </p>

            <p
                className={
                variant === "original" ? "text-red-500 dark:text-red-400" : "text-green-600 dark:text-green-400"
                }
            >
                [2.2] Tenant shall be responsible for exterior maintenance as reasonably required.
            </p>

            <p>
                [2.2] Tenant shall be responsible for exterior maintenance as reasonably required.
            </p>

            <p>
                [2.2] Tenant shall be responsible for exterior maintenance as reasonably required.
            </p>

            <p>
                [2.2] Tenant shall be responsible for exterior maintenance as reasonably required.
            </p>
            </div>
        </ScrollArea>
        </Card>
    );
}
