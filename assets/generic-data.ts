import {
  APPOINTMENT_CARD_PROPS,
  CONTACT_CARD_PROPS,
  COUNT_UP_CARD_PROPS,
  ICON_LIST_PROPS,
  LIST,
  PREVENTION_CARD_PROPS,
  PROCESS_CARD_PROPS,
  SERVICE_CARD_PROPS,
  TESTIMONIAL_CARD_PROPS,
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
import profile from "@/homepage/testimonial/avatar.jpg";
import { YouTube, X, Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import process1 from "@/services/process-1.png";
import process2 from "@/services/process-2.png";
import process3 from "@/services/process-3.png";
import process4 from "@/services/process-4.png";
import arrowUp from "@/services/up-arrow.png";
import arrowDown from "@/services/down-arrow.png";
import service1 from "@/services/early-detection.png";
import service2 from "@/services/personalized.svg";
import service3 from "@/services/nationwide.svg";
import service4 from "@/services/360.svg";
import contact1 from "@/contact/phone.svg";
import contact2 from "@/contact/email.svg";
import contact3 from "@/contact/location.svg";
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

export const TESTIMONIAL_CARD_DATA: TESTIMONIAL_CARD_PROPS[] = [
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
  {
    img: profile,
    name: "John Anderson",
    designation: "CEO at Innovate Solutions",
    description:
      "Their attention to detail and creative design approach transformed our website into a visually stunning and highly functional platform. We’ve seen a 30% increase in traffic since the relaunch. I highly recommend them to anyone seeking professional web design services!",
  },
];

export const FOOTER_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
  {
    label: "About",
    url: "/about-us",
  },
];

export const FOOTER_SOCIAL_ICONS = [
  {
    icon: YouTube,
  },
  {
    icon: Facebook,
  },
  {
    icon: X,
  },
  {
    icon: Instagram,
  },
  {
    icon: LinkedIn,
  },
];

export const ABOUT_COUNTER_NUMBER: COUNT_UP_CARD_PROPS[] = [
  {
    number: 12,
    suffix: "+",
    title: "Blogs Published",
  },
  {
    number: 18,
    suffix: "K+",
    title: "Views on Finsweet",
  },
  {
    number: 30,
    suffix: "K+",
    title: "Total active Users",
  },
];

export const PROCESS_CARD_DATA: PROCESS_CARD_PROPS[] = [
  {
    img: process1,
    heading: "Early Detection",
    description:
      "Regular screenings in schools and clinics to catch vision problems before they progress",
    arrowImg: arrowUp,
  },
  {
    img: process2,
    heading: "Risk Assessment",
    description:
      "Evaluating lifestyle, genetics, and eye health to understand each child’s risk level.",
    arrowImg: arrowDown,
  },
  {
    img: process3,
    heading: "Personalized Treatment",
    description:
      "Tailor-made solutions using advanced lenses, atropine drops, or lifestyle programs.",
    arrowImg: arrowUp,
  },
  {
    img: process4,
    heading: "Continuous Monitoring",
    description:
      "Ongoing check-ups, digital tracking, and updates to ensure lasting protection",
  },
];

export const ICON_LIST_DATA: ICON_LIST_PROPS[] = [
  {
    label:
      "Low-dose Atropine drops (0.01%) – proven to slow myopia progression by 60%.",
  },
  {
    label: "Special spectacle lenses – designed to reduce eye elongation.",
  },
  {
    label:
      "Orthokeratology (night lenses) – reshapes the cornea temporarily to reduce progression.",
  },
  {
    label:
      "Lifestyle-based prescriptions – combining treatment with daily habits.",
  },
];

export const SCHOOL_VISION_LIST_DATA: ICON_LIST_PROPS[] = [
  {
    label: "Free/affordable screenings conducted in schools every 6 months.",
  },
  {
    label: "Detects myopia early often 2 years before routine check-ups.",
  },
  {
    label: "Teachers trained to spot early warning signs.",
  },
  {
    label: "Awareness seminars for parents during school events",
  },
];

export const WHY_SERVICES = [
  {
    img: service1,
    label: "Early detection compared to regular clinics.",
  },
  {
    img: service2,
    label: "Personalized, research-backed treatment plans.",
  },
  {
    img: service3,
    label: "Nationwide school and community outreach.",
  },
  {
    img: service4,
    label: "A 360° support system for both children and parents.",
  },
];

export const PARENT_EDUCATION_PROGRAM: ICON_LIST_PROPS[] = [
  {
    label:
      "Interactive sessions that teach parents practical ways to reduce screen time impact, encourage outdoor play, and build healthy vision habits at home.",
  },
  {
    label:
      "Easy-to-follow handbooks and tips on posture, study lighting, and safe reading distance to protect young eyes.",
  },
  {
    label: "Teachers trained to spot early warning signs.",
  },
  {
    label: "Awareness seminars for parents during school events",
  },
];

export const CONTACT_CARD_DATA: CONTACT_CARD_PROPS[] = [
  {
    img: contact1,
    title: "Call",
    description: "Phone number",
  },
  {
    img: contact2,
    title: "Email",
    description: "info@netraniti.com",
  },
  {
    img: contact3,
    title: "Location",
    description: "New Delhi",
  },
];
