import React, { ReactElement, ReactNode } from "react";
import { Box, Button, ButtonProps, SxProps, Theme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";

const ButtonWithIcon = ({
  label,
  width,
  icon,
  iconBgColor = COLORS.WHITE,
  iconSx,
  iconPosition = "left",
  sx,
  ...props
}: {
  label: ReactNode;
  width?: string | number;
  icon?: ReactElement<any>;
  iconBgColor?: string;
  iconSx?: SxProps<Theme>;
  iconPosition?: "left" | "right";
  sx?: SxProps<Theme>;
} & Omit<ButtonProps, "sx">) => {
  const renderedIcon = icon ? (
    React.cloneElement(
      icon as ReactElement<any>,
      {
        sx: {
          color: COLORS.PRIMARY,
          fontSize: 20,
          ...(icon.props as any)?.sx,
          ...iconSx,
        },
      } as any
    )
  ) : (
    <ArrowForward sx={{ color: COLORS.PRIMARY, fontSize: 20 }} />
  );
  return (
    <Button
      {...props}
      sx={{
        borderRadius: "10rem",
        border: "2px solid #ffddd5",
        padding: " 5px 15px 5px 5px",
        fontWeight: 700,
        fontSize: { lg: 18, xs: 12 },
        fontFamily: poppins.style.fontFamily,
        transition: "all 0.3s ease",
        textTransform: "none",
        width: width,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",

        "&:hover .text-track": {
          transform: "translateY(-50%)",
        },
        "&:hover .icon-track": {
          transform: "translateY(-25%)",
        },
        "&:hover .arrow-rotate": {
          transform: "rotate(0deg) scale(1.1)",
        },
        ".icon-track": {
          transform: "translateY(25%)",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Icon container */}
        <Box
          sx={{
            backgroundColor: iconBgColor,
            borderRadius: "50%",
            width: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 3,
            overflow: "hidden",
            position: "absolute",
            left: iconPosition === "left" ? 0 : undefined,
            right: iconPosition === "right" ? 0 : undefined,
          }}
        >
          <Box
            className="icon-track"
            sx={{
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.4s ease",
              willChange: "transform",
            }}
          >
            {[0, 1].map((idx) => (
              <Box
                key={idx}
                sx={{
                  width: "100%",
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  className="arrow-rotate"
                  sx={{
                    width: 22,
                    height: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  {renderedIcon}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Text swap viewport */}
        <Box
          className="text-viewport"
          sx={{
            position: "relative",
            overflow: "hidden",
            height: "2.5rem",
            minWidth: "11ch",
            paddingLeft: iconPosition === "left" ? "3.5rem" : 0,
            paddingRight: iconPosition === "right" ? "3.5rem" : 0,
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
                  height: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="span"
                  sx={{ lineHeight: "2.5rem", textAlign: "center" }}
                >
                  {label}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

export default ButtonWithIcon;
