'use client';

import { PieChart, Pie, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { name: "High", value: 3, color: "#ef4444" },
    { name: "Normal", value: 2, color: "#22c55e" },
    { name: "Low", value: 2, color: "#3b82f6" },
    { name: "Medium", value: 2, color: "#eab308" },
];

export default function DocumentStatsCard() {
    return (
        <Card className="cursor-pointer hover:scale-[1.02] transition-transform duration-500
            bg-white dark:bg-[#1b1e2b] border border-gray-200 dark:border-gray-700">
            <CardHeader className="border-b border-gray-300 dark:border-gray-600">
            <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                Document Stats
            </CardTitle>
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-400">
                Document analyzed
            </p>
            </CardHeader>

            <CardContent className="relative flex flex-col items-center">
            {/* Chart */}
            <PieChart width={220} height={220}>
                <Pie
                data={data}
                innerRadius={70}
                outerRadius={90}
                dataKey="value"
                >
                {data.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                ))}
                </Pie>
            </PieChart>

            {/* Center Text */}
            <div className="absolute top-[85px] flex flex-col items-center">
                <span className="text-xs text-gray-400 dark:text-gray-300">
                Overall Risk
                </span>
                <span className="text-2xl font-bold text-red-500">
                38%
                </span>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mt-3">
                {data.map((item) => (
                <p key={item.name} className="text-gray-800 dark:text-gray-200">
                    <span
                    className="inline-block w-3 h-3 rounded-full me-1"
                    style={{ backgroundColor: item.color }}
                    />
                    <span className="font-bold">
                    {item.value} {item.name}
                    </span>
                </p>
                ))}
            </div>
            </CardContent>
        </Card>
    )
}
