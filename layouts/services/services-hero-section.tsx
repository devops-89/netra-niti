"use client";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { CalendarMonth } from "@mui/icons-material";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import servicesHero from "@/services/services-hero.png";
import Image from "next/image";
import Link from "next/link";
const ServicesHeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        height: { lg: "100vh", xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 10, lg: 0 },
      }}
    >
      <Container>
        <Grid container alignItems={"center"}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 54, xs: 35 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                lineHeight: 1.1,
              }}
            >
              Comprehensive{" "}
              <Typography
                sx={{
                  fontSize: { lg: 60, xs: 35 },
                  fontFamily: fancake.style.fontFamily,
                  color: COLORS.PRIMARY,
                  lineHeight: 1.1,
                }}
                component={"span"}
              >
                Myopia Prevention & Care Services
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 25, xs: 20 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                mt: 2,
              }}
            >
              From screenings to advanced treatments, we provide end-to-end
              solutions to safeguard children’s vision.
            </Typography>
            <Link href={"/contact-us"}>
              <ButtonWithIcon
                label="Book an eye exam"
                sx={{
                  backgroundColor: COLORS.WHITE,
                  color: COLORS.PRIMARY,
                  fontWeight: 600,
                  mt: 3,
                }}
                icon={<CalendarMonth sx={{ color: COLORS.WHITE }} />}
                iconBgColor={COLORS.PRIMARY}
              />
            </Link>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={servicesHero}
              alt=""
              style={{ width: "100%", height: phone ? "100%" : 550 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesHeroSection;
