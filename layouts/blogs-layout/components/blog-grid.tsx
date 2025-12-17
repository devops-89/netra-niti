"use client";
import { Box, Container, Grid } from "@mui/material";
import { BLOG_CARD_DATA } from "@/assets/generic-data";
import BlogsCard from "./blogs-card";
import ServiceHeading from "../../services/components/service-heading";
import { COLORS } from "@/utils/enum";
import { display, style } from "@mui/system";
import { validateHeaderName } from "http";
const BlogsSection = () => {
  const displayBlogs = BLOG_CARD_DATA.slice(0, 4);

  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
            py: 6,
            mt: 1,
            px: { lg: 6, xs: 4 },
          }}
        >
          <Box>
            <ServiceHeading label="Latest Blogs" />
          </Box>

          <Grid
            container
            spacing={{ lg: 5, xs: 5 }}
            mt={1}
            justifyContent={"center"}
          >
            {displayBlogs.map((blog, index) => (
              <Grid size={{ lg: 4, xs: 12 }} key={index}>
                <BlogsCard
                  img={blog.img}
                  title={blog.title}
                  description={blog.description}
                  slug={blog.slug}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogsSection;
