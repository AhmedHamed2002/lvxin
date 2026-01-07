"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {Sheet,SheetContent,SheetTrigger,SheetTitle,SheetDescription,} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { History,} from "lucide-react";
import HistorySidebar, {Consultation,} from "@/components/HistorySidebar";
import ChatContent from "@/components/ChatContent";

/* ======== Mock Data ========= */
const consultations = [
    { id: 1, name: "Contract Review", desc: "Review legal contract", pinned: false },
    { id: 2, name: "Project Proposal", desc: "Discuss new project", pinned: true },
    { id: 3, name: "Budget Overview", desc: "Overview of monthly budget", pinned: false },
    { id: 4, name: "Meeting Notes", desc: "Notes from client meeting", pinned: false },
    { id: 5, name: "Design Mockup", desc: "Check UI mockups", pinned: false },
    { id: 6, name: "Design Mockup", desc: "Check UI mockups", pinned: false },
    { id: 7, name: "Design Mockup", desc: "Check UI mockups", pinned: false },
];

export default function LegalConsultationsPage() {
    interface Message {
        id: number;
        role: "user" | "assistant";
        text: string;
    }

    const [messages, setMessages] = useState<Message[]>([
        { id: 1, role: "assistant", text: "Hello, how can I help you today?" },
        { id: 2, role: "user", text: "I need a contract review." },
    ]);

    const [input, setInput] = useState("");
    const [openHistory, setOpenHistory] = useState(false);

    const sendMessage = () => {
        if (!input.trim()) return;
        setMessages((prev) => [
            ...prev,
            { id: Date.now(), role: "user", text: input },
        ]);
        setInput("");
    };

    return (
        <div className="flex h-[83vh] md:h-[80vh]">
            {/* Main */}
            <main className="flex flex-1 flex-col">
                {/* Header */}
                <header className="flex items-center justify-between border-b bg-blue-100 dark:bg-blue-900 rounded-tr-3xl rounded-tl-3xl px-4 py-3">
                    <h1 className="text-sm md:text-lg font-semibold text-blue-700 dark:text-blue-300">
                        New Chat
                    </h1>

                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 cursor-pointer hover:text-blue-700 dark:hover:text-blue-300 bg-transparent hover:bg-blue-200 dark:hover:bg-blue-800 shadow-none border-none"
                        >
                            <i className="fa-regular fa-share-from-square text-blue-700 dark:text-blue-300 text-[15px]"></i>
                            <span>Share</span>
                        </Button>

                        {/* Mobile History Button */}
                        <Sheet open={openHistory} onOpenChange={setOpenHistory}>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="lg:hidden cursor-pointer"
                                    aria-label="Open previous consultations"
                                >
                                    <History className="h-4 w-4 text-[#2563eb] dark:text-blue-400" />
                                </Button>
                            </SheetTrigger>

                            {/* Mobile Drawer */}
                            <SheetContent
                                side="right"
                                className="w-80 p-0 bg-[#f8fafc] dark:bg-[#0d1118]"
                            >
                                <VisuallyHidden>
                                    <SheetTitle>Previous Consultations</SheetTitle>
                                    <SheetDescription>
                                        A list of your previous legal consultation sessions
                                    </SheetDescription>
                                </VisuallyHidden>

                                <HistorySidebar consultations={consultations} />
                            </SheetContent>
                        </Sheet>
                    </div>
                </header>

                {/* Content */}
                <ChatContent
                    messages={messages}
                    input={input}
                    setInput={setInput}
                    sendMessage={sendMessage}
                />
            </main>

            {/* Desktop History Sidebar */}
            <aside className="hidden lg:flex w-72 border border-gray-300 dark:border-gray-700 lg:rounded-2xl ms-3 bg-[#f8fafc] dark:bg-[#0d1118]">
                <HistorySidebar consultations={consultations} />
            </aside>
        </div>
    );
}




