import Navbar from "@/components/widgets/navbar";
import "animate.css";
import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
export const metadata: Metadata = {
  title: "Netra Niti",
  description: "Netra Niti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
