import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CountUpCard from "./components/count-up-card";
import { ABOUT_COUNTER_NUMBER } from "@/assets/generic-data";
import heroImage from "@/about/about-hero.png";
import Image from "next/image";
const AboutHeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 45,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                letterSpacing: "-2.55px",
              }}
            >
              We are a team of{" "}
              <Typography
                component={"span"}
                sx={{
                  fontFamily: fancake.style.fontFamily,
                  fontSize: 100,
                  color: COLORS.PRIMARY,
                  letterSpacing: "-2.55px",
                }}
              >
                optometrists{" "}
              </Typography>{" "}
              Fighting against Myopia.
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontFamily: poppins.style.fontFamily,
                fontSize: 20,
                color: COLORS.WHITE,
              }}
            >
              We provide comprehensive eye check-ups, vision correction, and
              preventive care. Our team combines advanced technology with
              compassionate service to protect and improve your eyesight.
            </Typography>
            <Grid container sx={{ mt: 4 }} spacing={3}>
              {ABOUT_COUNTER_NUMBER.map((val, i) => (
                <Grid size={4} key={i}>
                  <CountUpCard
                    number={val.number}
                    suffix={val.suffix}
                    title={val.title}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={6}>
            <Image src={heroImage} alt="" style={{ width: "100%", height: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;
