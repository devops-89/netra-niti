import ContactLayout from "@/layouts/contact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Netra Niti – Get Expert Child Eye Care Support",
  description:
    "Reach out to Netra Niti for inquiries, appointments, or guidance on pediatric eye care, myopia management, and quality eyewear for children.",
};

const ContactUs = () => {
  return (
    <div>
      <ContactLayout />
    </div>
  );
};

export default ContactUs;
