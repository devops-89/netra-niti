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
const rotateInfinite = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const HeroSection = () => {
  const phone = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: { lg: "115vh", xs: "100%" },
          position: "relative",
          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            height: { lg: "100vh", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            src={line}
            alt=""
            style={{
              width: "100%",
              objectFit: "contain",
              position: "absolute",
              top: -180,
              // height: phone ? "100%" : "200vh",
            }}
          /> */}
          <Grid container alignItems={"center"} spacing={5}>
            <Grid
              size={{ lg: 6, xs: 12 }}
              className="animate__animated animate__backInLeft"
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  fontSize: { lg: 60, xs: 35 },
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
                  fontSize: { lg: 60, xs: 35 },
                }}
              >
                clear vision.
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: 25, xs: 16 },
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
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
                  }}
                  iconBgColor={COLORS.PRIMARY}
                  icon={<CalendarMonth sx={{ color: COLORS.WHITE }} />}
                />
              </Link>
            </Grid>
            <Grid
              size={{ lg: 6, xs: 12 }}
              sx={{ textAlign: "center" }}
              className="animate__animated animate__backInRight"
            >
              <Box
                sx={{
                  width: { lg: 450, xs: 300 },
                  height: { lg: 450, xs: 300 },
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
        </Box>
        {/* <Box
          sx={{
            backgroundImage: `url(${line.src})`,
            height: { lg: "100%", xs: "100%" },
            backgroundSize: "contain",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: { xs: 10, lg: 0 },
          }}
        >
          <Container
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid container alignItems={"center"} spacing={5}>
              <Grid
                size={{ lg: 6, xs: 12 }}
                className="animate__animated animate__backInLeft"
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.WHITE,
                    fontSize: { lg: 60, xs: 35 },
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
                    fontSize: { lg: 60, xs: 35 },
                  }}
                >
                  clear vision.
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: 25, xs: 16 },
                    fontFamily: poppins.style.fontFamily,
                    color: COLORS.WHITE,
                  }}
                >
                  Personalized eye care and the latest in fashionable eyewear,
                  all under one roof.
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
                    }}
                    iconBgColor={COLORS.PRIMARY}
                    icon={<CalendarMonth sx={{ color: COLORS.WHITE }} />}
                  />
                </Link>
              </Grid>
              <Grid
                size={{ lg: 6, xs: 12 }}
                sx={{ textAlign: "center" }}
                className="animate__animated animate__backInRight"
              >
                <Box
                  sx={{
                    width: { lg: 450, xs: 300 },
                    height: { lg: 450, xs: 300 },
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
        </Box> */}
      </Box>
    </Container>
  );
};

export default HeroSection;
