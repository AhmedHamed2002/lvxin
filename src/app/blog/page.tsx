"use client";

import Footer from "@/components/footer";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import PageHero from "@/components/PageHero";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Pagination } from "@/components/blog/Pagination";
import { useEffect, useState } from "react";
import { PageQuery, PageResult } from "@/core/table";
import { Api } from "@/core/api";
import LawyerRequestCTA from "@/components/LawyerRequestCTA";
import QRContactSection from "@/components/QRContactSection";


export default function BlogPage() {
  const breadcrumbs = [
    {label: "Home", href: "/"},
    {label: "Blog", href: "/blog"},
  ];
  const [loading, setLoading] = useState(false);
  const [
    pageQueryParams, setPageQueryParams
  ] = useState<PageQuery>(
    {
      page: 1,
      size: 4,
      sorts: [],
      params: {}
    }
  )

  const [pageResult, setPageResult] = useState<PageResult>({
    page: 1,
    size: 4,
    pageData: [],
    total: 0,
    totalPages: 0
  })

  useEffect(() => {
    Api.lvxin.toPageBlogList(pageQueryParams).then((r) => {
      setPageResult(r.data)
    })
  })

  // const blogPosts = [
  //     {
  //         slug: "essential-contract-review-checklist",
  //         image: "/assets/images/blog2.jpg",
  //         categories: ["Compliance", "Legal"],
  //         title: "Essential Contract Review Checklist for Legal Teams",
  //         excerpt: "A comprehensive guide to streamlining your contract review process with proven techniques and AI-powered tools.",
  //         author: { name: "Dr. Catherine Smith", image: "/assets/images/avatar1.png" },
  //         views: 1000 ,
  //         date: "October 15, 2025"
  //     },
  //     {
  //         slug: "understanding-the-impact-of-new-data-privacy-laws",
  //         image: "/assets/images/blog3.jpg",
  //         categories: ["Compliance", "Legal"],
  //         title: "Understanding the Impact of New Data Privacy Laws",
  //         excerpt: "How upcoming regulations will change the way companies handle user data and what legal teams need to prepare.",
  //         author: { name: "Michael Chen", image: "/assets/images/avatar2.png" },
  //         views: 400 ,
  //         date: "October 12, 2025"
  //     },
  //     {
  //         slug: "how-to-automate-standard-business-agreements",
  //         image: "/assets/images/blog4.jpg",
  //         categories: ["Legal Tech", "AI"],
  //         title: "How to Automate Standard Business Agreements",
  //         excerpt: "Efficient ways to use automation for routine contracts without sacrificing legal precision or security.",
  //         author: { name: "Sarah Johnson", image: "/assets/images/avatar3.png" },
  //         views: 20 ,
  //         date: "October 10, 2025"
  //     },
  //     {
  //         slug: "the-role-of-blockchain-in-modern-legal-systems",
  //         image: "/assets/images/blog5.jpg",
  //         categories: ["Legal Tech", "AI"],
  //         title: "The Role of Blockchain in Modern Legal Systems",
  //         excerpt: "Exploring the practical applications of smart contracts and decentralized ledgers in the legal profession.",
  //         author: { name: "Sarah Johnson", image: "/assets/images/avatar3.png" },
  //         views: 1331 ,
  //         date: "October 10, 2025"
  //     }
  // ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] dark:bg-neutral-950 font-sans overflow-x-hidden">

      <main className="pt-16">
        {/* Header Section */}
        <PageHero title="Blog" breadcrumbs={breadcrumbs}/>

        {/* Blog Section */}
        <section
          className="bg-[#f2f3f7] dark:bg-[#11131c] px-4 pt-16 pb-20 border-t-[3px] border-dotted border-blue-200 dark:border-blue-900">
          <div className="max-w-7xl mx-auto">
            {/* Blog Post */}
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-2/3">
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                  {pageResult.pageData.map((post, index) => (
                    <BlogCard
                      key={post.id}
                      image={post.image}
                      categories={post.categoriesList}
                      title={post.title}
                      excerpt={post.description}
                      views={post.viewCount}
                      date={post.publishDate}
                      authImage=""
                      authorName=""
                    />
                  ))}
                </div>

                {/* Pagination */}
                <Pagination/>
              </div>

                        {/* Sidebar */}
                        <div className="w-full lg:w-1/3">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        </main>


      {/* QR Contact Section */}
      <QRContactSection/>

      {/* Lawyer Request CTA */}
      <LawyerRequestCTA/>

      {/* Newsletter Section */}
      <div className="bg-[#f2f3f7] dark:bg-[#1b1f2c]">
        <NewsletterSection/>
      </div>

      {/* CTA Section */}
      <CTASection/>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}
