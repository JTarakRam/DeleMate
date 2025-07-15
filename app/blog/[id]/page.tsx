import { blogPosts, parseBlogContent } from "@/lib/blogdata";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  const contentElements = parseBlogContent(post.content);

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-3xl">
      <article className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{post.subtitle}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-8 border-b pb-4">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <div className="prose prose-lg max-w-none">{contentElements}</div>
      </article>
    </div>
  );
}
