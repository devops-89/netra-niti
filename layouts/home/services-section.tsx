"use client";

import { services_data_section } from "@/assets/generic-data";
import line from "@/homepage/line_about.png";
import { COLORS } from "@/utils/enum";
import { din, fancake, poppins } from "@/utils/fonts";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./components/service-card";
import netraBot from "@/homepage/about-us/netra-bot.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Aos from "aos";
const ServiceSection = () => {
  const phone = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Box>
      <Container maxWidth="lg">
        <Box>
          <Box
            sx={{
              backgroundImage: `url(${line.src})`,
              height: "100%",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box sx={{ py: 8 }}>
              <Grid container alignItems={"flex-end"} spacing={5}>
                <Grid size={{ lg: 8, xs: 12 }} data-aos="fade-up">
                  <Stack
                    direction={{ lg: "row", xs: "column" }}
                    alignItems={"flex-start"}
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: { lg: 50, xs: 30 },
                        color: COLORS.SECONDARY,
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 700,
                        textTransform: "capitalize",
                        lineHeight: { lg: "76px", xs: "40px" },
                      }}
                    >
                      We always provide the best service
                    </Typography>
                    <Stack direction={"row"} alignItems="center" spacing={4}>
                      <IconButton
                        sx={{
                          backgroundColor: COLORS.SECONDARY,
                          color: COLORS.WHITE,
                          width: { lg: 70, xs: 50 },
                          height: { lg: 70, xs: 50 },
                          ":hover": {
                            color: COLORS.SECONDARY,
                            border: `1px solid ${COLORS.SECONDARY}`,
                          },
                          transition: "0.5s ease all",
                        }}
                      >
                        <ArrowBack sx={{ fontSize: { lg: 30, xs: 20 } }} />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: COLORS.SECONDARY,
                          color: COLORS.WHITE,
                          width: { lg: 70, xs: 50 },
                          height: { lg: 70, xs: 50 },
                          ":hover": {
                            color: COLORS.SECONDARY,
                            border: `1px solid ${COLORS.SECONDARY}`,
                          },
                          transition: "0.5s ease all",
                        }}
                      >
                        <ArrowForward sx={{ fontSize: { lg: 30, xs: 20 } }} />
                      </IconButton>
                    </Stack>
                  </Stack>

                  <Swiper
                    breakpoints={{
                      600: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                      },
                      1366: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    {services_data_section.map((val, i) => (
                      <SwiperSlide key={i}>
                        <ServiceCard
                          img={val.img}
                          heading={val.heading}
                          description={val.description}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Grid>
                <Grid
                  size={{ lg: 4, xs: 12 }}
                  sx={{ textAlign: "end", position: "relative" }}
                >
                  <Box
                    sx={{
                      width: { lg: 300, xs: "100%" },
                      margin: "auto",
                      textAlign: "start",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { lg: 50, xs: 30 },
                          fontFamily: fancake.style.fontFamily,
                          color: COLORS.PRIMARY,
                        }}
                      >
                        Hi!{" "}
                      </Typography>
                      <TypeAnimation
                        sequence={["I'm Netra", 1000, "How're you?", 1000]}
                        speed={50}
                        style={{
                          fontSize: phone ? 30 : 50,
                          fontFamily: fancake.style.fontFamily,
                          color: COLORS.PRIMARY,
                        }}
                        repeat={Infinity}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "end" }}>
                    <Image
                      src={netraBot}
                      alt=""
                      width={200}
                      style={{ rotate: "-20deg", marginTop: 20 }}
                      className="animate__animated animate__shakeY animate__infinite	infinite animate__slow	5s"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceSection;
