"use client";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import bot from "@/homepage/about-us/netra-bot-2.png";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { CalendarMonth } from "@mui/icons-material";
import Link from "next/link";
const NetraNitiSection = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ pt: 0 }}>
      <Container>
        <Grid
          container
          alignItems={"center"}
          direction={{ xs: "column-reverse", lg: "row" }}
        >
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={bot}
              alt=""
              style={{
                rotate: " 20deg",
                width: phone ? "100%" : "500px",
                height: phone ? "100%" : "500px",
              }}
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Typography
              sx={{
                color: COLORS.PRIMARY,
                textTransform: "uppercase",
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: "3px",
              }}
            >
              Netra Niti
            </Typography>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { lg: 45, xs: 25 },
                color: COLORS.SECONDARY,
                textTransform: "capitalize",
                fontWeight: 700,
                lineHeight: { lg: "69px", xs: "30px" },
              }}
            >
              A Silent Epidemic Threatening{" "}
              <Typography
                component={"span"}
                sx={{
                  fontFamily: fancake.style.fontFamily,
                  fontSize: { lg: 45, xs: 25 },
                  color: COLORS.PRIMARY,
                  textTransform: "capitalize",
                  fontWeight: 400,
                  lineHeight: { lg: "69px", xs: "30px" },
                }}
              >
                Young Eyes
              </Typography>{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 18, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.TEXT_TERNARY_COLOR,
                mt: { lg: 0, xs: 2 },
              }}
            >
              By 2050, nearly half of all Indian children may suffer from
              myopia. This silent epidemic increases the risk of cataracts,
              retinal detachment, and even blindness. The good news? With early
              detection and evidence-based care, we can slow or even stop its
              progression.
            </Typography>
            <Link href="/contact-us">
              <ButtonWithIcon
                label="Book an eye exam"
                sx={{
                  mt: 3,
                  backgroundColor: COLORS.PRIMARY_BUTTON,
                  color: COLORS.WHITE,
                  fontWeight: 600,
                  border: "none",
                }}
                iconBgColor={COLORS.WHITE}
                icon={<CalendarMonth sx={{ color: COLORS.PRIMARY }} />}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NetraNitiSection;
