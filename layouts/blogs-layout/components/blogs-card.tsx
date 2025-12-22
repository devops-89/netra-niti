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
    <Box sx={{ mt: 2 }}>
      <Card sx={{ borderRadius: 4 }}>
        <Link href={`/blogs/${slug}`}>
          <Image src={img} alt="" style={{ width: "100%", height: "auto" }} />
        </Link>
        <CardContent sx={{ height: "20vh" }}>
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
            sx={{ fontSize: 16, fontFamily: poppins.style.fontFamily, mt:1}}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BlogsCard;
