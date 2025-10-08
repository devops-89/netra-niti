import { FOOTER_LINKS, FOOTER_SOCIAL_ICONS } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, pt: 20 }}>
      <Container>
        <Grid container>
          <Grid size={10} margin="auto">
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
            >
              {FOOTER_LINKS.map((val, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontSize: 18,
                    color: COLORS.BLACK,
                    fontFamily: poppins.style.fontFamily,
                  }}
                >
                  {val.label}
                </Typography>
              ))}
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              spacing={3}
              sx={{ my: 5 }}
            >
              {FOOTER_SOCIAL_ICONS.map((val, i) => (
                <IconButton key={i}>
                  <val.icon sx={{ color: COLORS.BLACK }} />
                </IconButton>
              ))}
            </Stack>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: 18,
                fontWeight: 500,
                fontFamily: poppins.style.fontFamily,
                lineHeight: "25px",
              }}
            >
              NETRA-NITI@ 2025. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
