import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import womenwithstethoscope from "@/about/women-with-stethoscope.png";
import doctor from "@/about/Subtract.png";
import Image from "next/image";
import DescriptionBox from "./components/description-box";
const TeamsAbout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container alignItems={"center"} spacing={5}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <DescriptionBox
              heading="Our Team of Experts"
              description="Our team of ophthalmologists brings together expertise in
              comprehensive eye care from regular check-ups and diagnosis to
              advanced treatments and surgeries. With a patient first approach,
              we ensure every individual receives personalized care to protect
              and enhance their vision."
              subHeading1="Dedicated professionals,"
              subHeading2="committed to your eye health"
            />
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Image
              src={womenwithstethoscope}
              alt=""
              style={{ width: "100%" }}
            />

            <Image
              src={doctor}
              alt=""
              style={{
                width: "100%",
                height: 250,
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamsAbout;
