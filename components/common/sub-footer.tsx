import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { CalendarMonth } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const SubFooter = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin="auto">
            <Typography
              sx={{
                fontSize: { lg: 50, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                textAlign: "center",
                fontWeight: 900,
                lineHeight: { lg: "72px", xs: "30px" },
                color: COLORS.SECONDARY,
              }}
            >
              Take the first step towards a better
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 50, xs: 30 },
                fontFamily: fancake.style.fontFamily,
                textAlign: "center",
                fontWeight: 900,
                lineHeight: { lg: "72px", xs: "30px" },
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
              <Link href="/contact-us">
                <ButtonWithIcon
                  icon={<CalendarMonth />}
                  label="Schedule Your Appointment"
                  sx={{ backgroundColor: COLORS.PRIMARY, color: COLORS.WHITE }}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SubFooter;
