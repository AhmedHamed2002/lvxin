'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Eye, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import RiskAccordion from "@/components/analytics-history/clauses/RiskAccordion"
import RiskAccordionItem from "@/components/analytics-history/clauses/RiskAccordionItem"

export default function RisksSummary() {
    return (
        <Card className="border-none shadow-none bg-white dark:bg-[#1b1e2b]">
        {/* ===== Detected Risks + Filter ===== */}
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-muted-foreground dark:text-gray-300">
            <CardTitle className="flex flex-col gap-1">
                <span className="flex items-center font-bold text-lg sm:text-xl text-foreground dark:text-gray-100">
                <AlertCircle size={16} className="me-2 text-blue-600" />
                    Detected Risks
                </span>
                <span className="max-w-xl dark:text-gray-300">
                    AI-identified clauses that may require review.
                </span>
            </CardTitle>

            <select className="w-full md:w-[180px] px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-[#2a2e42] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="all">All Status</option>
                <option value="high">High Risk</option>
                <option value="low">Medium Risk</option>
                <option value="normal">Low Risk</option>
                <option value="medium">Moderate Risk</option>
            </select>
        </CardHeader>

        {/* ================= Content ================= */}
        <CardContent className="space-y-4">

            {/* ================= Accordion ================= */}
            <RiskAccordion>

            {/* ========= High Risk ========= */}
            <RiskAccordionItem 
                value="item-1"
                badgeText="High Risk"
                badgeClassName="bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-300"
            >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm">
                    <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                    <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">
                        Clause 1
                    </Badge>
                    <span>This section defines key terms used throughout the agreement...</span>
                    </div>
                    <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                    <Eye size={14} /> View Clause <ChevronRight size={14} />
                    </Button>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm">
                    <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                    <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">
                        Clause 2
                    </Badge>
                    <span>This section defines key terms used throughout the agreement...</span>
                    </div>
                    <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                    <Eye size={14} /> View Clause <ChevronRight size={14} />
                    </Button>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm">
                    <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                    <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">
                        Clause 3
                    </Badge>
                    <span>This section defines key terms used throughout the agreement...</span>
                    </div>
                    <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                    <Eye size={14} /> View Clause <ChevronRight size={14} />
                    </Button>
                </div>
            </RiskAccordionItem>

            {/* ========= Medium Risk ========= */}
            <RiskAccordionItem 
                value="item-2"
                badgeText="Medium Risk"
                badgeClassName="bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-300"
            />

            {/* ========= Low Risk ========= */}
            <RiskAccordionItem 
                value="item-3"
                badgeText="Low Risk"
                badgeClassName="bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-300"
            />

            {/* ========= Moderate Risk========= */}
            <RiskAccordionItem 
                value="item-4"
                badgeText="Moderate Risk"
                badgeClassName="bg-red-200 text-red-600 dark:bg-red-700 dark:text-red-300"
            />

            </RiskAccordion>
        </CardContent>
        </Card>
    )
}
