import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{
      title,
      mainImage,
      content,
      "authorName": author->name
    }`,
    { slug }
  );

  if (!blog) return <div>Post not found</div>;

  return (
    <article className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-4">By {blog.authorName}</p>

      {blog.mainImage && (
        <Image
          src={urlFor(blog.mainImage).width(800).url()}
          alt={blog.title}
          width={800}
          height={500}
          className="rounded-xl mb-6"
        />
      )}

      <div className="prose prose-lg">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
}
