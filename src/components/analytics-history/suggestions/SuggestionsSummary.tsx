'use client';

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Upload, ChevronRight, Eye, Stars, LightbulbOff } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import TextCard from "./TextCard"

const Suggestions: boolean = true;

export default function SuggestionsSummary() {
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Title */}
            <div className="flex flex-wrap mb-6 justify-between items-center">
                <div className="mb-6">
                    <h2 className="text-xl font-bold flex items-center mb-2 gap-2">
                        <i className="fa-regular fa-pen-to-square text-blue-500"></i>
                        Suggestions
                    </h2>
                    <p className="text-sm text-muted-foreground">
                    Proposed edits and legal improvements from LVXIN AI.
                    </p>
                </div>
                <Button
                    className="
                        mt-2 cursor-pointer 
                        bg-blue-700 hover:bg-blue-800 
                        dark:bg-blue-800 dark:hover:bg-blue-700 
                        text-white"
                >
                    <Upload size={16} className="mr-2" />
                    Upload New Document
                </Button>
            </div>

            {Suggestions ? (
                <div>
                    {/* Top Tabs */}
                    <Tabs defaultValue="Full-Contract-View" className="w-full">
                    <TabsList className="mb-16 grid grid-cols-1 sm:grid-cols-2 gap-2 p-1 rounded-lg w-full bg-gray-100 dark:bg-[#1f2333]">
                        <TabsTrigger
                            value="Full-Contract-View"
                            className="
                            cursor-pointer
                            rounded-md
                            transition-all
                            text-gray-500 dark:text-gray-400
                            hover:text-gray-700 dark:hover:text-gray-200
                            data-[state=active]:bg-blue-700
                            data-[state=active]:text-white
                            w-full
                            text-center
                            sm:text-left
                            mb-4 md:mb-0
                            "
                        >
                            Full Contract View
                        </TabsTrigger>

                        <TabsTrigger
                            value="Clause-Breakdown-View"
                            className="
                            cursor-pointer
                            rounded-md
                            transition-all
                            text-gray-500 dark:text-gray-400
                            hover:text-gray-700 dark:hover:text-gray-200
                            data-[state=active]:bg-blue-700
                            data-[state=active]:text-white
                            w-full
                            text-center
                            sm:text-left
                            "
                        >
                            Clause Breakdown View
                        </TabsTrigger>
                    </TabsList>

                    {/* ================= Full Contract View ================= */}
                    <TabsContent value="Full-Contract-View">
                        <div className="space-y-6">

                        {/* Two Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextCard title="Original" variant="original"/>
                            <TextCard title="AI Enhanced" variant="ai"/>
                        </div>

                        {/* Action */}
                        <div className="flex justify-end">
                            <Button
                            variant="outline"
                            className="gap-2 cursor-pointer border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                            >
                            <Stars className="w-4 h-4" />
                            Refine with AI
                            </Button>
                        </div>
                        </div>
                    </TabsContent>

                    {/* ================= Clause Breakdown View ================= */}
                    <TabsContent value="Clause-Breakdown-View">
                        <div className="space-y-1">
                        {/* Clause 1 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 1</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        {/* Clause 2 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 2</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        {/* Clause 3 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 3</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        {/* Clause 4 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 4</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        {/* Clause 5 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 5</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        {/* Clause 6 */}
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-gray-200 dark:border-gray-600 p-3 text-sm hover:scale-[1.01] transition-transform duration-700 hover:shadow-lg hover:dark:shadow-black/40 cursor-pointer">
                            <div className="flex flex-wrap gap-2 text-gray-800 dark:text-gray-200">
                            <Badge className="bg-blue-200 text-blue-600 dark:bg-blue-700 dark:text-blue-300">Clause 6</Badge>
                            <span>This section defines key terms used throughout the agreement...</span>
                            </div>
                            <Button variant="link" size="sm" className="self-start sm:self-auto gap-1 text-blue-600 dark:text-blue-400">
                            <Eye size={14} /> View Clause <ChevronRight size={14} />
                            </Button>
                        </div>

                        </div>
                    </TabsContent>
                    </Tabs>
                </div>
            ):(
                <div className="flex flex-col  justify-center items-center bg-gray-100 dark:bg-gray-800 p-10 rounded-lg space-y-4">
                    <LightbulbOff size={50} className="text-gray-400" />
                    <p className="text-gray-500 font-bold text-lg">No Suggestions Available</p>
                    <p className="text-gray-500">No suggested modifications are available for this section.</p>
                </div>
            )}                        
        </div>
    )
}
