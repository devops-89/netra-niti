import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import SubFooter from "@/components/common/sub-footer";
import { COLORS } from "@/utils/enum";
import { Box, Container } from "@mui/material";
import "animate.css";
import type { Metadata } from "next";
import "swiper/css";
import "./globals.css";
import "aos/dist/aos.css";
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
          <Box
            sx={{
              backgroundColor: COLORS.WHITE,
              pt: 15,
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
            }}
          >
            <SubFooter />
            <Footer />
          </Box>
        </Container>
      </body>
    </html>
  );
}
