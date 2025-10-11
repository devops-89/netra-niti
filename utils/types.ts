import { SxProps, Theme } from "@mui/material";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface SERVICE_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  description: string;
}

export interface PREVENTION_CARD_PROPS {
  img: StaticImageData;
  bgColor: string;
  heading: string;
  serialNumber: string;
  isExpanded?: boolean;
}

export interface LIST {
  label?: string;
  value?: string;
}

export interface APPOINTMENT_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  description: string;
}

export interface TESTIMONIAL_CARD_PROPS {
  img: StaticImageData;
  name: string;
  designation: string;
  description: string;
}

export interface COUNT_UP_CARD_PROPS {
  number: number;
  suffix: string;
  title: string;
}

export interface PROCESS_CARD_PROPS {
  img: StaticImageData;
  heading: string;
  description: string;
  arrowImg?: StaticImageData;
}

export interface ICON_LIST_PROPS {
  label: string;
}

export interface CONTACT_CARD_PROPS {
  img: StaticImageData;
  title: string;
  description: string;
}
