import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Button, Box, Theme, SxProps, ButtonProps } from "@mui/material";
import Link from "next/link";
import React from "react";

const SimpleButton = ({
  label,
  sx,
  ...props
}: {
  label: string;
  sx?: SxProps<Theme>;
} & Omit<ButtonProps, "sx">) => {
  return (
    <Button
      {...props}
      sx={{
        borderRadius: "10rem",
        background: COLORS.PRIMARY_BUTTON,
        color: COLORS.WHITE,
        fontFamily: poppins.style.fontFamily,
        border: "2px solid #ffddd5",
        fontWeight: 500,
        textTransform: "initial",
        padding: "12px 24px",
        fontSize: { lg: 16, xs: 12},
        overflow: "hidden",
        transition: "all 0.3s ease",

        "&:hover .text-track": {
          transform: "translateY(-50%)",
        },
        ...sx,
      }}
    >
      {/* Text Swap Animation */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "1.5rem",
        }}
      >
        <Box
          className="text-track"
          sx={{
            display: "flex",
            flexDirection: "column",
            transition: "transform 0.4s ease",
          }}
        >
          {[0, 1].map((idx) => (
            <Box
              key={idx}
              sx={{
                height: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Box>
    </Button>
  );
};

export default SimpleButton;
