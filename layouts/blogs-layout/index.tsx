import { Box } from "@mui/material";
import React from "react";
import BlogsPage from "./blogs-hero-section";
import BlogsSection from "./components/blog-grid";
const BlogsLayout = () => {
  return (
    <Box>
      <BlogsPage />
      <BlogsSection/>
    </Box>
  );
};

export default BlogsLayout;