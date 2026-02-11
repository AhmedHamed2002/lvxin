'use client';

import { useState } from 'react';
import { 
    MessageSquare, Eye, EyeOff, Search, Plus, 
    Calendar, Mail, MoreHorizontal, User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Dialog, DialogContent, DialogDescription, 
    DialogHeader, DialogTitle, DialogFooter, DialogTrigger 
} from '@/components/ui/dialog';
import {
    Tabs, TabsList, TabsTrigger, TabsContent
} from '@/components/ui/tabs';

// Mock Data
const initialComments = [
    {
        id: 1,
        user: "Ahmed Mohamed",
        email: "ahmed.mohamed@example.com",
        avatar: "/avatars/01.png",
        initials: "AM",
        date: "2024-01-20",
        content: "This AI contract analysis tool is amazing! It saved me hours of work reviewing legal documents. Highly recommended for anyone dealing with contracts regularly.",
        status: "visible"
    },
    {
        id: 2,
        user: "Sarah Johnson",
        email: "sarah.j@company.com",
        avatar: "/avatars/02.png",
        initials: "SJ",
        date: "2024-01-19",
        content: "Great platform! The accuracy of the AI analysis is impressive. Would love to see more features for collaborative reviews.",
        status: "visible"
    },
    {
        id: 3,
        user: "Mohammed Ali",
        email: "m.ali@legal.com",
        avatar: "/avatars/03.png",
        initials: "MA",
        date: "2024-01-18",
        content: "As a legal professional, I find this tool extremely helpful. The contract risk assessment feature is particularly useful.",
        status: "hidden"
    },
    {
        id: 4,
        user: "Emily Chen",
        email: "emily.chen@bizmail.com",
        avatar: "/avatars/04.png",
        initials: "EC",
        date: "2024-01-17",
        content: "User-friendly interface and powerful AI capabilities. The subscription plans are reasonable too. Thanks for this amazing service!",
        status: "visible"
    },
    {
        id: 5,
        user: "Omar Hassan",
        email: "omar.hassan@startup.io",
        avatar: "/avatars/05.png",
        initials: "OH",
        date: "2024-01-16",
        content: "Perfect for startups! We use it to review all our vendor contracts. The AI catches things we might have missed.",
        status: "visible"
    },
    {
        id: 6,
        user: "Lisa Anderson",
        email: "lisa.a@enterprise.com",
        avatar: "/avatars/06.png",
        initials: "LA",
        date: "2024-01-15",
        content: "Been using this for 3 months now. The quality of analysis keeps getting better. Looking forward to future updates!",
        status: "hidden"
    }
];

