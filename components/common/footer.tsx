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
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, pt: { lg: 20, xs: 10 } }}>
      <Container>
        <Grid container>
          <Grid size={{ lg: 10, xs: 12 }} margin="auto">
            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"center"}
            >
              {FOOTER_LINKS.map((val, i) => (
                <Link
                  href={val.url}
                  style={{ textDecoration: "none", color: COLORS.BLACK }}
                  key={i}
                >
                  <Typography
                    key={i}
                    sx={{
                      fontSize: { lg: 18, xs: 15 },
                      color: COLORS.BLACK,
                      fontFamily: poppins.style.fontFamily,
                    }}
                  >
                    {val.label}
                  </Typography>
                </Link>
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
                <IconButton key={i} LinkComponent={"a"} href={val.url}>
                  <val.icon sx={{ color: COLORS.BLACK }} />
                </IconButton>
              ))}
            </Stack>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: { lg: 18, xs: 16 },
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
