import { SERVICE_CARD_PROPS } from "@/utils/types";
import serviceImage1 from "@/homepage/about-us/image1.jpg";
import serviceImage2 from "@/homepage/about-us/vision-2.jpg";
export const navbar_links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Blog",
    url: "/blog",
  },
];

export const services_data_section: SERVICE_CARD_PROPS[] = [
  {
    img: serviceImage1,
    heading: "School Vision Screenings",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
  },
  {
    img: serviceImage2,
    heading: "Advanced Myopia Treatments",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
  },
];
