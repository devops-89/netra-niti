"use client";
import HomePageLayout from "@/layouts/home";
import HeroSection from "@/layouts/home/hero-section";
import { Box } from "@mui/material";
import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box>
      <HomePageLayout />
    </Box>
  );
}
