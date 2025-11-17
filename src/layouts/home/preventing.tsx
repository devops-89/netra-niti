"use client";

import { COLORS } from "@/utils/enum";
import { fancake, poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Preventingcard from "./components/preventing-card";
import { PREVENTION_CARD_DATA } from "@/assets/generic-data";

const Preventing = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null
  );
  return (
    <Box sx={{ pt: 10 }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: "center",
            color: COLORS.SECONDARY,
            fontSize: { lg: 50, xs: 30 },
            fontWeight: 400,
            fontFamily: fancake.style.fontFamily,
            lineHeight: { lg: "56px", xs: "30px" },
          }}
        >
          Preventing Childhood Myopia
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            color: COLORS.TEXT_TERNARY_COLOR,
            fontSize: { lg: 25, xs: 20 },
            fontWeight: 400,
            fontFamily: poppins.style.fontFamily,
            lineHeight: { lg: "56px", xs: "30px" },
            mt: { xs: 2, lg: 0 },
          }}
        >
          Small steps today can protect your child’s vision for a lifetime
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            overflow: "hidden",
            mt: 2,
            flexDirection: { lg: "row", xs: "column" },
          }}
        >
          {PREVENTION_CARD_DATA.map((val, i) => (
            <Box
              key={i}
              sx={{
                flex: expandedCardIndex === i ? "1 1 100%" : "1 1 25%",
                transition: "flex 0.3s ease-in-out",
              }}
              onMouseEnter={() => setExpandedCardIndex(i)}
              onMouseLeave={() => setExpandedCardIndex(null)}
            >
              <Preventingcard
                img={val.img}
                heading={val.heading}
                serialNumber={val.serialNumber}
                bgColor={val.bgColor}
                isExpanded={expandedCardIndex === i}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Preventing;
