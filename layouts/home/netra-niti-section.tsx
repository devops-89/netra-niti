import { Box, Container, Grid } from "@mui/material";
import React from "react";
import bot from "@/homepage/about-us/netra-bot-2.png";
import Image from "next/image";
const NetraNitiSection = () => {
  return (
    <Box sx={{ pt: 0 }}>
      <Container>
        <Grid container>
          <Grid size={6}>
            <Image src={bot} alt="" style={{ rotate: " 20deg",width:"500px",height:"500px" }} />
          </Grid>
          <Grid size={6}>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NetraNitiSection;
