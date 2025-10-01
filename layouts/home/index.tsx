import { Box } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import ServiceSection from "./services-section";
import { COLORS } from "@/utils/enum";
import NetraNitiSection from "./netra-niti-section";

const HomePageLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Box sx={{ backgroundColor: COLORS.WHITE, borderRadius: "30px", px: 3 }}>
        <ServiceSection />
        <NetraNitiSection />
      </Box>
    </Box>
  );
};

export default HomePageLayout;
