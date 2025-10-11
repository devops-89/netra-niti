import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AppointmentCard from "./components/appointment-card";
import { APPOINTMENT_CARD_DATA } from "@/assets/generic-data";
import SimpleButton from "@/components/widgets/simple-button";
import Link from "next/link";

const SupporativeCare = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            size={{ lg: 8, xs: 12 }}
            sx={{ margin: "auto", textAlign: "center" }}
          >
            <Typography
              sx={{
                fontSize: { lg: 60, xs: 35 },
                fontFamily: poppins.style.fontFamily,
                textAlign: "center",
                letterSpacing: "-0.916px",
                color: COLORS.SECONDARY,
                fontWeight: 900,
              }}
            >
              Simple, Supportive Care Every Step of the Way
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 20, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                textAlign: "center",
                // letterSpacing: "-0.916px",
                color: COLORS.TEXT_TERNARY_COLOR,
                fontWeight: 400,
                lineHeight: "30px",
                mt: 1,
              }}
            >
              At my practice, I provide a full range of medical services
              designed to support your health at every stage of life. Whether
              you're here for a routine.
            </Typography>
            <Link href="/contact-us">
              <SimpleButton label="Book An Appointment" sx={{ mt: 3 }} />
            </Link>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ mt: 7 }}>
          {APPOINTMENT_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 4, xs: 12 }} key={i}>
              <AppointmentCard
                img={val.img}
                heading={val.heading}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SupporativeCare;
