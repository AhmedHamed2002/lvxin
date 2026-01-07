"use client"

import React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Gift, ShieldCheck, Star, User } from "lucide-react"
import PersonalInfoTab from "@/components/profile/PersonalInfoTab"
import ReferralProgramTab from "@/components/profile/ReferralProgramTab"
import RewardsTab from "@/components/profile/RewardsTab"
import SecuritySettingsTab from "@/components/profile/SecuritySettingsTab"

export default function ProfilePage() {
    return (
        <div className="p-4 md:p-6 animate-in fade-in duration-500 text-gray-900 dark:text-gray-100">
        <div className="bg-white dark:bg-[#0d0f15] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="p-6 md:p-8">
                <h1 className="text-xl lg:text-3xl ms-3 sm:ms-6 font-bold text-[#1a1f36] dark:text-[#ffffffc2] mb-10">
                    Profile Details
                </h1>

                <Tabs defaultValue="personal" className="w-full max-w-8xl mx-auto">
                    <div className="border-b border-gray-300 mb-10 sm:pb-10 lg:pb-5">
                        <TabsList className="grid grid-cols-4 bg-transparent gap-2 p-1 w-full md:max-w-3xl">
                            {/* Personal Information*/}
                            <TabsTrigger value="personal" className="flex items-center  border-t-0 border-x-0  flex-col lg:flex-row  cursor-pointer rounded-none justify-center gap-2 py-2 text-sm data-[state=active]:border-b-[3px] data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none dark:data-[state=active]:border-b-[3px] dark:data-[state=active]:border-b-blue-600 dark:data-[state=active]:text-blue-600 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent">
                                <User size={16} />
                                <span className="hidden sm:inline  lg:inline text-[10px] lg:text-[14px]">Personal Information</span>
                            </TabsTrigger>

                            {/* Referral Program */}
                            <TabsTrigger value="referral" className="flex items-center border-t-0 border-x-0  flex-col lg:flex-row cursor-pointer ms-8 lg:ms-0 rounded-none justify-center gap-2 py-2 text-sm data-[state=active]:border-b-[3px] data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none dark:data-[state=active]:border-b-[3px] dark:data-[state=active]:border-b-blue-600 dark:data-[state=active]:text-blue-600 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent">
                                <Gift size={16} />
                                <span className="hidden sm:inline  lg:inline text-[10px] lg:text-[14px]">Referral Program</span>
                            </TabsTrigger>

                            {/* Rewards */}
                            <TabsTrigger value="rewards" className="flex items-center border-t-0 border-x-0  flex-col lg:flex-row cursor-pointer rounded-none justify-center gap-2 py-2 text-sm data-[state=active]:border-b-[3px] data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none dark:data-[state=active]:border-b-[3px] dark:data-[state=active]:border-b-blue-600 dark:data-[state=active]:text-blue-600 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent">
                                <Star size={16} />
                                <span className="hidden sm:inline  lg:inline text-[10px] lg:text-[14px]">Rewards  </span>
                            </TabsTrigger>

                            {/* Security Settings */}
                            <TabsTrigger value="security" className="flex items-center border-t-0 border-x-0 flex-col lg:flex-row cursor-pointer rounded-none justify-center gap-y-2 gap-x-1  py-2 text-sm data-[state=active]:border-b-[3px] data-[state=active]:border-b-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none dark:data-[state=active]:border-b-[3px] dark:data-[state=active]:border-b-blue-600 dark:data-[state=active]:text-blue-600 dark:data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent">
                                <ShieldCheck size={16} />
                                <span className="hidden sm:inline  lg:inline text-[10px] lg:text-[14px]">Security Settings</span>
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    <TabsContent value="personal" className="mt-0 outline-none">
                        <PersonalInfoTab />
                    </TabsContent>

                    <TabsContent value="referral" className="mt-0 outline-none">
                        <ReferralProgramTab />
                    </TabsContent>

                    <TabsContent value="rewards" className="mt-0 outline-none">
                        <RewardsTab />
                    </TabsContent>

                    <TabsContent value="security" className="mt-0 outline-none">
                        <SecuritySettingsTab />
                    </TabsContent>
            </Tabs>
            </div>
        </div>
        </div>
    )
}
