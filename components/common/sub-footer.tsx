import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { CalendarMonth } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const SubFooter = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={10} margin="auto">
            <Typography
              sx={{
                fontSize: 50,
                fontFamily: poppins.style.fontFamily,
                textAlign: "center",
                fontWeight: 900,
                lineHeight: "72px",
                color: COLORS.SECONDARY,
              }}
            >
              Take the first step towards a better
            </Typography>
            <Typography
              sx={{
                fontSize: 50,
                fontFamily: fancake.style.fontFamily,
                textAlign: "center",
                fontWeight: 900,
                lineHeight: "72px",
                color: COLORS.PRIMARY,
              }}
            >
              Vision today!
            </Typography>
            <Typography
              sx={{
                fontSize: 18,
                fontFamily: poppins.style.fontFamily,
                textAlign: "center",
                fontWeight: 400,
                color: COLORS.TEXT_TERNARY_COLOR,
                my: 3,
              }}
            >
              Book your appointment now and experience the difference in
              personalized eye care!{" "}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <ButtonWithIcon
                icon={<CalendarMonth />}
                label="Schedule Your Appointment"
                sx={{ backgroundColor: COLORS.PRIMARY, color: COLORS.WHITE }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SubFooter;
