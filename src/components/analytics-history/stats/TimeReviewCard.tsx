'use client';

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timeData = [
    { name: "AI Processing", value: 2 },
    { name: "Manual Review", value: 15 },
];

export default function TimeReviewCard() {
    return (
        <Card className="cursor-pointer hover:scale-[1.02] transition-transform duration-500
            bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-300 dark:border-gray-600">
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                Time to Review
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400">
                450x faster with AI
            </p>
            </CardHeader>

            <CardContent className="flex flex-col items-center">
            <PieChart width={220} height={220}>
                <Pie
                data={timeData}
                startAngle={180}
                endAngle={0}
                innerRadius={55}
                outerRadius={85}
                dataKey="value"
                >
                <Cell fill="#2563eb" />
                <Cell fill="#bfdbfe" />
                </Pie>
            </PieChart>

            <div className="w-full text-sm space-y-2">
                <div className="flex justify-between text-gray-800 dark:text-gray-200">
                <div>
                    <span className="inline-block w-3 h-3 rounded-full me-1 bg-[#2563eb]" />
                    <span className="font-bold">{timeData[1].name}</span>
                </div>
                <span className="font-bold text-gray-400 dark:text-gray-300">
                    {timeData[1].value} m
                </span>
                </div>

                <div className="flex justify-between text-gray-800 dark:text-gray-200">
                <div>
                    <span className="inline-block w-3 h-3 rounded-full me-1 bg-[#bfdbfe]" />
                    <span className="font-bold">{timeData[0].name}</span>
                </div>
                <span className="font-bold text-gray-400 dark:text-gray-300">
                    {timeData[0].value} s
                </span>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}
