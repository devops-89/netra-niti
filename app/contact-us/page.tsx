import ContactLayout from "@/layouts/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Netra Niti for Trusted Child Eye Care",
  description:
    "Find expert guidance on myopia prevention with proven strategies, routine eye care, and vision-friendly habits to keep your eyes healthy.",
  keywords: ["Eye care for kids", "Child vision screening"],
  alternates: {
    canonical: "/contact-us",
  },
};

const ContactUs = () => {
  return (
    <div>
      <ContactLayout />
    </div>
  );
};

export default ContactUs;
