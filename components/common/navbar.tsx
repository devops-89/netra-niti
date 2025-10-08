"use client";

import { navbar_links } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "@/logo/logo.svg";
import Image from "next/image";
import ButtonWithIcon from "../widgets/button-with-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgColor = scrolled ? COLORS.HEADER_BG : COLORS.WHITE;
  const pathname = usePathname();

  return (
    <Box sx={{ position: "sticky", top: 10, zIndex: 1200 }}>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: bgColor,
            height: "65px",
            borderRadius: "10rem",
            px: 2,
            backdropFilter: "blur(10px)",
            transition: "background-color 0.25s ease",
          }}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={5}>
            {navbar_links.map((val, i) => (
              <Link
                href={val.url}
                key={i}
                style={{
                  color: pathname === val.url ? COLORS.SECONDARY : COLORS.BLACK,
                  textDecoration: pathname === val.url ? "none" : "none",
                }}
                className={pathname === val.url ? "active_link" : ""}
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 700, lineHeight: "15px" }}
                >
                  {val.label}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Image src={logo} alt="" width={180} />

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
