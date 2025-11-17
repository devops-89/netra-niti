import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import profile from "@/homepage/testimonial/avatar.jpg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { TESTIMONIAL_CARD_PROPS } from "@/utils/types";
const TestimonialCard = ({
  img,
  name,
  designation,
  description,
}: TESTIMONIAL_CARD_PROPS) => {
  return (
    <Box>
      <Card
        sx={{
          padding: "30px",
          display: "flex",
          alignItems: "flex-start",
          boxShadow: "0 0 24.644px 0 rgba(0, 0, 0, 0.05)",
          gap: 2,
          borderRadius: "15px",
          flexDirection: "column",
          background: COLORS.WHITE,
        }}
      >
        <Stack direction={"row"} alignItems="center" spacing={3}>
          <Avatar sx={{ width: 60, height: 60 }}>
            <Image
              src={img}
              alt=""
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontSize: 24,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.SECONDARY,
                fontWeight: 800,
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.TEXT_TERNARY_COLOR,
                fontWeight: 500,
              }}
            >
              {designation}
            </Typography>
          </Box>
        </Stack>
        <Typography
          sx={{
            fontSize: 16,
            fontFamily: poppins.style.fontFamily,
            fontWeight: 400,
            lineHeight: "25px",
          }}
        >
          "{description}"
        </Typography>
      </Card>
    </Box>
  );
};

export default TestimonialCard;
