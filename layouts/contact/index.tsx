import { Box, Container, Grid } from "@mui/material";
import React from "react";
import ContactHeroSection from "./contact-hero-section";
import { COLORS } from "@/utils/enum";
import FormMap from "./map";
import Contactcard from "./components/contact-card";
import { CONTACT_CARD_DATA } from "@/assets/generic-data";

const ContactLayout = () => {
  return (
    <Box>
      <ContactHeroSection />
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            pt: 10,
          }}
        >
          <FormMap />
          <Grid container sx={{ mt: 5 }} spacing={4}>
            <Grid size={{ lg: 7, xs: 12 }} margin="auto">
              <Grid container>
                {CONTACT_CARD_DATA.map((val, i) => (
                  <Grid size={{ lg: 4, xs: 12 }} key={i}>
                    <Contactcard
                      img={val.img}
                      title={val.title}
                      description={val.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactLayout;
