'use client';

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CardHeader, CardTitle } from "@/components/ui/card"

export default function ClausesHeader() {
    return (
        <CardHeader className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <CardTitle className="text-base lg:text-lg font-bold text-gray-900 dark:text-gray-100">
            Document Clauses Summary
            </CardTitle>

            <Button
            size="sm"
            className="w-full sm:w-auto gap-2 bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-700 text-white"
            >
            <Download size={16} />
            <span className="md:hidden lg:inline-block">
                Download Full Report
            </span>
            </Button>
        </CardHeader>
    )
}
