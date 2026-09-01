import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Typography } from "@mui/material";
import React from "react";

const ServiceHeading = ({ label }: { label: string }) => {
  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontSize: { lg: 55, xs: 30 },
          fontFamily: poppins.style.fontFamily,
          color: COLORS.SECONDARY,
          fontWeight: 600,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ServiceHeading;
