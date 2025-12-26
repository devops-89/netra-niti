import { Metadata } from "next";
import { BLOG_CARD_DATA } from "@/assets/generic-data";
import BlogDetailsLayout from "@/layouts/Blogs-Details-Layout";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = BLOG_CARD_DATA.find((item) => item.slug === slug);

  if (!blog) {
    return {
      title: "NxtGen Netra-Niti Blogs",
      description: "Expert blogs on kids eye care and vision health.",
    };
  }

  return {
    title: blog.seoTitle,
    description: blog.seoDescription,
    keywords: blog.seoKeywords,
  };
}

const BlogDetails = () => {
  return (
    <div>
      <BlogDetailsLayout />
    </div>
  );
};

export default BlogDetails;
