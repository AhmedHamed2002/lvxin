"use client"

import React from "react"
import { Gift } from "lucide-react"

export default function RewardsTab() {
    return (
        <div className="py-6 text-center text-gray-400">
        <div className="flex flex-col items-center justify-center shadow border border-gray-200 bg-[#eceef0] dark:bg-[#11141d] p-6 rounded-xl h-[250px]">
            <Gift size={40} />
            <p className="text-gray-400 mb-6 font-bold">No rewards yet</p>
        </div>
        </div>
    )
}
