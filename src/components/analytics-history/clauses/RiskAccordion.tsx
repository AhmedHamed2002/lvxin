'use client';

import { Accordion } from "@/components/ui/accordion"

export default function RiskAccordion({ children }: { children: React.ReactNode }) {
    return (
        <Accordion type="multiple" className="space-y-3 pb-5">
            {children}
        </Accordion>
    )
}
