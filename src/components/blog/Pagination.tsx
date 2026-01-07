"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
    return (
        <div className="flex items-center justify-center gap-2 mt-20">
        <Button variant="outline" size="icon" className="h-10 w-10 cursor-pointer rounded-lg border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {[1, 2, 3, "...", 8].map((page, index) => (
            <Button
            key={index}
            variant={page === 1 ? "default" : "outline"}
            size="icon"
            className={`h-10 w-10 cursor-pointer rounded-lg font-bold border-neutral-200 dark:border-neutral-800 transition-all
                ${page === 1 
                ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600" 
                : "hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                }
            `}
            >
            {page}
            </Button>
        ))}

        <Button variant="outline" size="icon" className="h-10 w-10 cursor-pointer rounded-lg border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
            <ChevronRight className="h-4 w-4" />
        </Button>
        </div>
    );
}
