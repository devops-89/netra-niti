"use client";

import { navbar_links } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "@/logo/logo.svg";
import Image from "next/image";
import ButtonWithIcon from "../widgets/button-with-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Close, DragHandle } from "@mui/icons-material";
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

  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: "sticky", top: { lg: 10, xs: 30 }, zIndex: 1200 }}>
      <Container maxWidth="lg">
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              backgroundColor: bgColor,
              height: "60px",
              borderRadius: "10rem",
              // px: 1,
              backdropFilter: "blur(10px)",
              transition: "background-color 0.25s ease",
              border: "3.5px solid #ffffff",
            }}
          >
            <Link href="/">
              <Image src={logo} alt="" width={150} style={{ marginLeft: "25px" }} />
            </Link>
            <Stack direction={"row"} alignItems={"center"} spacing={5} px={2}>
              {navbar_links.map((val, i) => (
                <Link
                  href={val.url}
                  key={i}
                  style={{
                    color:
                      pathname === val.url ? COLORS.SECONDARY : COLORS.BLACK,
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

              <Link href="/contact-us">
                <ButtonWithIcon
                  label="Contact us"
                  sx={{
                    backgroundColor: COLORS.PRIMARY_BUTTON,
                    color: COLORS.WHITE,
                    fontSize: 16,
                  }}
                />
              </Link>
            </Stack>
          </Stack>
        </Box>
        {/* mobile Header */}
        <Box sx={{ display: { lg: "none", xs: "block" } }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
              backgroundColor: bgColor,
              height: { lg: "65px", xs: "50px" },
              borderRadius: "10rem",
              px: 2,
              backdropFilter: "blur(10px)",
              transition: "background-color 0.25s ease",
              // width: "100%",
            }}
          >
            <Link href="/">
              <Image src={logo} alt="" width={100} />
            </Link>
            <IconButton onClick={() => setOpen(true)}>
              <DragHandle />
            </IconButton>
          </Stack>
        </Box>
      </Container>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ p: 4 }}
        >
          <Image src={logo} alt="" width={150} />
          <IconButton>
            <Close onClick={() => setOpen(false)} />
          </IconButton>
        </Stack>

        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack alignItems="center" justifyContent={"center"}>
            {" "}
            {navbar_links.map((val, i) => (
              <Link
                href={val.url}
                key={i}
                style={{
                  color: pathname === val.url ? COLORS.SECONDARY : COLORS.BLACK,
                  textDecoration: pathname === val.url ? "none" : "none",
                }}
                className={pathname === val.url ? "active_link" : ""}
                onClick={() => setOpen(false)}
              >
                <Typography
                  sx={{ fontSize: 60, fontWeight: 700, lineHeight: "100px" }}
                >
                  {val.label}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
