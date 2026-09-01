// import { Metadata } from 'next'
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import CountUpCard from "@/layouts/about/components/count-up-card";
import { ABOUT_COUNTER_NUMBER } from "@/assets/generic-data";
import Image from "next/image";
import heroImage from "@/public/images/blogs/blogs-hero-section.png";
import React from "react";
const BlogsPage = () => {
  return (
    <Box
      sx={{
        height: { lg: "80", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              component="h1"
              sx={{
                fontSize: { lg: 45, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                letterSpacing: "-2.55px",
              }}
            >
              Insightful stories for{" "}
              <Typography
                component={"span"}
                sx={{
                  fontFamily: fancake.style.fontFamily,
                  fontSize: { lg: 89, xs: 60 },
                  color: COLORS.PRIMARY,
                  letterSpacing: "-2.55px",
                }}
              >
                Brighter Vision
              </Typography>
            </Typography>
            <Typography
              component="h2"
              sx={{
                mt: 2,
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 20, xs: 16 },
                color: COLORS.WHITE,
              }}
            >
              Learn, explore, and stay informed with blogs designed to support
              your child’s eye health and everyday vision needs.
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
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogsPage;
