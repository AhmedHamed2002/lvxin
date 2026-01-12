"use client";

import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {ArrowRight, Calendar, Eye} from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  categories: string[];
  title: string;
  excerpt: string;
  authorName: string
  authImage: string
  views: number
  date: string;
}

export function BlogCard({image, categories, title, excerpt, authImage, authorName, views, date}: BlogCardProps) {
  return (
    <div
      className="group cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 bg-white dark:bg-[#252a3a] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800 flex flex-col h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={title} fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"/>
      </div>
      <div className="p-5 flex flex-col grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((cat, index) => (
            <Badge key={index} variant="secondary"
                  className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 border-none text-[10px] font-medium px-2 py-0">{cat}</Badge>
          ))}
        </div>
        <h3
          className="text-lg font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm line-clamp-3 mb-4 grow">{excerpt}</p>
        <div
          className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6 mt-3">
                {/*<AvatarImage src={author.image} alt={author.name}/>*/}
                {/*<AvatarFallback>{author.name[0]}</AvatarFallback>*/}
              </Avatar>
              <div className="flex flex-col justify-end items-start pt-3">
                {/*<span className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">{author.name}</span>*/}
                <div className="flex gap-x-1 mt-1 text-[10px] text-gray-400 dark:text-gray-400 ">
                  <Eye size={15}/>
                  <span className="font-medium">{views}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-neutral-500 dark:text-neutral-400 text-[10px]">
            <div className="flex flex-col justify-end items-start pt-3">
              <div className="flex gap-x-1">
                <Calendar className="h-3 w-3"/>
                <span>{date}</span>
              </div>
              {/*<Link href={`/blog/${slug}`}> */}
              {/*    <div className="flex items-center gap-x-1 mt-3 text-[14px] text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">*/}
              {/*        <span>Read More</span>*/}
              {/*        <ArrowRight size={17}/>*/}
              {/*    </div>*/}
              {/*</Link>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
