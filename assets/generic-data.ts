import {
  APPOINTMENT_CARD_PROPS,
  BLOG_CARD_PROPS,
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
import prevention1 from "@/homepage/preventing/hours-daily.jpg";
import prevention2 from "@/homepage/preventing/limit-screen-time.jpg";
import prevention3 from "@/homepage/preventing/self-reading.jpg";
import prevention4 from "@/homepage/preventing/eye-checkup.jpg";
import appointment1 from "@/homepage/appointment/schedule.jpg";
import appointment2 from "@/homepage/appointment/meet.jpg";
import appointment3 from "@/homepage/appointment/clear-plan.jpg";
import profile from "@/homepage/testimonial/user_icon.svg";
import {
  YouTube,
  X,
  Facebook,
  Instagram,
  LinkedIn,
  Description,
} from "@mui/icons-material";
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
import blog1 from "@/blogs/blog1.png";
import blog2 from "@/blogs/blog2.png";
import blog3 from "@/blogs/blog3.png";
// import { title } from "process";
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
    label: "Blogs",
    url: "/blogs",
  },
];

export const services_data_section: SERVICE_CARD_PROPS[] = [
  {
    img: serviceImage1,
    heading: "School Vision Screenings",
    description:
      "We provide comprehensive vision screening services for schools to help identify potential eyesight issues at an early stage.",
  },
  {
    img: serviceImage2,
    heading: "Advanced Myopia Treatments",
    description:
      "Daily atropine + nightly Ortho-K = effective myopia control and all-day clear vision.",
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
    heading: "Meet Your Optometerists",
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
    name: "Ashish Jain",
    designation: "CEO & Founder, Edunext",
    description:
      "NxTGen Netra Niti is doing remarkable work in preventive eye care for children. Their scientific approach, advanced lenses, and personalized guidance truly make a difference. As a parent and an education leader, I highly appreciate their mission to protect children's vision and ensure a brighter, healthier future.",
  },
  {
    img: profile,
    name: "Dr. Dinesh Goel",
    designation: "Ophthalmologist",
    description:
      "NxTGen Netra Niti brings a truly progressive approach to managing childhood myopia. Their advanced diagnostic tools, modern lens technology, and child-centered care make a remarkable difference in long-term eye health. I fully support and recommend their initiative for parents seeking reliable and scientific vision solutions",
  },
  {
    img: profile,
    name: "Deepika Jain",
    designation: "Parent",
    description:
      "As a parent, I’m truly grateful to NxTGen Netra Niti. Their expert guidance and advanced myopia-control lenses have made a big difference in my child’s eyesight. I’ve seen real improvement and so much relief knowing my child’s vision is being protected with the right care.",
  },
  {
    img: profile,
    name: " Dr. Sadhna Anand",
    designation: "Pediatrician",
    description:
      "NxTGen Netra Niti is a much-needed initiative in today’s time. Their focus on scientific myopia control, early diagnosis, and child-friendly care is truly commendable. I confidently recommend their program to parents who want the best and most effective vision care for their children.",
  },
  {
    img: profile,
    name: "Dr. Mukesh Panwar",
    designation: "Pediatrician",
    description:
      "NxTGen Netra Niti is transforming the way we approach children’s eye health. Their evidence-based methods, modern lenses, and dedicated team make myopia control truly effective. I recommend their services to parents who want reliable, scientific, and child-focused eye care.",
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
    label: "Blogs",
    url: "/blogs",
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
    url: "https://www.youtube.com/@NxtGenNetraNiti",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/NxtGenNetraNiti/",
  },
  {
    icon: X,
    url: "https://x.com/NxtGenNetraNiti",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/nxtgennetraniti/",
  },
  {
    icon: LinkedIn,
    url: "https://www.linkedin.com/company/nxtgen-netra-niti/",
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

export const BLOG_CARD_DATA: BLOG_CARD_PROPS[] = [
  {
    img: blog1,
    title: "Healthy Eyes, Happy Childhood",
    description: "Why Early Eye Care Is Non-Negotiable.",
    slug: "healthy-eyes-happy-childhood",
    seoTitle:
      "NxtGen Netra-Niti: Kids Eye Checkup & Treatment for Nearsightedness in Children | Eye Care Solutions, Online Eye Test & Vision Therapy for Kids",
    seoDescription:
      "NxtGen Netra-Niti: Kids Eye Checkup & Treatment for Nearsightedness in Children with advanced eye care solutions. Book an online eye test for kids and start effective vision therapy for kids today.",
    seoKeywords:
      "NxtGen Netra-Niti, Kids eye checkup, Treatment for nearsightedness in children, Eye care solutions for children, Online eye test for kids, Vision therapy for kids.",
    details: {
      data: [
        {
          subTitle: "Why Early Eye Care Is Non-Negotiable",
          detailDescription: [
            {
              description:
                "A child’s eyesight develops rapidly in the early years, which is why a timely kids eye checkup is essential. Many parents delay a kids eye checkup, assuming problems will be obvious. In reality, most vision issues are silent. Regular kids eye checkup appointments help detect issues early and prevent long-term damage. Every kids eye checkup builds the foundation for healthy vision.",
            },
            {
              description:
                "A complete eye test for children is designed to evaluate visual clarity, eye coordination, and focusing ability. Unlike adults, an eye test for children must be conducted in a child-friendly environment. Repeating an eye test for childrenannually ensures consistent monitoring.",
            },
          ],
        },
        {
          subTitle: "Where Expertise Makes the Difference",
          detailDescription: [
            {
              description:
                "Choosing the best eye hospital matters when it comes to children. The best eye hospital combines technology, experience, and pediatric-focused care. Parents looking for the best eye hospital should prioritize specialization over convenience.",
            },
            {
              description:
                "A dedicated child eye hospital understands the emotional and developmental needs of children. At a trusted child eye hospital, exams are gentle and accurate. Most parents prefer a child eye hospital over general clinics because children feel more comfortable.",
            },
            {
              description:
                "The best pediatric eye hospital offers advanced diagnostics and long-term care. A best pediatric eye hospital is typically led by a top child eye specialist in India. Families across the country trust a best pediatric eye hospital for complex pediatric cases.",
            },
          ],
        },
        {
          subTitle: "Specialists Children Need",
          detailDescription: [
            {
              description:
                "An experienced eye doctor for kids knows how to examine young eyes without fear or pressure. Every eye doctor for kids uses child-friendly methods to ensure accuracy. Consulting an eye doctor for kids early prevents complications later.",
            },
            {
              description:
                "A trained pediatric optometrist plays a key role in early diagnosis. The pediatric optometrist evaluates vision development and prescribes suitable correction. Many treatment plans are guided by a pediatric optometrist working alongside specialists.",
            },
            {
              description:
                "Parents often search for a child eye specialist near me, but expertise matters more than distance. A qualified child eye specialist near me should always have pediatric experience.",
            },
          ],
        },
        {
          subTitle: "Managing Myopia Early",
          detailDescription: [
            {
              description:
                "Rising screen time has increased the need for myopia treatment for kids. Effective myopia treatment for kids focuses on slowing progression, not just correcting vision. Early myopia treatment for kids reduces long-term risks.",
            },
            {
              description:
                "A structured treatment for nearsightedness in children includes monitoring, lifestyle guidance, and corrective solutions. Modern treatment for nearsightedness in children is personalized for each child. Repeated evaluation ensures treatment for nearsightedness in children remains effective.",
            },
          ],
        },
        {
          subTitle: "Beyond Basic Correction",
          detailDescription: [
            {
              description:
                "Advanced eye care solutions for children go beyond spectacles. Comprehensive eye care solutions for children address eye coordination, focus, and comfort. The best eye care solutions for children are tailored to a child’s lifestyle.",
            },
            {
              description:
                "Many children need spectacles for children with weak eyesight for daily activities. Well-fitted spectacles for children with weak eyesight improve confidence and learning. Durable spectacles for children with weak eyesight are essential for active kids.",
            },
            {
              description:
                "In select cases, doctors may recommend the best contact lenses for kids. The best contact lenses for kids are safe when prescribed correctly. A specialist always supervises the use of best contact lenses for kids.",
            },
          ],
        },
        {
          subTitle: "Digital Life, Digital Care",
          detailDescription: [
            {
              description:
                "Online learning has made digital eye care for kids critical. Proper digital eye care for kids reduces strain and fatigue. Clinics now educate parents about digital eye care for kids routines.",
            },
            {
              description:
                "An online eye test for kids can help with basic screening. While useful, an online eye test for kids cannot replace clinical exams. Parents should treat an online eye test for kids as a starting point only.",
            },
          ],
        },
        {
          subTitle: "Therapy That Supports Learning",
          detailDescription: [
            {
              description:
                "Some children benefit from vision therapy for kids to improve coordination and focus. Structured vision therapy for kids enhances visual processing. Doctors may recommend vision therapy for kids for reading or concentration issues.",
            },
          ],
        },
        {
          subTitle: "A Complete Care Ecosystem",
          detailDescription: [
            {
              description:
                "A reliable children eye care clinic provides continuity of care. At a children eye care clinic, records are maintained long-term. Parents trust a children eye care clinic for routine and advanced care.",
            },
            {
              description:
                "Regular eye checkup for students supports academic performance. Schools increasingly recommend an annual eye checkup for students. A timely eye checkup for students prevents learning difficulties.",
            },
            {
              description:
                "Choosing the best doctor for kids eyesight ensures peace of mind. The best doctor for kids eyesight focuses on prevention and care. Parents rely on the best doctor for kids eyesight for long-term guidance.",
            },
            {
              description:
                "Ultimately, families choose the best eye care hospital for children for complete pediatric services. The best eye care hospital for children offers diagnosis, treatment, and follow-up under one roof. A reputed best eye care hospital for children protects vision at every stage.",
            },
          ],
        },
      ],
    },
  },
  {
    img: blog2,
    title: "Myopia Needs More Than Glasses",
    description: "Understanding Nearsightedness in Children",
    slug: "myopia-needs-more-than-glasses",
    seoTitle:
      "NxtGen Netra-Niti: Eye Doctor for Kids | Early Myopia Treatment for Kids & Best Pediatric Eye Hospital for Treatment for Nearsightedness in Children",
    seoDescription:
      "NxtGen Netra-Niti: Consult an eye doctor for kids for early myopia treatment for kids at the best pediatric eye hospital. Get expert treatment for nearsightedness in children with advanced care.",
    seoKeywords:
      "NxtGen Netra-Niti, Eye Doctor for Kids, Early Myopia Treatment for Kids, Best Pediatric Eye Hospital, Treatment for Nearsightedness in Children",
    details: {
      data: [
        {
          subTitle: "Understanding Nearsightedness in Children",
          detailDescription: [
            {
              description:
                "Myopia, or nearsightedness, causes distant objects to appear blurry. It is one of the fastest-growing vision conditions among children today. Reduced outdoor activity and increased screen exposure have significantly contributed to this rise.",
            },
            {
              description:
                "A structured treatment for nearsightedness in children is essential to prevent rapid progression.",
            },
          ],
        },
        {
          subTitle: "Why Early Treatment Is Critical",
          detailDescription: [
            {
              description:
                "Without timely intervention, myopia can worsen quickly during the growing years. Early myopia treatment for kids helps slow progression and reduce the risk of future eye complications.",
            },
            {
              description:
                "This is why regular eye checkup for students is strongly recommended, even if no visible symptoms are present.",
            },
          ],
        },
        {
          subTitle: "Modern Myopia Management",
          detailDescription: [
            {
              description:
                "At a specialized child eye hospital, myopia care goes beyond basic correction. Treatment options may include:",
              list: [
                {
                  label:
                    "Specialized spectacles for children with weak eyesight",
                },
                {
                  label: "Controlled use of the best contact lenses for kids",
                },
                {
                  label: "Lifestyle modifications and screen-time guidance",
                },
                {
                  label: "Clinical monitoring by a skilled eye doctor for kids",
                },
              ],
            },
            {
              description:
                "Each treatment plan is personalized to the child’s age, lifestyle, and visual needs.",
            },
          ],
        },
        {
          subTitle: "The Role of Parents",
          detailDescription: [
            {
              description:
                "Parents play a vital role in managing myopia. Encouraging outdoor play, limiting screen time, and ensuring routine visits to a children eye care clinic help maintain eye health.",
            },
          ],
        },
        {
          subTitle: "Expert Care Makes the Difference",
          detailDescription: [
            {
              description:
                "Choosing the best pediatric eye hospital ensures access to specialists who focus exclusively on children’s vision. Hospitals guided by a top child eye specialist in India offer comprehensive, research-backed myopia management.",
            },
          ],
        },
      ],
    },
  },

  {
    img: blog3,
    title: "Screens, School, and Young Eyes",
    description: "The Digital Shift",
    slug: "screens-school-and-young-eyes",
    seoTitle:
      "NxtGen Netra-Niti: Online Eye Test for Kids | Vision Therapy for Kids, Digital Eye Care for Kids & Eye Test for Children at the Best Eye Hospital",
    seoDescription:
      "NxtGen Netra-Niti: Get an online eye test for kids with expert vision therapy for kids. Access digital eye care for kids and a complete eye test for children at the best eye hospital.",
    seoKeywords:
      "NxtGen Netra-Niti, Online eye test for kids, Vision therapy for kids, Digital eye care for kids, Eye test for children, Best eye hospital",
    details: {
      data: [
        {
          subTitle: "The Digital Shift",
          detailDescription: [
            {
              description:
                "Children today spend more time on screens than ever before. Online learning, homework, and entertainment have made digital eye care for kids a growing necessity.",
            },
            {
              description:
                "Excessive screen use can lead to eye strain, dryness, headaches, and difficulty focusing.",
            },
          ],
        },
        {
          subTitle: "Warning Signs of Digital Eye Strain",
          detailDescription: [
            {
              description: "Symptoms include:",
              list: [
                {
                  label: "Tired or watery eyes",
                },
                {
                  label: "Blurred vision",
                },
                {
                  label: "Reduced attention span",
                },
                {
                  label: "Neck and shoulder discomfort",
                },
              ],
            },
            {
              description:
                "An early eye test for children can determine whether digital habits are affecting vision.",
            },
          ],
        },
        {
          subTitle: "Online Tests vs Clinical Exams",
          detailDescription: [
            {
              description:
                "An online eye test for kids may help identify basic vision concerns, but it cannot replace a complete clinical examination. Only a qualified pediatric optometrist can assess eye health accurately and recommend proper treatment.",
            },
          ],
        },
        {
          subTitle: "Vision Therapy and Digital Stress",
          detailDescription: [
            {
              description:
                "Vision therapy for kids can help improve eye coordination, focusing ability, and visual endurance—especially for children struggling with prolonged screen exposure.",
            },
            {
              description:
                "This therapy is often recommended as part of a broader eye care solution for children, under expert supervision.",
            },
          ],
        },
        {
          subTitle: "Why Pediatric Hospitals Are Best",
          detailDescription: [
            {
              description:
                "A specialized child eye hospital offers structured care designed for young eyes. Parents seeking the best doctor for kids eyesight should prioritize hospitals known for pediatric expertise rather than general eye care centers.",
            },
            {
              description:
                "The best eye hospital for children combines technology, experience, and empathy.",
            },
          ],
        },
        {
          subTitle: "A Clearer Path Forward",
          detailDescription: [
            {
              description:
                "Healthy vision is essential for academic success and emotional confidence. Regular checkups, expert guidance, and mindful screen habits ensure children grow with strong, comfortable eyesight.",
            },
            {
              description:
                "Choosing the best eye care hospital for children today protects their vision for years to come.",
            },
          ],
        },
      ],
    },
  },

  // {
  //   img: prevention4,
  //   title: "Making Ideas Happen",
  //   description: "Where imagination meets effort, turning concepts into meaningful creations.",
  //   category: "Myopia Control",

  // },
  // {
  //   img: appointment1,
  //   title: "Screen Time and Eye Health",
  //   description: "Understanding the impact of digital devices on children's vision and how to protect their eyes.",
  //   category: "Digital Health",

  // },
  // {
  //   img: appointment2,
  //   title: "Early Signs of Vision Problems",
  //   description: "Learn to identify early warning signs that your child may need an eye examination.",
  //   category: "Prevention",

  // },
  // {
  //   img: appointment3,
  //   title: "Outdoor Play Benefits",
  //   description: "How spending time outdoors can significantly reduce the risk of myopia in children.",
  //   category: "Lifestyle",

  // },
  // {
  //   img: serviceImage1,
  //   title: "Understanding Myopia",
  //   description: "A comprehensive guide to understanding myopia progression and available treatment options.",
  //   category: "Education",

  // },
  // {
  //   img: serviceImage2,
  //   title: "Ortho-K Lenses Explained",
  //   description: "Everything you need to know about overnight orthokeratology lenses for myopia control.",
  //   category: "Treatment",

  // },
  // {
  //   img: prevention1,
  //   title: "Nutrition for Healthy Eyes",
  //   description: "Essential nutrients and foods that support optimal eye health in growing children.",
  //   category: "Nutrition",

  // },
  // {
  //   img: prevention2,
  //   title: "School Vision Screening",
  //   description: "Why regular school vision screenings are crucial for early detection of eye problems.",
  //   category: "Screening",

  // },
  // {
  //   img: prevention3,
  //   title: "Atropine Drops for Myopia",
  //   description: "How low-dose atropine drops can effectively slow down myopia progression in children.",
  //   category: "Treatment",

  // },
];
