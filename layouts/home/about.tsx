import { COLORS } from "@/utils/enum";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import line from "@/homepage/line_about.png";
const About = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{ backgroundColor: COLORS.WHITE, borderRadius: "30px", px: 3 }}
        >
          <Box
            sx={{
              backgroundImage: `url(${line.src})`,
              height: "105vh",
              backgroundSize: "contain",
              backgroundPosition: "right center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Grid container>
              <Grid size={8}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent="space-between"
                >
                  <Typography>We always provide the best service</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
