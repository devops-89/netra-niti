"use client";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ServiceHeading from "./components/service-heading";
import Image from "next/image";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { WHY_SERVICES } from "@/assets/generic-data";
import bot from "@/services/bot-2.png";
const WhyChoose = () => {
  const phone = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container sx={{ mt: { lg: 10, xs: 0 } }}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <ServiceHeading label="Why Choose Our Services?" />

            <List>
              {WHY_SERVICES.map((val, i) => (
                <ListItem sx={{ alignItems: "flex-start" }} key={i}>
                  <ListItemAvatar sx={{ minWidth: 50, mr: 2 }}>
                    <Box
                      sx={{
                        width: 45,
                        height: 45,
                        backgroundColor: COLORS.SECONDARY,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "100%",
                      }}
                    >
                      <Image src={val.img} alt="" width={35} />
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontSize: { lg: 23, xs: 16 },
                          color: COLORS.TEXT_TERNARY_COLOR,
                          fontFamily: poppins.style.fontFamily,
                        }}
                      >
                        {val.label}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }} sx={{ textAlign: "end" }}>
            <Image
              src={bot}
              alt=""
              style={{ rotate: "7deg", width: phone ? "100%" : "" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChoose;
