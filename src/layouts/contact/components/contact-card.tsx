import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import phone from "@/contact/phone.svg";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { COLORS } from "@/utils/enum";
import { CONTACT_CARD_PROPS } from "@/utils/types";
const Contactcard = ({ img, title, description }: CONTACT_CARD_PROPS) => {
  return (
    <Box>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Image src={img} alt="" width={40} />
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={description}
            primaryTypographyProps={{
              fontFamily: poppins.style.fontFamily,
              fontSize: 20,
            }}
            secondaryTypographyProps={{
              fontFamily: poppins.style.fontFamily,
              fontSize: 16,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Contactcard;
