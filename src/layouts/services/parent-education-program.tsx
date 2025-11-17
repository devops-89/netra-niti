"use client";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import bot from "@/services/bot-3.png";
import Image from "next/image";
import ServiceHeading from "./components/service-heading";
import IconList from "./components/Icon-list";
import { PARENT_EDUCATION_PROGRAM } from "@/assets/generic-data";
import { Done } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
const ParentEducationProgram = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container direction={{ lg: "row", xs: "column-reverse" }}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image src={bot} alt="" style={{ width: phone ? "100%" : "" }} />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <ServiceHeading label="Parent Education Programs" />

            <IconList
              data={PARENT_EDUCATION_PROGRAM}
              icon={<Done sx={{ fontSize: 20, color: COLORS.WHITE }} />}
              iconSx={{ width: 30, height: 30 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ParentEducationProgram;
