import { COLORS } from "./enum";
import { poppins } from "./fonts";

export const TEXTFIELD_STYLE = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #d7d7d7",
      padding: "14px",
      borderRadius: 5,
    },
    "&:hover fieldset": {
      borderColor: COLORS.PRIMARY,
    },
    "&.Mui-focused fieldset": {
      border: `1px solid ${COLORS.PRIMARY} !important`,
    },
  },
  "& label.Mui-focused": {
    color: COLORS.PRIMARY,
    top: 0,
    fontWeight: 600,
    fontFamily: poppins.style.fontFamily,
  },
  "& label": {
    fontFamily: poppins.style.fontFamily,
  },
};
