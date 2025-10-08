import Navbar from "@/components/common/navbar";
import "animate.css";
import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import SubFooter from "@/components/common/sub-footer";
import Footer from "@/components/common/footer";
import { Box, Container } from "@mui/material";
import { COLORS } from "@/utils/enum";
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
        <Container maxWidth="xl">
          <Box sx={{ backgroundColor: COLORS.WHITE, pt: 15 }}>
            <SubFooter />
            <Footer />
          </Box>
        </Container>
      </body>
    </html>
  );
}
