"use client";
import { FOOTER_SOCIAL_ICONS } from "@/assets/generic-data";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Home } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 10, lg: 15 },
        my: { lg: 5 },
        textAlign: "center",
      }}
    >
      <Container>
        <Grid container justifyContent="center">
          <Grid size={{xs:12,md:8,lg:6}}>
            <Typography
              component="h1"
              sx={{
                fontSize: { lg: 150, xs: 100 },
                fontFamily: fancake.style.fontFamily,
                color: COLORS.PRIMARY,
                lineHeight: 1,
                mb: 2,
              }}
            >
              404
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { lg: 30, xs: 24 },
                fontFamily: poppins.style.fontFamily,
                color: COLORS.WHITE,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Oops! Page Not Found
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: 18, xs: 16 },
                fontFamily: poppins.style.fontFamily,
                color: "rgba(255, 255, 255, 0.7)",
                mb: 5,
              }}
            >
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </Typography>

            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <ButtonWithIcon
                label="Back to Home"
                sx={{
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  fontWeight: 600,
                  px: 4,
                }}
                icon={<Home sx={{ color: COLORS.PRIMARY }} />}
                iconBgColor={COLORS.WHITE}
              />
            </Link>

            <Box sx={{ mt: 8 }}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontFamily: poppins.style.fontFamily,
                  color: COLORS.WHITE,
                  mb: 2,
                  fontWeight: 500,
                }}
              >
                Follow us on
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={2}
              >
                {FOOTER_SOCIAL_ICONS.map((val, i) => (
                  <IconButton
                    key={i}
                    component="a"
                    href={val.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      backgroundColor: COLORS.WHITE,
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                      "&:hover": {
                        backgroundColor: COLORS.PRIMARY,
                        color: COLORS.WHITE,
                        "& svg": {
                          color: COLORS.WHITE,
                        },
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <val.icon sx={{ color: COLORS.PRIMARY, transition: "all 0.3s ease" }} />
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
