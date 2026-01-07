'use client';

import { AlertCircle } from "lucide-react"

export default function ClausesFilter() {
    return (
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground dark:text-gray-300">
            <div className="flex flex-col gap-1">
                <span className="flex items-center font-bold text-lg sm:text-xl text-foreground dark:text-gray-100">
                <AlertCircle size={16} className="me-2 text-blue-600" />
                Analyzed Clauses
                </span>
                <span className="max-w-xl dark:text-gray-300">
                All clauses identified in your document. Each item includes its
                risk level, location, and analysis notes.
                </span>
            </div>

            <select className="w-full md:w-[180px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-[#2a2e42] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Status</option>
                <option value="high">High Risk</option>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="medium">Medium</option>
            </select>
        </div>
    )
}
