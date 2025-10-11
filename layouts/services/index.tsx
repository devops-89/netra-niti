import React from "react";
import ServicesHeroSection from "./services-hero-section";
import { Box, Container } from "@mui/material";
import { COLORS } from "@/utils/enum";
import Process from "./process";
import AdvancedMyopia from "./advanced-myopia";
import line from "@/services/line.png";
import SchoolVision from "./school-vision";
import WhyChoose from "./why-choose";
import ParentEducationProgram from "./parent-education-program";
const ServicesLayout = () => {
  return (
    <div>
      <ServicesHeroSection />
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          <Process />
          <AdvancedMyopia />
        </Box>
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            // pt: 10,
          }}
        >
          <Container>
            <Box
              sx={{
                backgroundImage: `url(${line.src})`,
                height: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            >
              <Box sx={{pt:10}}>
                <SchoolVision />
              </Box>
              <Box sx={{pt:10}}>
                <WhyChoose />
              </Box>
              <Box sx={{pt:10}}>
                <ParentEducationProgram />
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
    </div>
  );
};

export default ServicesLayout;
