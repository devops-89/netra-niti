"use client";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import bot from "@/about/netra-bot-02.png";
import Image from "next/image";
import DescriptionBox from "./components/description-box";
const Vision = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ pt: 5 }}>
      <Container>
        <Grid
          container
          alignItems={"center"}
          direction={{ lg: "row", xs: "column-reverse" }}
        >
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image src={bot} alt="" style={{ width: phone ? "100%" : "" }} />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <DescriptionBox
              heading="Our Vision"
              subHeading1="Empowering lives through better"
              subHeading2="vision"
              description="We envision a future where no one suffers from preventable blindness. By spreading awareness, promoting regular eye check-ups, and advancing innovative treatments, we aim to make clear and healthy vision a reality for everyone."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
