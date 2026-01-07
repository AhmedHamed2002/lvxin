'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, ChevronRight } from "lucide-react"

import ClausesHeader from "./ClausesHeader"
import ClausesFilter from "./ClausesFilter"
import RiskAccordion from "./RiskAccordion"
import RiskAccordionItem from "./RiskAccordionItem"

export default function ClausesSummary() {
    return (
        <Card className="border-none shadow-none bg-white dark:bg-[#1b1e2b]">
            {/* ================= Header ================= */}
            <ClausesHeader />

            {/* ================= Content ================= */}
            <CardContent className="space-y-4">
                {/* ===== Analyzed Clauses + Filter ===== */}
                <ClausesFilter />

                <Separator className="dark:border-gray-600" />

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

                    {/* ========= Low Risk ========= */}
                    <RiskAccordionItem 
                        value="item-2" 
                        badgeText="Low " 
                        badgeClassName="bg-green-200 text-green-600 dark:bg-green-700 dark:text-green-300"
                    />

                    {/* ========= Normal ========= */}
                    <RiskAccordionItem 
                        value="item-3" 
                        badgeText="Normal" 
                        badgeClassName="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300"
                    />

                    {/* ========= Medium ========= */}
                    <RiskAccordionItem 
                        value="item-4" 
                        badgeText="Medium" 
                        badgeClassName="bg-orange-200 text-orange-500 dark:bg-orange-600 dark:text-orange-200"
                    />
                </RiskAccordion>
            </CardContent>
        </Card>
    )
}
