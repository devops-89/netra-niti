import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Circle } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { LIST } from "../../../utils/types";

interface dataProps {
  data: LIST[];
}

const ApproachList = ({ data }: dataProps) => {
  return (
    <Box>
      <List>
        {data.map((val, i) => (
          <ListItem sx={{ alignItems: "flex-start" }} key={i}>
            <ListItemAvatar sx={{ minWidth: 30, mt: 1 }}>
              <Circle sx={{ width: 10, height: 10 }} />
            </ListItemAvatar>
            <ListItemText
              primary={val.label}
              secondary={val.value}
              slotProps={{
                primary: {
                  sx: {
                    fontSize: 23,
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                  },
                },
                secondary: {
                  sx: {
                    fontSize: 17,
                    color: COLORS.TEXT_TERNARY_COLOR,
                    fontFamily: poppins.style.fontFamily,
                  },
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ApproachList;
