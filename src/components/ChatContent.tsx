import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Paperclip, File, Hammer, Users, BadgeCheck, Scale, Upload, Plus ,Copy,ThumbsUp,ThumbsDown,Share2,RefreshCcw, CheckCheck, UserIcon, Bot,} from "lucide-react";


interface Message {
    id: number;
    role: "user" | "assistant";
    text: string;
}

interface ChatContentProps {
    messages: Message[];
    input: string;
    setInput: (val: string) => void;
    sendMessage: () => void;
}

const ChatContent: React.FC<ChatContentProps> = ({ messages, input, setInput, sendMessage }) => {
    return (
        <div className="flex flex-1 overflow-auto">
            {/* Chat Area */}
            <section className="flex flex-1 flex-col w-full">
                <ScrollArea className="flex-1 p-4 border-x bg-white dark:bg-[#0d1118] dark:border-gray-700">
                {messages.length === 0 ? (
                    /* ========== Empty State =========== */
                    <div className="h-full flex flex-col items-center justify-center text-center mt-10 md:mt-16 text-gray-900 dark:text-gray-200">
                        <Scale size={65} className="text-blue-600 mb-6" />

                        <h2 className="text-xl font-bold mb-2">
                            Welcome to LVXIN Legal Consultation Assistant
                        </h2>

                        <p className="text-sm text-gray-400 dark:text-gray-400 my-2 font-semibold">
                            I am your professional legal advisor assistant, providing you with:
                        </p>

                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-y-4 text-gray-800 dark:text-gray-200">
                                <Hammer size={15} className="me-3 text-blue-500"/>
                                <p>Legal provisions interpretation and case analysis</p>
                            </div>
                            <div className="flex items-center gap-y-4 text-gray-800 dark:text-gray-200">
                                <File size={15} className="me-3 text-blue-500"/>
                                <p>Contract review and risk assessment</p>
                            </div>
                            <div className="flex items-center gap-y-4 text-gray-800 dark:text-gray-200">
                                <Users size={15} className="me-3 text-blue-500"/>
                                <p>Corporate legal consultation and compliance advice</p>
                            </div>
                            <div className="flex items-center gap-y-4 text-gray-800 dark:text-gray-200">
                                <BadgeCheck size={15} className="me-3 text-blue-500"/>
                                <p>Rights protection and legal rights guidance</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-y-2 flex-wrap mt-5">
                            <Button variant="outline"
                                className="px-10 border-blue-500 me-4 text-blue-500 hover:bg-blue-600 hover:text-white cursor-pointer dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-700 dark:hover:text-white"
                                onClick={() => document.getElementById("file-upload")?.click()}
                            >
                                <Upload size={14}/>
                                Upload Contract
                            </Button>
                            <Button variant="outline" className="px-10 -ms-2 text-white bg-blue-600 hover:bg-transparent hover:text-blue-500 hover:border-blue-500 cursor-pointer dark:bg-blue-700 dark:hover:bg-transparent dark:hover:text-blue-400 dark:hover:border-blue-400">
                                <Plus size={14}/>
                                New Consultation
                            </Button>
                        </div>
                    </div>
                ) : (
                    /* ========= Messages =========== */
                    <div className="space-y-6">
                    {messages.map((msg) => (
                        <div
                        key={msg.id}
                        className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                        >
                        {/* Icon */}
                        <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border ${msg.role === "user" ? "border-blue-500" : "border-gray-300 dark:border-gray-600"} flex items-center justify-center`}
                        >
                            {msg.role === "user" ? (
                            <UserIcon size={20} className="text-blue-500" />
                            ) : (
                            <Bot size={20} className="text-gray-600 dark:text-gray-300" />
                            )}
                        </div>

                        {/* Message Bubble */}
                        <div className="max-w-[75%]">
                            <div
                            className={`relative rounded-lg px-4 py-3 text-sm shadow-sm ${
                                msg.role === "user"
                                ? "bg-[#2563eb] text-white hover:bg-[#1d4ed8] cursor-pointer"
                                : "bg-white dark:bg-[#1b1e2b] text-[#0e2259] dark:text-gray-200 border hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                            }`}
                            >
                            <p className="pb-4 pr-12">{msg.text}</p>

                            {/* Time */}
                            {msg.role === "assistant" && (
                                <span className="absolute bottom-1 left-3 text-[10px] text-gray-400 dark:text-gray-500">
                                {new Date(msg.id).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                </span>
                            )}

                            {msg.role === "user" && (
                                <div className="absolute bottom-1 right-2 flex items-center gap-1 text-[10px] text-blue-100">
                                <span>
                                    {new Date(msg.id).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    })}
                                </span>
                                <CheckCheck size={12} className="text-blue-200" />
                                </div>
                            )}
                            </div>

                            {/* Actions for assistant */}
                            {msg.role === "assistant" && (
                            <div className="mt-1 flex justify-end gap-3 px-1 text-gray-400 dark:text-gray-400">
                                <Copy size={14} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" onClick={() => navigator.clipboard.writeText(msg.text)} />
                                <ThumbsUp size={14} className="cursor-pointer hover:text-green-600 dark:hover:text-green-500" />
                                <ThumbsDown size={14} className="cursor-pointer hover:text-red-600 dark:hover:text-red-500" />
                                <Share2 size={14} className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" />
                                <RefreshCcw size={14} className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400" />
                            </div>
                            )}
                        </div>
                        </div>
                    ))}
                    </div>
                )}
                </ScrollArea>

                {/* Input */}
                <div className="border-t sticky -bottom-2 w-full p-3 flex items-center gap-2 rounded-bl-2xl rounded-br-2xl bg-blue-100 dark:bg-[#1b1e2b]">
                {/* Upload Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className=" cursor-pointer text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-white dark:bg-[#0d1118]"
                    onClick={() => document.getElementById("file-upload")?.click()}
                >
                    <Paperclip className="h-4 w-4" />
                </Button>

                <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.doc,.png,.jpg"
                    className="hidden"
                />

                <Input
                    placeholder="Start typing..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="border-none shadow-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:bg-[#0d1118] dark:text-gray-200"
                />

                <Button
                    onClick={sendMessage}
                    size="icon"
                    className={`h-10 w-10 text-white shadow-sm transition-all ${input.trim() ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-400 dark:bg-slate-700 cursor-not-allowed"}`}
                    disabled={!input.trim()}
                >
                    <Send size={18} />
                </Button>
                </div>
            </section>
        </div>
    );
};


export default ChatContent;
