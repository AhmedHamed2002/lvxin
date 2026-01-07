"use client";

import { Button } from "@/components/ui/button";
import { Eye, Download, Trash2, Upload, BadgeCheck, BadgeAlert, BadgeX } from "lucide-react";
import Link from "next/link";

export default function HistoryTable() {
    const dummyData = [
    {
        id: 1,
        consultationTitle: 'Consultation A',
        analysisName: 'Analysis X',
        date: '2025-12-26',
        status: 'success'
    },
    {
        id: 2,
        consultationTitle: 'Consultation B',
        analysisName: 'Analysis Y',
        date: '2025-12-25',
        status: 'error'
    },
    {
        id: 3,
        consultationTitle: 'Consultation C',
        analysisName: 'Analysis Z',
        date: '2025-12-27',
        status: 'processing'
    },
    {
        id: 4,
        consultationTitle: 'Consultation D',
        analysisName: 'Analysis W',
        date: '2025-12-28',
        status: 'pending'
    }
    ];


    const statusColors: Record<string, string> = {
        success:
            'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
        error:
            'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
        pending:
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
        processing:
            'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    };

    return (
        <div className="w-full bg-white dark:bg-[#161a26] rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col gap-2">
                <div className="flex justify-center md:justify-between items-center flex-wrap gap-x-4 ">
                    <h3 className="text-lg font-semibold">
                        Analysis Results History
                    </h3>
                    <Button className="mt-2 cursor-pointer bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white">
                        <Upload size={16} className="mr-2" />
                        Upload New Document
                    </Button>
                </div>

                <div className="flex justify-between items-center flex-wrap gap-4 mt-4">
                    <div className="w-full sm:w-96">
                        <input
                            type="text"
                            placeholder="Search analyses..."
                            className="pl-4 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-[#1f2333] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <select
                        className="cursor-pointer px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-[#1f2333] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="all">All Status</option>
                        <option value="success">Success</option>
                        <option value="error">Error</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                    </select>
                </div>
            </div>

            {/* Table - Desktop*/}
            <div className="overflow-x-auto">
                <table className="hidden lg:table w-full">
                    <thead className="bg-gray-100 dark:bg-[#1f2333]">
                        <tr>
                            {['Consultation Title', 'Analysis Name', 'Date Analyzed', 'Status', 'Actions'].map((title) => (
                                <th key={title} className="px-6 py-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {title}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {dummyData.map((record) => (
                            <tr
                                key={record.id}
                                className="cursor-pointer hover:bg-gray-50 dark:hover:bg-[#22273a] transition-colors"
                            >
                                <td className="px-6 py-4 text-sm">
                                    {record.consultationTitle}
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    {record.analysisName}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    {record.date}
                                </td>
                                <td className="px-6 py-4 relative">
                                    {record.status === 'processing' ? (
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                                        {/* Spinner */}
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                        </svg>
                                        {record.status}
                                        </span>
                                    ) : (
                                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                                            {record.status === 'success' && <BadgeCheck size={14} />}
                                            {record.status === 'pending' && <BadgeAlert size={14} />}
                                            {record.status === 'error' && <BadgeX size={14} />}
                                            {record.status}
                                        </span>
                                    )}
                                </td>

                                <td className="px-6 py-4 flex items-center gap-2">
                                    <Link href={`/mydash/analytics-history/report-details/${record.id}`}>
                                        <button className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                            <Eye size={18} />
                                        </button>
                                    </Link>
                                    <button className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                                        <Download size={18} />
                                    </button>
                                    <button className="p-2 cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/40 rounded-md">
                                        <Trash2 size={18} className="text-red-600 dark:text-red-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Table - Mobile*/}
            <div className="lg:hidden space-y-4 p-4">
                {dummyData.map((record) => (
                    <div
                        key={record.id}
                        className="cursor-pointer hover:bg-gray-50 dark:hover:bg-[#22273a] transition-colors bg-gray-50 dark:bg-[#1f2333] rounded-xl p-4 border dark:border-gray-700"
                    >
                        <div className="flex justify-between mb-2 items-center">
                        <h4 className="font-semibold">
                            {record.consultationTitle}
                        </h4>

                        {record.status === 'processing' ? (
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                            {/* Spinner */}
                            <svg className="animate-spin mt-1 -ml-1 mr-1 h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                            {record.status}
                            </span>
                        ) : (
                            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${statusColors[record.status]}`}>
                                {record.status === 'success' && <BadgeCheck size={12} />}
                                {record.status === 'pending' && <BadgeAlert size={12} />}
                                {record.status === 'error' && <BadgeX size={12} />}
                                {record.status}
                            </span>
                        )}
                        </div>

                        <p className="text-sm text-gray-500">
                            {record.analysisName}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {record.date}
                        </p>

                        <div className="flex gap-3 mt-4">
                            <Link href={`/mydash/analytics-history/report-details/${record.id}`}>
                                <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600">
                                    <Eye size={16} />
                                </button>
                            </Link>
                            <button className="p-2 bg-gray-200 dark:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600">
                                <Download size={16} />
                            </button>
                            <button className="p-2 bg-red-100 dark:bg-red-900/40 rounded-md cursor-pointer hover:bg-red-200 dark:hover:bg-red-800/60">
                                <Trash2 size={16} className="text-red-600" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>


            {/* Footer */}
            <div className="p-12 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    No more analyses
                </p>
            </div>
        </div>
    );
}
