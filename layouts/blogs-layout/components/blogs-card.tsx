"use client";
import { Box, CardActionArea, Container } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { BLOG_CARD_PROPS } from "@/utils/types";
// import line from "@/about/line.png";
// import ServiceHeading from "../../services/components/service-heading";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import { poppins } from "@/utils/fonts";
import { BLOG_CARD_DATA } from "@/assets/generic-data";
import Link from "next/link";

const BlogsCard = ({ img, title, description, slug }: BLOG_CARD_PROPS) => {
  // if (!blog) return null;

  return (
    <Box sx={{ mt: 2, height: "100%" }}>
      <Card
        sx={{
          borderRadius: 4,
          height: 400,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={`/blogs/${slug}`}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 240,
              overflow: "hidden",
            }}
          >
            <Image src={img} alt={title} fill style={{ objectFit: "cover" }} />
          </Box>
        </Link>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            // justifyContent: "space-between",
          }}
        >
          <Link href={`/blogs/${slug}`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                fontSize: 20,
                fontFamily: poppins.style.fontFamily,
                color: COLORS.PRIMARY,
                "&:hover": {
                  color: COLORS.SECONDARY,
                },
              }}
            >
              {title}
            </Typography>
          </Link>

          <Typography
            sx={{
              fontSize: 16,
              fontFamily: poppins.style.fontFamily,
              mt: 1,
              
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogsCard;
