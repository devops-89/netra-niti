import HomePageLayout from "@/layouts/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netra Niti – India’s First Childhood Myopia Prevention Network",
  description:
    "Netra Niti is India’s first dedicated network for childhood myopia prevention, offering expert pediatric eye care, myopia management & high-quality eyewear to protect",
};

export default function Home() {
  return (
    <>
      <HomePageLayout />
    </>
  );
}
