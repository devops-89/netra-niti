import { Box, Container } from "@mui/material";
import React from "react";
import AboutHeroSection from "./about-hero-section";
import { COLORS } from "@/utils/enum";
import TeamsAbout from "./teams-about";
import Mission from "./mission";
import line from "@/about/line.png";
import Vision from "./vision";
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
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${line.src})`,
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
              py: 2,
            }}
          >
            <Mission />
            <Vision />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutLayout;
