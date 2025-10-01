import { Box, Typography } from "@mui/material";
import React from "react";
import image1 from "@/homepage/about-us/image1.jpg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import ButtonWithIcon from "@/components/widgets/button-with-icon";
import { SERVICE_CARD_PROPS } from "@/utils/types";
const ServiceCard = ({ img, heading, description }: SERVICE_CARD_PROPS) => {
  return (
    <Box sx={{ mt: 2, width: 350 }}>
      <Image
        src={img}
        alt=""
        // width={350}
        style={{
          objectFit: "cover",
          borderRadius: "44px",
          width: "100%",
          height: "100%",
        }}
      />
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 500,
          lineHeight: "38.4px",
          color: COLORS.TEXT_SECONDARY_COLOR,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: 17,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 400,
          lineHeight: "30px",
          color: COLORS.TEXT_TERNARY_COLOR,
          mt: 2,
        }}
      >
        {description}
      </Typography>
      <ButtonWithIcon
        label="Book Now"
        iconPosition="right"
        sx={{
          backgroundColor: COLORS.PRIMARY_BUTTON,
          color: COLORS.WHITE,
          mt: 2,
        }}
      />
    </Box>
  );
};

export default ServiceCard;
