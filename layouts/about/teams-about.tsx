import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const TeamsAbout = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={6}>
            <Typography
              sx={{
                fontSize: 40,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                color: COLORS.PRIMARY,
              }}
            >
              Our Team of Experts
            </Typography>
            <Typography
              sx={{
                fontSize: 22,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.SECONDARY,
                fontWeight: 400,
                my: 2,
              }}
            >
              Dedicated professionals, <br /> committed to your eye health
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins.style.fontFamily,
                textAlign: "justify",
              }}
            >
              Our team of ophthalmologists brings together expertise in
              comprehensive eye care from regular check-ups and diagnosis to
              advanced treatments and surgeries. With a patient first approach,
              we ensure every individual receives personalized care to protect
              and enhance their vision.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamsAbout;
