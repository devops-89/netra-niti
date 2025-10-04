import { Box, Typography } from "@mui/material";
import React from "react";
import image1 from "@/homepage/appointment/schedule.png";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { APPOINTMENT_CARD_PROPS } from "@/utils/types";
const AppointmentCard = ({
  img,
  heading,
  description,
}: APPOINTMENT_CARD_PROPS) => {
  return (
    <Box>
      <Image
        src={img}
        alt=""
        style={{
          objectFit: "cover",
          width: "100%",
          height: 300,
          borderRadius: "12px",
        }}
      />

      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.00)) 0%, rgba(255, 255, 255, 1), #FFF) 11%, varrgba(255, 255, 255, 1), #FFF) 100%)",
          padding: "20px ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 22,
            fontFamily: poppins.style.fontFamily,
            mb: 1,
            textAlign: "center",
            color: COLORS.SECONDARY,
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: 17,
            fontFamily: poppins.style.fontFamily,
            textAlign: "center",
            color: COLORS.SECONDARY,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default AppointmentCard;
