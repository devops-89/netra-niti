import AboutLayout from "@/layouts/about";
import { Metadata } from "next";
import React from "react";
// ad metadata
export const metadata: Metadata = {
  title: "About Netra Niti – Child Eye Care & Myopia Solutions for Kids",
  description:
    "Worried about your child’s eyesight? Netra Niti provides expert pediatric eye care, myopia management, and quality eyewear to keep their vision healthy",
};

const Aboutus = () => {
  return (
    <div>
      <AboutLayout />
    </div>
  );
};

export default Aboutus;
