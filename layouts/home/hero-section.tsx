"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { keyframes } from "@mui/system";
import React from "react";
import line from "@/homepage/line_hero.png";
import { fancake, poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import eye from "@/homepage/banner_eye.png";
import Image from "next/image";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { CalendarMonth } from "@mui/icons-material";
const rotateInfinite = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const HeroSection = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundImage: `url(${line.src})`,
            height: "105vh",
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container>
            <Grid container alignItems={"center"}>
              <Grid size={6}>
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.WHITE,
                    fontSize: 60,
                    letterSpacing: "-2.73px",
                    filter: "blur(2px)",
                  }}
                >
                  Focus on what matters with
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fancake.style.fontFamily,
                    color: COLORS.PRIMARY,
                    fontSize: 60,
                  }}
                >
                  clear vision.
                </Typography>
                <Typography
                  sx={{
                    fontSize: 25,
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.WHITE,
                  }}
                >
                  Personalized eye care and the latest in fashionable eyewear,
                  all under one roof.
                </Typography>

                <ButtonWithIcon
                  label="Book an eye exam"
                  sx={{
                    mt: 3,
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.PRIMARY,
                    fontWeight: 600,
                    border: "none",
                  }}
                  iconBgColor={COLORS.PRIMARY}
                  icon={<CalendarMonth sx={{ color: COLORS.WHITE }} />}
                />
              </Grid>
              <Grid size={6} sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: 450,
                    height: 450,
                    animation: `${rotateInfinite} 60s linear infinite`,
                    transformOrigin: "50% 50%",
                    display: "inline-block",
                    margin: "auto",
                  }}
                >
                  <Image
                    src={eye}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
