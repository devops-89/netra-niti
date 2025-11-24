import ServicesLayout from "@/layouts/services";
import { Box } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Our Services – Netra Niti Pediatric Eye Care",
  description:
    "Netra Niti specializes in pediatric myopia management, providing expert eye care, personalized treatment plans, and guidance to protect children’s vision.",
};

const Services = () => {
  return (
    <Box>
      <ServicesLayout />
    </Box>
  );
};

export default Services;
