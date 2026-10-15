"use client";
import { BLOG_CARD_DATA } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import { BLOG_CARD_PROPS } from "@/utils/types";
import { Circle } from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";

const BlogDetailsLayout = () => {
  const { slug } = useParams();

  const [data, setData] = useState<BLOG_CARD_PROPS | null>(null);

  useEffect(() => {
    const filteredData = BLOG_CARD_DATA.find(
      (blog) =>
        blog.slug === slug ||
        (slug === "advanced-myopia-treatment" &&
          blog.slug === "advanced-myopia-treatment-for-kids")
    );
    setData(filteredData as BLOG_CARD_PROPS);
  }, [slug]);
  const phone = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        {data?.img && (
          <Image
            src={data?.img}
            alt={data?.title || "Blog Image"}
            priority
            style={{
              width: phone ? 310 : "100%",
              height: "auto",
              borderRadius: "16px",
            }}
          />
        )}
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            p: 4,
            mt: 4,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          <Typography
            fontSize={{ lg: 48, xs: 24, md: 36 }}
            fontWeight={700}
            color={COLORS.PRIMARY}
          >
            {data?.title}
          </Typography>

          {data?.details?.data?.map((val, i) => (
            <Stack spacing={1} sx={{ mt: 4 }} key={i}>
              {val.subTitle && (
                <Typography
                  fontSize={{ lg: 22, xs: 18 }}
                  fontWeight={600}
                  color={COLORS.SECONDARY}
                >
                  {val.subTitle}
                </Typography>
              )}
              {val.detailDescription.map((item, index) => (
                <React.Fragment key={index}>
                  <Typography
                    fontSize={{ lg: 18, xs: 15 }}
                    lineHeight={1.8}
                    fontWeight={400}
                  >
                    {item.description}
                  </Typography>

                  {item?.list && (
                    <List>
                      {item.list.map((list, j) => (
                        <ListItem
                          key={j}
                          disablePadding
                          sx={{ alignItems: "flex-start" }}
                        >
                          <ListItemAvatar sx={{ minWidth: 20, mt: "1px" }}>
                            <Circle sx={{ color: COLORS.BLACK, fontSize: 8 }} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={list.label}
                            slotProps={{
                              primary: {
                                sx: {
                                  fontWeight: 500,
                                },
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default BlogDetailsLayout;
