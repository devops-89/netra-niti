import HomePageLayout from "@/layouts/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netra Niti – India's Trusted Childhood Myopia Prevention Network",
  description:
    "Netra Niti focuses on childhood myopia prevention through comprehensive pediatric eye care, evidence-based myopia management, and premium eyewear designed for growing eyes.",
  keywords: ["Childhood myopia Prevention", "Childhood myopia treatment"],
};

export default function Home() {
  return (
    <>
      <HomePageLayout />
    </>
  );
}
