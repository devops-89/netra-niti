"use client";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import banner from "@/homepage/testimonial_banner.png";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import TestimonialCard from "./components/testimonial-card";
import { TESTIMONIAL_CARD_DATA } from "@/assets/generic-data";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const HomeTestimonial = () => {
  const ref = useRef<SwiperRef | null>(null);

  const prevSlide = () => {
    ref.current?.swiper.slidePrev();
  };

  const nextSlide = () => {
    ref.current?.swiper.slideNext();
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${banner.src})`,
        height: "100vh",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          <Grid size={5}>
            <Typography
              sx={{
                fontSize: 15,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.SECONDARY,
              }}
            >
              Testimonial
            </Typography>
            <Typography
              sx={{
                fontSize: 40,
                fontWeight: 500,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "74px",
              }}
            >
              Real Stories, Real Impact: Hear from Our Satisfied Patients
            </Typography>

            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <IconButton onClick={prevSlide}>
                <ChevronLeft sx={{ color: COLORS.SECONDARY }} />
              </IconButton>
              <IconButton onClick={nextSlide}>
                <ChevronRight sx={{ color: COLORS.SECONDARY }} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={7}>
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={15}
              ref={ref}
            >
              {TESTIMONIAL_CARD_DATA.map((val, i) => (
                <SwiperSlide key={i}>
                  <TestimonialCard
                    img={val.img}
                    name={val.name}
                    description={val.description}
                    designation={val.designation}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeTestimonial;
