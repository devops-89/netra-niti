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
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "./components/service-card";
import netraBot from "@/homepage/about-us/netra-bot.png";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
const ServiceSection = () => {
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
            <Box sx={{ py: 4 }}>
              <Grid container alignItems={"flex-end"} spacing={5}>
                <Grid size={8}>
                  <Stack
                    direction={"row"}
                    alignItems={"flex-start"}
                    justifyContent="space-between"
                    spacing={3}
                  >
                    <Typography
                      sx={{
                        fontSize: 50,
                        color: COLORS.SECONDARY,
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 700,
                        textTransform: "capitalize",
                        lineHeight: "76px",
                      }}
                    >
                      We always provide the best service
                    </Typography>
                    <Stack direction={"row"} alignItems="center" spacing={4}>
                      <IconButton
                        sx={{
                          backgroundColor: COLORS.SECONDARY,
                          color: COLORS.WHITE,
                          width: 70,
                          height: 70,
                          ":hover": {
                            color: COLORS.SECONDARY,
                            border: `1px solid ${COLORS.SECONDARY}`,
                          },
                          transition: "0.5s ease all",
                        }}
                      >
                        <ArrowBack sx={{ fontSize: 30 }} />
                      </IconButton>
                      <IconButton
                        sx={{
                          backgroundColor: COLORS.SECONDARY,
                          color: COLORS.WHITE,
                          width: 70,
                          height: 70,
                          ":hover": {
                            color: COLORS.SECONDARY,
                            border: `1px solid ${COLORS.SECONDARY}`,
                          },
                          transition: "0.5s ease all",
                        }}
                      >
                        <ArrowForward sx={{ fontSize: 30 }} />
                      </IconButton>
                    </Stack>
                  </Stack>

                  <Swiper slidesPerView={2} spaceBetween={20}>
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
                <Grid size={4} sx={{ textAlign: "end", position: "relative" }}>
                  <Box sx={{ width: 300, margin: "auto", textAlign: "start" }}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 50,
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
                          fontSize: 50,
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
