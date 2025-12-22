import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import SubFooter from "@/components/common/sub-footer";
import { COLORS } from "@/utils/enum";
import { Box, Container } from "@mui/material";
import "animate.css";
import "aos/dist/aos.css";
import type { Metadata } from "next";
import Script from "next/script";
import "swiper/css";
import "./globals.css";
export const metadata: Metadata = {
  title: "Netra Niti",
  description: "Netra Niti",
  icons: [
    {
      url: "/netra_niti_web_favicon_white.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/netra_niti_web_favicon_black.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  verification: {
    google: "U54OnTcKRiXWJfFhd4GRMMF8KiL3VRN53iaZZNyq_8U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZST8XXS');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZST8XXS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
