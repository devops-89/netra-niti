import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ApproachList from "./components/approach-list";
import { APPROACH_LIST } from "@/assets/generic-data";
import approach from "@/homepage/little-girl.jpg";
import Image from "next/image";
const Approach = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ lg: 7, xs: 12 }}>
            <Typography
              sx={{
                fontSize: { lg: 45, xs: 30 },
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                color: COLORS.SECONDARY,
              }}
            >
              Our Unique{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: { lg: 45, xs: 30 },
                  fontFamily: fancake.style.fontFamily,
                  color: COLORS.PRIMARY,
                }}
              >
                {" "}
                Approach
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 20, xs: 16 },
                fontFamily: poppins.style.fontFamily,
              }}
            >
              We believe in a cycle of care that doesn’t just stop at diagnosis
            </Typography>
            <Box sx={{ mt: 2 }}>
              <ApproachList data={APPROACH_LIST} />
            </Box>
          </Grid>
          <Grid size={{ lg: 5, xs: 12 }}>
            <Image
              src={approach}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 30,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Approach;
