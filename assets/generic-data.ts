import {
  APPOINTMENT_CARD_PROPS,
  LIST,
  PREVENTION_CARD_PROPS,
  SERVICE_CARD_PROPS,
} from "@/utils/types";
import serviceImage1 from "@/homepage/about-us/image1.jpg";
import serviceImage2 from "@/homepage/about-us/vision-2.jpg";
import prevention1 from "@/homepage/preventing/2hours.jpg";
import prevention2 from "@/homepage/preventing/linits-screen.jpg";
import prevention3 from "@/homepage/preventing/safe-reading.jpg";
import prevention4 from "@/homepage/preventing/regular-eye.jpg";
import appointment1 from "@/homepage/appointment/schedule.png";
import appointment2 from "@/homepage/appointment/meet.png";
import appointment3 from "@/homepage/appointment/clear-plan.png";
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

export const PREVENTION_CARD_DATA: PREVENTION_CARD_PROPS[] = [
  {
    img: prevention1,
    heading: "2 Hours Outdoors Daily",
    serialNumber: "01",
    bgColor:
      "linear-gradient(180deg, rgba(0, 102, 204, 0.80) -6.31%, #0071B7 100%)",
  },
  {
    img: prevention2,
    heading: "Limit Screen Time",
    serialNumber: "02",
    bgColor: "linear-gradient(180deg, #4FE6F1 -6.31%, #1BB2C3 100%)",
  },
  {
    img: prevention3,
    heading: "Safe Reading Distance",
    serialNumber: "03",
    bgColor: "linear-gradient(180deg,rgb(219, 99, 62) -6.31%, #EE9539 100%)",
  },
  {
    img: prevention4,
    heading: "Regular Eye Check-ups",
    serialNumber: "04",
    bgColor:
      "linear-gradient(180deg,rgb(192, 141, 39) -6.31%,rgb(141, 106, 26) 100%)",
  },
];

export const APPROACH_LIST: LIST[] = [
  {
    label: "The Nxtgen Path to Clear Futures",
    value:
      "A guided journey that ensures every child moves from early detection to lifelong vision protection, giving them the clarity they need to learn, play, and succeed.",
  },
  {
    label: "From Detection to Protection – Our Care Journey",
    value:
      "We don’t stop at diagnosis. Our care model covers every step — from spotting risks early to personalized treatments and ongoing monitoring — so your child’s vision stays safe for the future.",
  },
  {
    label: "A Smarter Way to Safeguard Childhood Vision",
    value:
      "Combining advanced science, proven treatments, and lifestyle guidance, we provide a modern and holistic approach to keeping children’s eyesight healthy.",
  },
  {
    label: "Our 360° Vision Protection Model",
    value:
      "A complete, all-round system of care  detection, risk assessment, treatment, monitoring, and prevention designed to protect young eyes at every stage.",
  },
];

export const APPOINTMENT_CARD_DATA: APPOINTMENT_CARD_PROPS[] = [
  {
    img: appointment1,
    heading: "Schedule Your Visit",
    description:
      "Call us or book online choose in-person or virtual care at your convenience. We stay with you beyond the visit. Get reminders, follow-ups them.",
  },
  {
    img: appointment2,
    heading: "Meet Your Doctor",
    description:
      "During your appointment, we’ll take the time to listen, ask the right questions, and examine your concerns with care.",
  },
  {
    img: appointment3,
    heading: "Get a Clear Plan",
    description:
      "Whether it’s treatment, lab tests, lifestyle changes, or a referral you’ll leave with a personalized plan that makes sense.",
  },
];
