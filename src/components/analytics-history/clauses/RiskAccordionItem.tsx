'use client';

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

interface RiskAccordionItemProps {
    value: string;
    title?: string;
    subtitle?: string;
    badgeText: string;
    badgeClassName: string;
    children?: React.ReactNode;
}

export default function RiskAccordionItem({
    value,
    title = "Unlimited Liability Exposure",
    subtitle = "Page 12 · 8.2 – Indemnification",
    badgeText,
    badgeClassName,
    children
}: RiskAccordionItemProps) {
    return (
        <AccordionItem value={value} className="border rounded-xl px-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <AccordionTrigger className="hover:no-underline cursor-pointer">
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md shrink-0">
                    <FileText size={16} className="text-gray-500 dark:text-gray-300" />
                </div>
                <div>
                    <p className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100">
                    {title}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                    {subtitle}
                    </p>
                </div>
                </div>
                <Badge className={`${badgeClassName} w-fit`}>
                    {badgeText}
                </Badge>
            </div>
            </AccordionTrigger>
            {children && (
                <AccordionContent className="pt-3 space-y-2">
                    {children}
                </AccordionContent>
            )}
        </AccordionItem>
    )
}
