import React from 'react'
import BlogsLayout from '@/layouts/blogs-layout';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Netra Niti Blogs",
  description: "Read the latest blogs from Netra Niti.",
  alternates: {
    canonical: "/blogs",
  },
};

 const Blogs = () => {
  return (
    <BlogsLayout />
  )
}
export default Blogs;