'use client';

import { useState } from 'react';
import { 
    Globe, Bell, Shield, Mail, Server, 
    Save, RotateCcw
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
    Select, SelectContent, SelectItem, 
    SelectTrigger, SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
    // State for form fields (mocking state management)
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    return (
        <div className="space-y-3  rounded-2xl shadow-md bg-white dark:bg-[#0d0f15] min-h-screen p-4 md:p-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="space-y-1 mt-3 mb-8 text-center md:text-start">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Settings</h1>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Manage your application preferences and configurations.</p>
            </div>

            {/* General Settings */}
            <Card className="border-none shadow-lg bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-1 sm:pb-4">
                    <div className="flex items-center gap-1">
                        <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">General Settings</CardTitle>
                            <CardDescription className='text-[8px] sm:text-base'>Site, language and timezone settings</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="site-name" className='text-xs sm:text-base'>Site Name</Label>
                        <Input id="site-name" defaultValue="LVXIN - Contract Analysis" className="text-xs sm:text-base bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800" />
                    </div>
                    
                    <div className="space-y-2">
                        <Label className='text-xs sm:text-base'>Default Language</Label>
                        <Select defaultValue="en">
                            <SelectTrigger className="cursor-pointer bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800">
                                <SelectValue placeholder="Select Language" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="cursor-pointer" value="en">English</SelectItem>
                                <SelectItem className="cursor-pointer" value="zh">Chinese (Simplified)</SelectItem>
                                <SelectItem className="cursor-pointer" value="es">Spanish</SelectItem>
                                <SelectItem className="cursor-pointer" value="ar">Arabic</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label className='text-xs sm:text-base'>Timezone</Label>
                        <Select defaultValue="ug-23">
                            <SelectTrigger className="cursor-pointer bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800">
                                <SelectValue placeholder="Select Timezone" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className="cursor-pointer" value="utc">UTC</SelectItem>
                                <SelectItem className="cursor-pointer" value="ug-23">UG-23 (GMT+3)</SelectItem>
                                <SelectItem className="cursor-pointer" value="pst">Pacific Standard Time (PST)</SelectItem>
                                <SelectItem className="cursor-pointer" value="est">Eastern Standard Time (EST)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="space-y-0.5">
                            <Label className="text-xs sm:text-base">Enable Dark Mode</Label>
                            <p className="text-[9px] sm:text-xs text-slate-500 dark:text-slate-400">Switch between light and dark themes automatically.</p>
                        </div>
                        <Switch id="dark-mode"  className='cursor-pointer'/>
                    </div>
                </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="border-none shadow-lg bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-1 sm:pb-4">
                    <div className="flex items-center gap-1">
                        <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <Bell className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Notification Settings</CardTitle>
                            <CardDescription className='text-[8px] sm:text-base'>Control notifications and alerts</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {[
                        { title: "Email Notifications", desc: "Receive updates via email", default: false },
                        { title: "New Users Notifications", desc: "Get notified when a new user signs up", default: true },
                        { title: "Subscription Notifications", desc: "Alerts for new subscriptions and renewals", default: true },
                        { title: "New Articles Notifications", desc: "Updates when new content is published", default: true },
                        { title: "System Notifications", desc: "Important system alerts and maintenance", default: true },
                    ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-2">
                        <div className="space-y-0.5">
                            <Label className="text-xs sm:text-sm font-medium">{item.title}</Label>
                            {/* <p className="text-xs text-slate-500">{item.desc}</p> */}
                        </div>
                        <Switch defaultChecked={item.default} className='cursor-pointer' />
                    </div>
                    ))}
                </CardContent>
            </Card>

            {/* Security & Privacy */}
            <Card className="border-none shadow-lg bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-1 sm:pb-4">
                    <div className="flex items-center gap-1">
                        <div className="p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Security & Privacy</CardTitle>
                            <CardDescription className='text-[8px] sm:text-base'>Security and password settings</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Two-Factor Authentication</Label>
                        <Switch className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Auto Logout</Label>
                        <Switch defaultChecked className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Allow Multiple Logins</Label>
                        <Switch defaultChecked className='cursor-pointer' />
                    </div>

                    <div className="space-y-2 pt-2">
                        <Label className='text-xs sm:text-base'>Session Duration (minutes)</Label>
                        <Select defaultValue="60">
                            <SelectTrigger className="cursor-pointer bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800">
                                <SelectValue placeholder="Select Duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='cursor-pointer' value="15">15 Minutes</SelectItem>
                                <SelectItem className='cursor-pointer' value="30">30 Minutes</SelectItem>
                                <SelectItem className='cursor-pointer' value="60">1 Hour</SelectItem>
                                <SelectItem className='cursor-pointer' value="240">4 Hours</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Email Settings */}
            <Card className="border-none shadow-lg bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-1 sm:pb-4">
                    <div className="flex items-center gap-1">
                        <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                            <Mail className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">Email Settings</CardTitle>
                            <CardDescription className='text-[8px] sm:text-base'>Configure email server</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label className='text-xs sm:text-base'>SMTP Server</Label>
                        <Input placeholder="smtp.gmail.com" className="text-xs sm:text-base bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800" />
                    </div>
                    <div className="space-y-2">
                        <Label className='text-xs sm:text-base'>Port</Label>
                        <Input placeholder="587" className="text-xs sm:text-base bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800" />
                    </div>
                    <div className="space-y-2">
                        <Label className='text-xs sm:text-base'>Sender Email</Label>
                        <Input placeholder="noreply@lxin.ai" className="text-xs sm:text-base bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800" />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Use SSL/TLS</Label>
                        <Switch className='cursor-pointer' />
                    </div>
                </CardContent>
            </Card>

            {/* System Settings */}
            <Card className="border-none shadow-lg bg-white dark:bg-[#14161f]">
                <CardHeader className="pb-1 sm:pb-4">
                    <div className="flex items-center gap-1">
                        <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <Server className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                        </div>
                        <div>
                            <CardTitle className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white">System Settings</CardTitle>
                            <CardDescription className='text-[8px] sm:text-base'>Advanced system settings</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Error Logging</Label>
                        <Switch className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Maintenance Mode</Label>
                        <Switch className='cursor-pointer' />
                    </div>
                    <div className="flex items-center justify-between py-2">
                        <Label className="text-xs sm:text-sm font-medium">Automatic Backup</Label>
                        <Switch className='cursor-pointer' />
                    </div>

                    <div className="space-y-2 pt-2">
                        <Label className='text-xs sm:text-base'>Max File Size (MB)</Label>
                        <Select defaultValue="100">
                            <SelectTrigger className="cursor-pointer bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800">
                                <SelectValue placeholder="Select Size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem className='cursor-pointer' value="10">10 MB</SelectItem>
                                <SelectItem className='cursor-pointer' value="50">50 MB</SelectItem>
                                <SelectItem className='cursor-pointer' value="100">100 MB</SelectItem>
                                <SelectItem className='cursor-pointer' value="500">500 MB</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Footer Actions */}
            <div className="w-full p-4 border-t border-slate-200 dark:border-slate-800 flex justify-between md:justify-start flex-wrap-reverse gap-4 z-10">
                <Button variant="outline" className="w-full md:w-auto cursor-pointer">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Cancel Changes
                </Button>
                <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white cursor-pointer" onClick={handleSave} disabled={isLoading}>
                    <Save className="w-4 h-4 mr-2" />
                    {isLoading ? 'Saving...' : 'Save Settings'}
                </Button>
            </div>
        </div>
    );
}
