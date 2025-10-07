import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

// Define Sanity image type
type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

// Define the blog type
type Blog = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: SanityImage;
  publishedAt: string;
  authorName: string;
};

export default async function BlogPage() {
  const blogs: Blog[] = await client.fetch(`
    *[_type == "blog"]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "authorName": author->name
    } | order(publishedAt desc)
  `);

  return (
    <main className="max-w-6xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blog/${blog.slug.current}`}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            {blog.mainImage && (
              <div className="relative w-full h-[250px]">
                <Image
                  src={urlFor(blog.mainImage).width(600).height(400).url()}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-1">By {blog.authorName}</p>
              <p className="text-sm text-gray-400">
                {new Date(blog.publishedAt).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}


