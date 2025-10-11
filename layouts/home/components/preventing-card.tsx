import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { PREVENTION_CARD_PROPS } from "@/utils/types";
import { Box, Typography } from "@mui/material";
const Preventingcard = ({
  img,
  heading,
  serialNumber,
  bgColor,
  isExpanded = false,
}: PREVENTION_CARD_PROPS) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img.src})`,
        height: {lg:"600px",xs:"500px"},
        backgroundPosition: isExpanded ? "center" : "center",
        backgroundSize: isExpanded ? "cover" : "cover",
        borderRadius: "16px",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        transform: isExpanded ? "scale(1.02)" : "scale(1)",
        boxShadow: isExpanded ? "0 10px 30px rgba(0,0,0,0.3)" : "none",
        zIndex: isExpanded ? 10 : 1,
        backgroundRepeat: "no-repeat",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: bgColor,
          height: "100%",
          opacity: isExpanded ? "0.8" : "0.8",
          borderRadius: "16px",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <Box
          sx={{
            width: 3,
            height: 50,
            background: COLORS.WHITE,
            margin: "auto",
          }}
        ></Box>

        <Typography
          sx={{
            color: COLORS.WHITE,
            rotate: "-270deg",
            mt:isExpanded?  "300px"  : "140px",
            fontFamily: poppins.style,
            fontSize: 18,
          }}
        >
          {heading}
        </Typography>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontSize: 80,
            textAlign: "center",
            WebkitTextStrokeColor: COLORS.WHITE,
            WebkitTextStrokeWidth: "1.50px",
            color: COLORS.TRANSPARENT,
            position: "absolute",
            bottom: 0,

            width: "100%",
            fontWeight: 600,
          }}
        >
          {serialNumber}
        </Typography>
      </Box>
    </Box>
  );
};

export default Preventingcard;
