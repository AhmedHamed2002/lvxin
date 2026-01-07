"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ReactNode } from "react";
import { ChevronsRight } from "lucide-react"

export function DashboardNavbar() {
  const pathname = usePathname()


const pageNameMap: Record<string, ReactNode> = {
  "/mydash": "Welcome Page",
  "/mydash/dashboard": "Dashboard",
  "/mydash/legal-consultations": "Legal Consultations",
  "/mydash/analytics-history": "Analytical History",
  "/mydash/profile": "Profile",
  "/mydash/feedback": "Feedback",
};

const getPageTitle = (path: string) => {
  if (path.startsWith("/mydash/analytics-history/report-details/review-final-contract/")) {
        return (
          <div className="flex items-center">
            <span className="flex items-center gap-x-2">
                <Link href="/mydash/analytics-history" className="hover:underline" >
                    <p className="text-neutral-700 dark:text-white hover:text-blue-800 text-xs">Analytical History</p> 
                </Link>
                <ChevronsRight size={12} className="inline-block mt-1 text-black dark:text-white" />
            </span>
            <span className="flex items-center gap-x-2">
                <Link href={`/mydash/analytics-history/report-details/${pathname.split("/").pop()}`} className="hover:underline" >
                    <p className="text-neutral-700 dark:text-white hover:text-blue-800 text-xs ms-2">Report Details</p> 
                </Link>
                <ChevronsRight size={12} className="inline-block mt-1 text-black dark:text-white" />
                <span className="text-xs">Review Final Contract</span> 
            </span>
          </div>
        );
    }
    else if (path.startsWith("/mydash/analytics-history/report-details/")) {
        return (
            <span className="flex items-center gap-x-2">
                <Link href="/mydash/analytics-history" className="hover:underline" >
                    <p className="text-neutral-700 dark:text-white hover:text-blue-800 text-xs">Analytical History</p> 
                </Link>
                <ChevronsRight size={12} className="inline-block mt-1 text-black dark:text-white" />
                <span className="text-xs">Report Details</span> 
            </span>
        );
    }
    
    return pageNameMap[path] || "Page";
};

  const currentPage = getPageTitle(pathname);

  return (
    <header
      className="
        h-14 flex items-center gap-x-2 px-4
        border-b
        bg-white dark:bg-[#0d0f15]
        border-gray-200 dark:border-[#1f2937]
      "
    >
      <SidebarTrigger />

      <Link
        href="/mydash"
        className="
          font-semibold flex items-center gap-x-1
          text-gray-800 dark:text-gray-200
          hover:underline
          hover:text-blue-800 dark:hover:text-blue-400
          transition-colors
          text-xs
        "
      >
        My Dashboard
        <ChevronsRight className="inline-block mt-1 ml-1 mb-0.5" size={12} />
      </Link>

      <span className="text-blue-800 dark:text-blue-400 text-xs">
        {currentPage}
      </span>
    </header>
  )
}
