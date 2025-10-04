import { StaticImageData } from "next/image";

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
