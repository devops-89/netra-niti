"use client";

import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { COUNT_UP_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
import React from "react";
import CountUp from "react-countup";

const CountUpCard = ({ number, suffix, title }: COUNT_UP_CARD_PROPS) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 60,
          fontFamily: poppins.style.fontFamily,
          color: COLORS.WHITE,
          fontWeight: 700,
          lineHeight: "81px",
          letterSpacing: "-2.55px",
        }}
      >
        <CountUp end={number} start={0} suffix={suffix} />
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          fontFamily: poppins.style.fontFamily,
          color: COLORS.WHITE,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CountUpCard;
