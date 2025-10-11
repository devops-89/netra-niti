import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import heroImage from "@/contact/hero-section.png";
import Image from "next/image";
import { ABOUT_COUNTER_NUMBER } from "@/assets/generic-data";
import CountUpCard from "../about/components/count-up-card";
const ContactHeroSection = () => {
  return (
    <Box
      sx={{
        height: { lg: "100vh", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 55, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
              }}
            >
              At
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 55, xs: 30 },
                fontFamily: fancake.style.fontFamily,
                color: COLORS.PRIMARY,
                lineHeight: 1.1,
              }}
            >
              NetraNiti,
            </Typography>

            <Typography
              sx={{
                fontSize: { lg: 55, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
              }}
            >
              your child’s vision is our mission
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 25, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                mt: 2,
              }}
            >
              we’re committed to guiding every step towards brighter, clearer
              tomorrows.
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
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={heroImage}
              alt=""
              style={{ width: "100%", height: 600, objectFit: "cover" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHeroSection;
