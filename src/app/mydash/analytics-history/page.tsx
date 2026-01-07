'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Clock, FileEdit, LineChart} from "lucide-react";
import HistoryTable from "@/components/analytics-history/HistoryTable";

export default function AnalysisHistoryTableDesign() {

    return (
        <div className="text-gray-900 dark:text-gray-100">
            <div className="bg-white dark:bg-[#0d0f15] p-4 rounded-lg md:shadow md:border border-gray-200 dark:border-gray-700">
                {/* Stats Cards */}
                <div className="flex flex-wrap gap-2 mt-6 mb-10">
                    <Card className="rounded-2xl flex-grow-1 min-w-72 bg-[#edeefc] dark:bg-[#1f2333] border border-transparent dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/30 cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-center space-x-2">
                                <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-green-300/45 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                    <FileEdit size={16} />
                                </div>
                                <p className="text-green-600 dark:text-green-400">+12.5%</p>
                            </div>
                            <CardTitle className="dark:text-gray-200">
                                Total Analyses Completed
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            24.500
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl flex-grow-1 min-w-72 bg-[#e6f1fd] dark:bg-[#1f2333] border border-transparent dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/30 cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-center space-x-2">
                                <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-blue-300/45 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                    <LineChart size={16} />
                                </div>
                                <p className="text-orange-500 dark:text-orange-400">!52%</p>
                            </div>
                            <CardTitle className="dark:text-gray-200">
                                Average Risk Level
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            Medium
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl flex-grow-1 min-w-72 bg-[#edeefc] dark:bg-[#1f2333] border border-transparent dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/30 cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-center space-x-2">
                                <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-green-300/45 text-green-600 dark:bg-green-500/20 dark:text-green-400">
                                    <Clock size={16} />
                                </div>
                            </div>
                            <CardTitle className="dark:text-gray-200">
                                Average Processing Time
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            24.500
                        </CardContent>
                    </Card>

                    <Card className="rounded-2xl flex-grow-1 min-w-72 bg-[#e6f1fd] dark:bg-[#1f2333] border border-transparent dark:border-gray-700 hover:scale-[1.02] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/30 cursor-pointer">
                        <CardHeader>
                            <div className="flex justify-between items-center space-x-2">
                                <div className="flex justify-center items-center w-12 h-12 mb-2 rounded-[16px] bg-blue-300/45 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
                                    <FileEdit size={16} />
                                </div>
                                <p className="text-blue-600 dark:text-blue-400">+12.3%</p>
                            </div>
                            <CardTitle className="dark:text-gray-200">
                                Total Words Processed
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            518.3K
                        </CardContent>
                    </Card>
                </div>

                {/* Table Wrapper section*/}
                <HistoryTable />
            </div>
        </div>
    );
}
