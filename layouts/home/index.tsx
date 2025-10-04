import { Box, Container } from "@mui/material";
import React from "react";
import HeroSection from "./hero-section";
import ServiceSection from "./services-section";
import { COLORS } from "@/utils/enum";
import NetraNitiSection from "./netra-niti-section";
import Preventing from "./preventing";
import Approach from "./approach";
import SupporativeCare from "./supporative-care";

const HomePageLayout = () => {
  return (
    <Box>
      <HeroSection />
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "30px",
            px: 3,
            pb: 7,
          }}
        >
          <ServiceSection />
          <NetraNitiSection />
          <Preventing />
        </Box>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderRadius: "30px",
            px: 3,
            py: 7,
            mt: 4,
          }}
        >
          <Approach />
          <SupporativeCare />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePageLayout;