export default function CommentsPage() {
    const [comments, setComments] = useState(initialComments);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [newComment, setNewComment] = useState({ name: '', email: '', content: '' });

    // Computed Stats
    const totalComments = comments.length;
    const visibleComments = comments.filter(c => c.status === 'visible').length;
    const hiddenComments = comments.filter(c => c.status === 'hidden').length;

    const filteredComments = comments.filter(comment => {
        const matchesSearch = comment.user.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            comment.content.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filterStatus === 'all' || comment.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const toggleStatus = (id: number) => {
        setComments(comments.map(c => {
            if (c.id === id) {
                return { ...c, status: c.status === 'visible' ? 'hidden' : 'visible' };
            }
            return c;
        }));
    };

    const handleAddComment = () => {
        // In a real app, this would send data to backend
        const newId = Math.max(...comments.map(c => c.id)) + 1;
        const comment = {
            id: newId,
            user: newComment.name,
            email: newComment.email,
            avatar: "",
            initials: newComment.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2),
            date: new Date().toISOString().split('T')[0],
            content: newComment.content,
            status: "visible"
        };
        setComments([comment, ...comments]);
        setIsAddOpen(false);
        setNewComment({ name: '', email: '', content: '' });
    };

    return (
        <div className="space-y-8 rounded-2xl shadow-md bg-white  dark:bg-[#0d0f15] min-h-screen p-4 md:p-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col mt-4 md:flex-row justify-between items-center md:items-center gap-4">
                <div className="space-y-1">
                    <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Comments Management</h1>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Manage and moderate user comments</p>
                </div>
                <Button onClick={() => setIsAddOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Comment
                </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="border-none shadow-md transition-all duration-700 hover:scale-95 cursor-pointer bg-[#fbfcfd] dark:bg-[#14161f]">
                    <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Comments</p>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{totalComments}</h3>
                            </div>
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="border-none shadow-md transition-all duration-700 hover:scale-95 cursor-pointer bg-[#fbfcfd] dark:bg-[#14161f]">
                    <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Visible Comments</p>
                                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mt-2">{visibleComments}</h3>
                            </div>
                            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                                <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md transition-all duration-700 hover:scale-95 cursor-pointer bg-[#fbfcfd] dark:bg-[#14161f]">
                    <CardContent className="p-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Hidden Comments</p>
                                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400 mt-2">{hiddenComments}</h3>
                            </div>
                            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                                <EyeOff className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters and Search */}
            <div className="flex flex-col xl:flex-row justify-between items-center gap-4 bg-white dark:bg-[#14161f] p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <Tabs defaultValue="all" value={filterStatus} onValueChange={setFilterStatus} className="w-full md:w-auto">
                    <TabsList className="bg-slate-100 dark:bg-[#0d0f15] p-1 h-auto">
                        <TabsTrigger value="all" className="cursor-pointer rounded-md px-2 py-2 text-[7px] sm:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            All<span className='hidden sm:block'>Comments</span> <Badge variant="secondary" className="text-[9px] sm:text-base ms-0 sm:ms-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-data-[state=active]:bg-blue-500 group-data-[state=active]:text-white">{totalComments}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="visible" className="cursor-pointer rounded-md px-2 py-2 text-[7px] sm:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            Visible <Badge variant="secondary" className="text-[9px] sm:text-base ms-0 sm:ms-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 group-data-[state=active]:bg-blue-500 group-data-[state=active]:text-white">{visibleComments}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="hidden" className="cursor-pointer rounded-md px-2 py-2 text-[7px] sm:text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                            Hidden <Badge variant="secondary" className="text-[9px] sm:text-base ms-0 sm:ms-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 group-data-[state=active]:bg-blue-500 group-data-[state=active]:text-white">{hiddenComments}</Badge>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input 
                        placeholder="Search comments..." 
                        className="text-[10px] sm:text-base pl-9 bg-slate-50 dark:bg-[#0d0f15] border-slate-200 dark:border-slate-800"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Comments Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {filteredComments.map((comment) => (
                    <Card key={comment.id} className="border-none shadow-sm cursor-pointer transition-all duration-700 bg-white dark:bg-[#14161f] hover:bg-slate-100 dark:hover:bg-[#1a1c22]">
                        <CardContent className="p-4 space-y-2">
                            {/* Header */}
                            <div className="flex justify-between items-start flex-wrap">
                                <div className="flex items-start gap-2">
                                    <Avatar className="h-8 w-8 border border-slate-200 dark:border-slate-700">
                                        <AvatarImage src={comment.avatar} />
                                        <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold text-xs">
                                            {comment.initials}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 dark:text-white text-[12px] sm:text-sm">{comment.user}</h4>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="flex items-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                                                <Mail className="w-3 h-3 mr-1" /> <span className='break-normal'>{comment.email}</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="flex items-center text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">
                                                <Calendar className="w-3 h-3 mr-1" /> {comment.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <Badge 
                                    className={`${
                                        comment.status === 'visible' 
                                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border-blue-100 dark:border-blue-800' 
                                            : 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400 border-orange-100 dark:border-orange-800'
                                    } hover:bg-opacity-80 border shadow-none text-[10px] sm:text-sm mt-2 ms-10 sm:ms-0 `}
                                >
                                    {comment.status === 'visible' ? (
                                        <><Eye className="w-3 h-3 md:w-4 md:h-4 mt-0.5" /> Visible</>
                                    ) : (
                                        <><EyeOff className="w-3 h-3 md:w-4 md:h-4 mt-0.5" /> Hidden</>
                                    )}
                                </Badge>
                            </div>

                            {/* Comment Body */}
                            <div className="bg-slate-50 dark:bg-[#0d0f15] p-4 rounded-xl text-[10px] sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-800">
                                {comment.content}
                            </div>

                            {/* Footer / Actions */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                                    {comment.status === 'visible' ? 'Hide this comment from users' : 'Show this comment to users'}
                                </span>
                                <Switch 
                                    checked={comment.status === 'visible'}
                                    onCheckedChange={() => toggleStatus(comment.id)}
                                    className={`${comment.status === 'visible' ? 'bg-blue-600 cursor-pointer' : 'bg-slate-200 dark:bg-slate-700 cursor-pointer'}`}
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Add Comment Modal */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="sm:max-w-[500px] bg-white dark:bg-[#14161f] border-slate-200 dark:border-slate-800">
                    <DialogHeader>
                        <DialogTitle className="text-base sm:text-xl font-bold text-slate-900 dark:text-white">Add New Comment</DialogTitle>
                        <DialogDescription className='text-[9px] dm:text-base'>
                            Create a comment that will be visible to users
                        </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-x-1 gap-y-3 py-2">
                        <div className="space-y-1">
                            <Label htmlFor="name" className='text-[11px] dm:text-base'>User Name</Label>
                            <Input 
                                id="name" 
                                placeholder="Enter user name"
                                className='text-[11px] dm:text-base'
                                value={newComment.name}
                                onChange={(e) => setNewComment({...newComment, name: e.target.value})}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email" className='text-[11px] dm:text-base'>Email Address</Label>
                            <Input 
                                id="email" 
                                type="email" 
                                placeholder="Enter email address"
                                className='text-[11px] dm:text-base'
                                value={newComment.email}
                                onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="comment" className='text-[11px] dm:text-base'>Comment</Label>
                            <Textarea 
                                id="comment" 
                                placeholder="Enter comment text" 
                                className="min-h-[80px] sm:min-h-[100px] text-[11px] dm:text-base"
                                value={newComment.content}
                                onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                            />
                        </div>
                    </div>

                    <DialogFooter>
                        <Button variant="outline" className="cursor-pointer" onClick={() => setIsAddOpen(false)}>Cancel</Button>
                        <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white" onClick={handleAddComment}>
                            <Plus className="w-4 h-4 mr-2" /> Add Comment
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}
