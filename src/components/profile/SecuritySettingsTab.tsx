"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function SecuritySettingsTab() {
    return (
        <div className="max-w-4xl">
        <h2 className="text-xl font-bold text-gray-900 dark:text-[#ffffffc2] mb-8">
            Security Settings
        </h2>

        <form className="space-y-6">
            {/* Current Password */}
            <div className="space-y-2 text-left">
            <Label htmlFor="current-password" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Current Password
            </Label>
            <Input 
                id="current-password"
                type="password"
                placeholder="******************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* New Password */}
            <div className="space-y-2 text-left">
            <Label htmlFor="new-password" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                New Password
            </Label>
            <Input 
                id="new-password"
                type="password"
                placeholder="******************************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2 text-left">
            <Label htmlFor="confirm-new-password" className="text-sm font-bold text-gray-700 dark:text-gray-400">
                Confirm New Password
            </Label>
            <Input 
                id="confirm-new-password"
                type="password"
                placeholder="***************" 
                className="h-12 bg-white dark:bg-[#11141d] border-gray-200 dark:border-gray-800 rounded-xl focus-visible:ring-blue-500/20 focus-visible:border-blue-500 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600"
            />
            </div>

            <div className="pt-4 flex justify-center md:justify-end">
            <div className="flex flex-wrap gap-2 items-center justify-center">
                <Button className="bg-[#ef5350] hover:bg-[#d3312e] cursor-pointer md:me-2 text-white px-10 py-6 rounded-xl font-bold transition-all w-full md:w-auto">
                Delete your account
                </Button>
                <Button className="bg-[#1d6aff] hover:bg-[#1656cc] cursor-pointer text-white px-10 py-6 rounded-xl font-bold transition-all w-full md:w-auto dark:bg-blue-600 dark:hover:bg-blue-500">
                Update Password
                </Button>
            </div>
            </div>
        </form>
        </div>
    )
}
