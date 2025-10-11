import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { ICON_LIST_PROPS } from "@/utils/types";
import { Done } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import React, { ReactNode } from "react";

interface ICON_LIST_DATA_PROPS {
  data: ICON_LIST_PROPS[];
  iconSx: SxProps<Theme>;
  icon: ReactNode;
}

const IconList = ({ data, iconSx, icon }: ICON_LIST_DATA_PROPS) => {
  return (
    <List>
      {data.map((val, i) => (
        <ListItem alignItems="flex-start" key={i}>
          <ListItemAvatar sx={{ minWidth: 35 }}>
            <Box
              sx={{
                backgroundColor: COLORS.SECONDARY,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                ...iconSx,
              }}
            >
              {icon}
            </Box>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{
                  fontSize: { lg: 20, xs: 16 },
                  color: COLORS.TEXT_TERNARY_COLOR,
                  fontFamily: poppins.style.fontFamily,
                }}
              >
                {val.label}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default IconList;
