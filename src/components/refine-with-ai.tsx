import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send,Copy,ThumbsUp,ThumbsDown,UserIcon, Bot, Sparkles, MessageSquare } from "lucide-react";


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

const RefineWithAI: React.FC<ChatContentProps> = ({ messages, input, setInput, sendMessage }) => {
    return (
        <div className="flex flex-1 overflow-hidden flex-col h-[50vh] sm:h-[80vh] bg-slate-50 dark:bg-[#0d1118]">
            {/* Header */}
            <div className="flex items-center gap-3 p-4 sm:p-6 border-b bg-white dark:bg-[#0d1118] dark:border-gray-800 shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                    <Sparkles size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Refine with AI</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Ask questions about this contract and its analysis</p>
                </div>
            </div>

            {/* Chat Area */}
            <section className="flex flex-col w-full min-h-0 overflow-y-auto">
                <ScrollArea className="p-2 sm:p-4 min-h-[50vh] sm:min-h-[60vh] max-h-[50vh] sm:max-h-[60vh] overflow-auto">
                {messages.length === 0 ? (
                    /* ========== Empty State =========== */
                    <div className="h-full flex flex-col items-center justify-center max-w-lg mx-auto w-full px-2 sm:px-0">
                        <div className="bg-white dark:bg-[#151921] rounded-xl px-4 sm:px-8 py-5 shadow-sm border border-slate-100 dark:border-gray-800 w-full mb-4 sm:mb-8">
                            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-3">
                                Ask me anything about this contract
                            </h3>
                            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                                I have access to the full contract text and all analysis results. Ask 
                                about risks, financial terms, specific clauses, or any concerns you 
                                have.
                            </p>

                            <div className="space-y-2">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">SUGGESTED QUESTIONS</p>
                                
                                {[
                                    "What are the main obligations of each party?",
                                    "Summarize the key financial terms",
                                    "What are the highest risk clauses?",
                                    "Explain the termination conditions",
                                    "Are there any hidden penalties?"
                                ].map((question, index) => (
                                    <button 
                                        key={index}
                                        onClick={() => setInput(question)}
                                        className="w-full flex items-center gap-3 px-3 py-2 sm:px-4 cursor-pointer text-left rounded-lg border border-slate-200 hover:border-indigo-300 hover:bg-slate-50 dark:border-gray-700 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/10 transition-all group bg-white dark:bg-transparent"
                                    >
                                        <MessageSquare className="h-5 w-5 text-indigo-500 dark:text-indigo-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">{question}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ========= Messages =========== */
                    <div className="space-y-2 max-w-3xl mx-auto w-full pb-4">
                        {messages.map((msg) => (
                            <div
                            key={msg.id}
                            className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                            >
                            {/* Icon */}
                            <div
                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                                    msg.role === "user" 
                                    ? "bg-indigo-600 text-white" 
                                    : "bg-white border dark:bg-gray-800 dark:border-gray-700 text-indigo-600 dark:text-indigo-400"
                                }`}
                            >
                                {msg.role === "user" ? (
                                <UserIcon size={18} />
                                ) : (
                                <Sparkles size={18} />
                                )}
                            </div>

                            {/* Message Bubble */}
                            <div className={`flex flex-col max-w-[80%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                                <div
                                className={`rounded-xl px-5 py-3 text-sm shadow-sm ${
                                    msg.role === "user"
                                    ? "bg-indigo-600 text-white"
                                    : "bg-white dark:bg-[#151921] text-gray-800 dark:text-gray-200 border border-slate-100 dark:border-gray-800"
                                }`}
                                >
                                <p className="leading-relaxed">{msg.text}</p>
                                </div>
                                
                                {/* Time & Actions */}
                                <div className="flex items-center gap-2 mt-1 px-1">
                                    <span className="text-[10px] text-gray-400 uppercase font-medium">
                                        {new Date(msg.id).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                    
                                    {msg.role === "assistant" && (
                                        <div className="flex gap-2 ml-2">
                                            <button className="text-gray-400 hover:text-indigo-500 transition-colors" title="Copy">
                                                <Copy size={12} onClick={() => navigator.clipboard.writeText(msg.text)} />
                                            </button>
                                            <button className="text-gray-400 hover:text-green-500 transition-colors" title="Helpful">
                                                <ThumbsUp size={12} />
                                            </button>
                                            <button className="text-gray-400 hover:text-red-500 transition-colors" title="Not helpful">
                                                <ThumbsDown size={12} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>
                )}
                </ScrollArea>

                {/* Input Area */}
                <div className="p-3 sm:p-4 bg-white dark:bg-[#0d1118] border-t dark:border-gray-800">
                    <div className="max-w-3xl mx-auto w-full">
                        <div className="relative flex items-center gap-2 p-2 bg-slate-50 dark:bg-[#151921] border border-slate-200 dark:border-gray-700 rounded-xl focus-within:ring-2 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-900/30 transition-all">
                            <Input
                                placeholder="Ask a question about this contract..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                className="flex-1 bg-transparent border-none shadow-none focus-visible:ring-0 text-base py-3 px-3 dark:text-white placeholder:text-slate-400"
                            />
                            
                            <Button
                                onClick={sendMessage}
                                size="icon"
                                className={`h-10 w-10 text-white shadow-sm transition-all ${input.trim() ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-300 dark:bg-slate-700 cursor-not-allowed"}`}
                                disabled={!input.trim()}
                            >
                                <Send size={18} />
                            </Button>
                        </div>
                        
                        <div className="flex justify-center items-center mt-3 gap-2 text-xs text-slate-400 dark:text-slate-500">
                            <Sparkles size={12} />
                            <span>AI has context of: <strong>test7.docx</strong></span>
                            <span className="mx-1">•</span>
                            <span className="text-indigo-500 dark:text-indigo-400 cursor-pointer hover:underline">Full Analysis Results</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );  
};


export default RefineWithAI ;
