import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import About from "./about";

const HomePageLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ pt: 0 }}>
        <About />
      </Box>
    </Box>
  );
};

export default HomePageLayout;
