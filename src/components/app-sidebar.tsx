"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarHeader,SidebarMenu,SidebarMenuButton,SidebarMenuItem,} from "@/components/ui/sidebar"

import { LayoutDashboard, BarChart3, User, CreditCard, MessageSquare, LogOut, MessagesSquare } from "lucide-react"

const items = [
    { title: "Dashboard", url: "/mydash/dashboard", icon: LayoutDashboard },
    { title: "Legal Consultations", url: "/mydash/legal-consultations", icon: MessagesSquare },
    { title: "Analytical History", url: "/mydash/analytics-history", icon: BarChart3 },
    { title: "Profile", url: "/mydash/profile", icon: User },
    { title: "Feedback", url: "/mydash/feedback", icon: MessageSquare },
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon" variant="sidebar" className="mt-16 flex flex-col h-screen">
        {/* Logo */}
        <SidebarHeader className="px-6 py-3 md:py-0 bg-[#ffffff] dark:bg-[#0d0f15]">
            <img 
            src="/assets/images/big-logo.png" 
            alt="Lvxin Logo" 
            className="h-20 w-auto mx-auto md:hidden" 
            />
        </SidebarHeader>

        {/* Menu items */}
        <SidebarContent className="bg-[#f6fbfe] dark:bg-[#202227] pt-2 md:pt-12 flex flex-col flex-1">
            <SidebarGroup className="flex-1">
            <SidebarGroupContent>
                <SidebarMenu>
                {items.map((item) => {
                    const isActive = pathname === item.url
                    return (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                        asChild
                        className={`
                            rounded-xl transition-colors my-2 px-6
                            ${isActive
                            ? "text-primary-foreground bg-blue-900 dark:bg-blue-800 dark:text-primary"
                            : "hover:bg-muted"}
                        `}
                        >
                        <Link href={item.url} className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                        </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    )
                })}

                {/* Logout button at bottom */}
                <SidebarMenuButton asChild className="rounded-xl transition-colors px-6 cursor-pointer text-red-600 hover:bg-red-300 dark:hover:bg-red-900 mb-6">
                <div>
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                </div>
                </SidebarMenuButton>
                </SidebarMenu>
            </SidebarGroupContent>
            </SidebarGroup>

        </SidebarContent>
        </Sidebar>
    )
}
