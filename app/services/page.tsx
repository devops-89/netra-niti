import ServicesLayout from "@/layouts/services";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Netra Niti Complete Child Eye Care Solutions",
  description:
    "Netra Niti specializes in pediatric myopia management, providing expert eye care, personalized treatment plans, and guidance to protect children’s vision.",
  keywords: [
    "Vision therapy for kids",
    "Nearsightedness treatment for children",
  ],
  alternates: {
    canonical: "/services",
  },
};

const Services = () => {
  return (
    <Box>
      <ServicesLayout />
    </Box>
  );
};

export default Services;
