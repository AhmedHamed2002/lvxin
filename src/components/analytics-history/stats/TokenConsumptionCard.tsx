'use client';

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tokenData = [
    { name: "Tokens Used", value: 56 },
    { name: "Remaining This Month", value: 944 },
];

export default function TokenConsumptionCard() {
    return (
        <Card className="cursor-pointer hover:scale-[1.02] transition-transform duration-500
            bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-300 dark:border-gray-600">
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                Token Consumption
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400">
                Monthly activity
            </p>
            </CardHeader>

            <CardContent className="relative flex flex-col items-center">
            <PieChart width={220} height={200}>
                <Pie
                data={tokenData}
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                >
                <Cell fill="#2563eb" />
                <Cell fill="#94a3b8" />
                </Pie>
            </PieChart>

            <div className="absolute top-[75px] flex flex-col items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {tokenData[0].value + tokenData[1].value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                Total Monthly
                </span>
            </div>

            <div className="w-full text-sm space-y-2 mt-3">
                {tokenData.map((item, i) => (
                <div key={item.name} className="flex justify-between text-gray-800 dark:text-gray-200">
                    <div>
                    <span
                        className={`inline-block w-3 h-3 rounded-full me-1 ${
                        i === 0 ? "bg-[#2563eb]" : "bg-[#94a3b8]"
                        }`}
                    />
                    <span className="font-bold text-sm">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-400 dark:text-gray-300">
                    {item.value}
                    </span>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
    )
}
