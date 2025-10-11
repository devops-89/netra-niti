import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Typography } from "@mui/material";
import React from "react";

interface DESCRIPTION_PROPS {
  heading: string;
  subHeading1: string;
  subHeading2: string;
  description: string;
}
const DescriptionBox = ({
  heading,
  subHeading1,
  subHeading2,
  description,
}: DESCRIPTION_PROPS) => {
  return (
    <div>
      <Typography
        sx={{
          fontSize: { lg: 45, xs: 30 },
          fontFamily: poppins.style.fontFamily,
          fontWeight: 700,
          color: COLORS.PRIMARY,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 25, xs: 16 },
          fontFamily: poppins.style.fontFamily,
          color: COLORS.SECONDARY,
          fontWeight: 400,
          mt: 2,
        }}
      >
        {subHeading1}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 25, xs: 16 },
          fontFamily: poppins.style.fontFamily,
          color: COLORS.SECONDARY,
          fontWeight: 400,
          mb: 2,
        }}
      >
        {subHeading2}
      </Typography>
      <Typography
        sx={{
          fontSize: { lg: 17, xs: 16 },
          fontFamily: poppins.style.fontFamily,
          textAlign: "justify",
          color: COLORS.TEXT_TERNARY_COLOR,
        }}
      >
        {description}
      </Typography>
    </div>
  );
};

export default DescriptionBox;
