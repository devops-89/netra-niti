import { COLORS } from "@/utils/enum";
import { Box, Typography } from "@mui/material";
import React from "react";
import spy from "@/services/process-1.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { PROCESS_CARD_PROPS } from "@/utils/types";
const ProcessCard = ({ img, heading, description }: PROCESS_CARD_PROPS) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Box
        sx={{
          backgroundColor: COLORS.WHITE,
          stroke: COLORS.WHITE,
          strokeWidth: "10px",
          width: 100,
          height: 100,
          boxShadow:
            "-4px 4px 30px 0 rgba(255, 255, 255, 0.50) inset, 4px 4px 30px 0 #D1D9E6 inset",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          borderBottomRightRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Image src={img} alt="" width={50} />
      </Box>
      <Typography
        component="h3"
        sx={{
          fontFamily: poppins.style.fontFamily,
          textAlign: "center",
          fontSize: 20,
          fontWeight: 500,
          textTransform: "capitalize",
          color: COLORS.SECONDARY,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontFamily: poppins.style.fontFamily,
          textAlign: "center",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: "27px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default ProcessCard;
