import BlogCard from "@/components/ui/blogcard";
import { blogPosts, parseBlogContent } from "@/lib/blogdata";

export default function BlogPage() {
  const welcomePost = blogPosts.find(
    (post) => post.id === "welcome-to-delemate"
  );
  const otherBlogPosts = blogPosts.filter(
    (post) => post.id !== "welcome-to-delemate"
  );

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Welcome to <span className="text-[#133bb7]">DeleMate</span> Blog
      </h1>

      {welcomePost && (
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12 max-w-3xl mx-auto border border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            {welcomePost.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6">{welcomePost.subtitle}</p>
          <div className="prose prose-lg max-w-none">
            {parseBlogContent(welcomePost.content)}
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:gap-8">
        {otherBlogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
