import { navbar_links } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "@/logo/logo.png";
import Image from "next/image";
import ButtonWithIcon from "./button-with-icon";
const Navbar = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: COLORS.HEADER_BG,
            height: "65px",
            borderRadius: "62px",
            px: 2,
            backdropFilter: "blur(10px)",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={5}>
            {navbar_links.map((val, i) => (
              <Typography
                sx={{ fontSize: 16, fontWeight: 700, lineHeight: "15px" }}
                key={i}
              >
                {val.label}
              </Typography>
            ))}
          </Stack>
          <Image src={logo} alt="" width={250} />

          <ButtonWithIcon
            label="Contact us"
            sx={{
              backgroundColor: COLORS.PRIMARY_BUTTON,
              color: COLORS.WHITE,
              fontSize: 16,
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
