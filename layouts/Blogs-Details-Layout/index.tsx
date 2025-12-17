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
    const filteredData = BLOG_CARD_DATA.find((blog) => blog.slug === slug);
    setData(filteredData as BLOG_CARD_PROPS);
  }, [slug]);
  const phone = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: 8 }}>
        {data?.img && (
          <Image
            src={data?.img}
            alt=""
            style={{ width: phone ? 380 : "100%", height: "auto" }}
          />
        )}
        <Box
          sx={{
            backgroundColor: COLORS.WHITE,
            p: 4,
            mt: 5,
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px",
          }}
        >
          <Typography fontSize={{ lg: 48, xs: 20, md: 17 }} fontWeight={700} color={COLORS.PRIMARY}>
            {data?.title}
          </Typography>

          {data?.details?.data?.map((val, i) => (
            <Stack spacing={1} sx={{ mt: 4 }}>
              <Typography fontSize={{ lg: 20, xs: 16 }} fontWeight={600} color={COLORS.SECONDARY}>
                {val.subTitle}
              </Typography>
              {val.detailDescription.map((item, index) => (
                <>
                  <Typography fontSize={{ lg: 18, xs: 15 }} lineHeight={1.8} fontWeight={400}>
                    {item.description}
                  </Typography>

                  {item?.list && (
                    <List>
                      {item.list.map((list, j) => (
                        <ListItem
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
                </>
              ))}
            </Stack>
          ))}
        </Box>
      </Container>
    </div>
  );
};

export default BlogDetailsLayout;
