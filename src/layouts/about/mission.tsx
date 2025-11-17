"use client";

import bot01 from "@/about/netra-bot-01.png";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import DescriptionBox from "./components/description-box";
const Mission = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ pt: 8 }}>
      <Container>
        <Grid container alignItems="center" spacing={5}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <DescriptionBox
              heading="Our Mission"
              subHeading1="Delivering world-class care with"
              subHeading2="compassion"
              description="Our mission is to provide accessible, high-quality eye care using advanced technology and evidence-based practices. We strive to detect and treat vision problems early, manage complex eye conditions, and guide patients towards healthier eyesight with warmth and empathy."
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ textAlign: "center" }}>
            <Image
              src={bot01}
              alt=""
              style={{ width: phone ? "100%" : 510, objectFit: "contain" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mission;
