"use client";

import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data.tsx";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`} className="block">
      <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 hover:border-[#133bb7]">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#133bb7] leading-tight">
            {post.title}
          </h2>
          <p className="text-gray-600 mt-2 text-base">{post.subtitle}</p>
        </div>
        <div>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
