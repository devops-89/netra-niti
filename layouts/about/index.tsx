import { Box, Container } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import { COLORS } from "@/utils/enum";
import TeamsAbout from "./teams-about";

const AboutLayout = () => {
  return (
    <Box>
      <AboutHeroSection />
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            py: 7,
            mt: 4,
          }}
        >
          <TeamsAbout />
        </Box>
      </Container>
    </Box>
  );
};

export default AboutLayout;
