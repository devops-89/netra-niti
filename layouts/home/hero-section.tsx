"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { keyframes, useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import line from "@/homepage/line_hero.png";
import { fancake, poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import eye from "@/homepage/banner_eye.png";
import Image from "next/image";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { CalendarMonth } from "@mui/icons-material";
import Link from "next/link";
import Aos from "aos";
// import nextVideo from "../../";
const rotateInfinite = keyframes` 
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  const tablet = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: { lg: "115vh", xs: "100%" },
          position: "relative",
          overflow: "hidden",
          py: { xs: 10, lg: 0 },
        }}
      >
        {/* Responsive Dashed Line */}
        {/* <Box
          sx={{
            position: "absolute",
            top: { xs: -100, sm: -120, md: -150, lg: -180 },
            left: { xs: -50, sm: -30, md: -20, lg: 0 },
            right: { xs: -50, sm: -30, md: -20, lg: 0 },
            bottom: 0,
            zIndex: 0,
          }}
        >
          <Image
            src={line}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
            priority
          />
          
        </Box> */}

        <Box
          sx={{
            height: { lg: "100vh", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // position: "relative",
            // zIndex: 1,
          }}
        >
          <Grid container alignItems={"center"} spacing={{ xs: 3, lg: 5 }}>
            <Grid
              size={{ lg: 6, xs: 12 }}
              className="animate__animated animate__backInLeft"
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  fontSize: { xs: 35, sm: 45, md: 55, lg: 60 },
                  letterSpacing: { xs: "-1px", lg: "-2.73px" },
                  filter: "blur(0.5px)",
                  lineHeight: 1.1,
                  mb: 1,
                }}
              >
                Focus on what matters with
              </Typography>
              <Typography
                sx={{
                  fontFamily: fancake.style.fontFamily,
                  color: COLORS.PRIMARY,
                  fontSize: { xs: 35, sm: 45, md: 55, lg: 60 },
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                clear vision.
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 20, md: 22, lg: 25 },
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  mb: 3,
                  lineHeight: 1.4,
                }}
              >
                Personalized eye care and the latest in fashionable eyewear, all
                under one roof.
              </Typography>
              <Link href="/contact-us">
                <ButtonWithIcon
                  label="Book an eye exam"
                  sx={{
                    mt: 3,
                    backgroundColor: COLORS.WHITE,
                    color: COLORS.PRIMARY,
                    fontWeight: 600,
                    border: "none",
                    fontSize: { xs: "14px", sm: "16px" },
                    px: { xs: 2, sm: 3 },
                    py: { xs: 1, sm: 1.5 },
                  }}
                  iconBgColor={COLORS.PRIMARY}
                  icon={<CalendarMonth sx={{ color: COLORS.WHITE }} />}
                />
              </Link>
            </Grid>
            <Grid
              size={{ lg: 6, xs: 12 }}
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="animate__animated animate__backInRight"
            >
              {/* <Box
                sx={{
                  width: {
                    xs: 250,
                    sm: 350,
                    md: 400,
                    lg: 450,
                  },
                  height: {
                    xs: 250,
                    sm: 350,
                    md: 400,
                    lg: 450,
                  },
                  animation: `${rotateInfinite} 60s linear infinite`,
                  transformOrigin: "50% 50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={eye}
                  alt="Eye illustration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  priority
                />
              </Box> */}

              <video
                playsInline
                autoPlay
                muted
                style={{
                  width: phone ? "100%" : "80%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              >
                <source
                  src="/images/homepage/netra_niti_01.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
