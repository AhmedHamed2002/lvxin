"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {Accordion,AccordionItem,AccordionTrigger,AccordionContent,} from "@/components/ui/accordion";
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,} from "@radix-ui/react-dropdown-menu";
import { Pin, MoreVertical, Edit, Trash2 } from "lucide-react";

/* ======================
    Types
====================== */
export type Consultation = {
    id: number;
    name: string;
    desc?: string;
    pinned?: boolean;
};

/* ======================
    Props
====================== */
type HistorySidebarProps = {
    consultations: Consultation[];
};

export default function HistorySidebar({ consultations }: HistorySidebarProps) {
    const [chatList, setChatList] = useState(consultations);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [tempName, setTempName] = useState("");
    const [deletingId, setDeletingId] = useState<number | null>(null);

    const handleEditClick = (item: Consultation) => {
        setEditingId(item.id);
        setTempName(item.name);
    };

    const handleSave = (id: number) => {
        setChatList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, name: tempName } : item
            )
        );
        setEditingId(null);
    };

    const handleDelete = (id: number) => {
        setChatList((prev) => prev.filter((item) => item.id !== id));
        setDeletingId(null);
    };

    return (
        <div className="flex h-full w-full flex-col bg-white dark:bg-[#0d1118] text-gray-900 dark:text-gray-200 lg:rounded-2xl">
            {/* Header */}
            <div className="border-b px-4 py-3 w-full bg-blue-100 dark:bg-[#1b1e2b] lg:rounded-tl-2xl lg:rounded-tr-2xl">
                <h3 className="font-semibold text-blue-600 dark:text-blue-400">
                    Previous Consultations
                </h3>
            </div>

            {/* New Chat */}
            <Button className=" cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] mx-4 mt-3 dark:bg-blue-700 dark:hover:bg-blue-600">
                + New Chat
            </Button>

            {/* Search */}
            <div className="p-3">
                <Input placeholder="Search..." className="bg-white dark:bg-[#1b1e2b] dark:text-gray-200" />
            </div>

            {/* Chats */}
            <ScrollArea className="max-h-[30vh] px-2">
                <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="chat">
                        <AccordionTrigger className="p-3 cursor-pointer bg-gray-200 dark:bg-gray-700 data-[state=open]:bg-blue-200 data-[state=open]:text-blue-600 font-bold">
                            Chats
                        </AccordionTrigger>

                        <AccordionContent className="p-3 bg-blue-100 dark:bg-[#1b1e2b] rounded-b-xl space-y-2">
                            {chatList.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-xl border p-2 flex justify-between bg-white dark:bg-[#0d1118] hover:bg-[#f1f5ff] dark:hover:bg-gray-700"
                                >
                                    {/* Info */}
                                    <div>
                                        {editingId === item.id ? (
                                            <input
                                                value={tempName}
                                                onChange={(e) => setTempName(e.target.value)}
                                                onBlur={() => handleSave(item.id)}
                                                onKeyDown={(e) => e.key === "Enter" && handleSave(item.id)}
                                                className="border mb-1 px-2 py-1 rounded-lg bg-white dark:bg-[#151920] dark:text-gray-200"
                                                autoFocus
                                            />
                                        ) : (
                                            <div className="font-medium text-[#0e2259] dark:text-gray-200">
                                                {item.name}
                                            </div>
                                        )}
                                        <div className="text-xs text-gray-500 dark:text-gray-400">
                                            {item.desc || "Uploaded successfully"}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 items-start">
                                        <Pin
                                            size={16}
                                            className={item.pinned ? "text-blue-600 cursor-pointer dark:text-blue-400" : "text-gray-400 cursor-pointer dark:text-gray-500"}
                                        />

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <MoreVertical size={18} className="cursor-pointer text-gray-500 dark:text-gray-400" />
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent className="bg-white dark:bg-[#1b1e2b] p-2 border dark:border-gray-700 rounded-md shadow-md">
                                                {/* Edit */}
                                                <div
                                                    className="flex items-center gap-2 cursor-pointer rounded-sm hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-5 py-1 mb-2"
                                                    onClick={() => handleEditClick(item)}
                                                >
                                                    <Edit size={16} /> Edit
                                                </div>

                                                {/* Delete */}
                                                {deletingId === item.id ? (
                                                    <div className="px-5 py-2 space-y-2">
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">Are you sure?</p>

                                                        <div className="flex gap-2">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onMouseDown={(e) => e.preventDefault()}
                                                                onClick={() => setDeletingId(null)}
                                                            >
                                                                No
                                                            </Button>

                                                            <Button
                                                                size="sm"
                                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                                onMouseDown={(e) => e.preventDefault()}
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Yes
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="flex items-center gap-2 text-red-600 cursor-pointer rounded-sm hover:text-red-800 hover:bg-red-100 dark:hover:bg-red-300 px-5 py-1"
                                                        onMouseDown={(e) => e.preventDefault()}
                                                        onClick={() => setDeletingId(item.id)}
                                                    >
                                                        <Trash2 size={16} /> Delete
                                                    </div>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ScrollArea>

            {/* Pinned */}
            <ScrollArea className="max-h-[20vh] px-2 overflow-auto mt-2">
                <Accordion type="single" collapsible defaultValue="pinned" className="space-y-2">
                    <AccordionItem value="pinned">
                        <AccordionTrigger className="p-3 data-[state=open]:rounded-none data-[state=open]:rounded-tl-lg data-[state=open]:rounded-tr-lg cursor-pointer text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 data-[state=open]:bg-yellow-100  data-[state=open]:text-yellow-600 dark:data-[state=open]:text-yellow-500 transition-colors text-left font-sans font-bold border-none shadow-none">
                            For you
                        </AccordionTrigger>

                        <AccordionContent className="p-3 text-sm text-[#64748b] dark:text-gray-400 bg-yellow-50 dark:bg-[#1b1e2b] rounded-b-xl space-y-2">
                            {chatList.filter((item) => item.pinned).map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-xl border p-2 flex justify-between items-start bg-[#fbfbf9] dark:bg-[#1b1e2b] hover:bg-[#fffff1] dark:hover:bg-gray-700 transition"
                                >
                                    {/* Left */}
                                    <div>
                                        {editingId === item.id ? (
                                            <input
                                                value={tempName}
                                                onChange={(e) => setTempName(e.target.value)}
                                                onBlur={() => handleSave(item.id)}
                                                onKeyDown={(e) => e.key === "Enter" && handleSave(item.id)}
                                                className="border mb-1 px-2 py-1 rounded-lg bg-white dark:bg-[#151920] dark:text-gray-200"
                                                autoFocus
                                            />
                                        ) : (
                                            <div className="font-medium text-[#0e2259] dark:text-gray-200">
                                                {item.name}
                                            </div>
                                        )}
                                        <div className="text-xs text-[#64748b] dark:text-gray-400">
                                            {item.desc || "Uploaded successfully"}
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-2 items-center">
                                        <Pin size={16} className="text-blue-600 dark:text-blue-400 cursor-pointer" />

                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <MoreVertical size={18} className="cursor-pointer text-gray-500 dark:text-gray-400" />
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent className="bg-white dark:bg-[#1b1e2b] p-2 border dark:border-gray-700 rounded-md shadow-md">
                                                {/* Edit */}
                                                <div
                                                    className="flex items-center gap-2 cursor-pointer rounded-sm hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 px-5 py-1 mb-2"
                                                    onClick={() => handleEditClick(item)}
                                                >
                                                    <Edit size={16} /> Edit
                                                </div>

                                                {/* Delete */}
                                                {deletingId === item.id ? (
                                                    <div className="px-5 py-2 space-y-2">
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">Are you sure?</p>

                                                        <div className="flex gap-2">
                                                            <Button
                                                                size="sm"
                                                                variant="outline"
                                                                onMouseDown={(e) => e.preventDefault()}
                                                                onClick={() => setDeletingId(null)}
                                                            >
                                                                No
                                                            </Button>

                                                            <Button
                                                                size="sm"
                                                                className="bg-red-600 hover:bg-red-700 text-white"
                                                                onMouseDown={(e) => e.preventDefault()}
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                Yes
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div
                                                        className="flex items-center gap-2 text-red-600 cursor-pointer rounded-sm hover:text-red-800 hover:bg-red-100 dark:hover:bg-red-300 px-5 py-1"
                                                        onMouseDown={(e) => e.preventDefault()}
                                                        onClick={() => setDeletingId(item.id)}
                                                    >
                                                        <Trash2 size={16} /> Delete
                                                    </div>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            ))}

                            {/* Empty state */}
                            {chatList.filter((item) => item.pinned).length === 0 && (
                                <div className="text-center text-sm text-gray-400 dark:text-gray-500 py-4">
                                    No pinned chats
                                </div>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </ScrollArea>
        </div>
    );
}

