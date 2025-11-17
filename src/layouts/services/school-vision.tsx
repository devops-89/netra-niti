"use client";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import ServiceHeading from "./components/service-heading";

import bot from "@/services/bot-1.png";
import Image from "next/image";
import IconList from "./components/Icon-list";
import { SCHOOL_VISION_LIST_DATA } from "@/assets/generic-data";
import { Done } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import SimpleButton from "@/components/widgets/simple-button";
import Link from "next/link";
const SchoolVision = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={8}
          direction={{ lg: "row", xs: "column-reverse" }}
        >
          <Grid
            size={{ lg: 5, xs: 12 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { lg: "flex-start", xs: "center" },
            }}
          >
            {/* <ServiceHeading label="" /> */}
            <Image
              src={bot}
              alt=""
              style={{ rotate: "20deg", width: phone ? "100%" : "" }}
            />
          </Grid>
          <Grid size={{ lg: 7, xs: 12 }}>
            <ServiceHeading label="School Vision Screening Programs" />

            <IconList
              data={SCHOOL_VISION_LIST_DATA}
              icon={<Done sx={{ fontSize: 20, color: COLORS.WHITE }} />}
              iconSx={{ width: 25, height: 25 }}
            />
            <Link href={"/contact-us"}>
              <SimpleButton
                label="Partner with Us for School Screenings"
                sx={{ fontWeight: 400 }}
              />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SchoolVision;
