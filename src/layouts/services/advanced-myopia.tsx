import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import advanced1 from "@/services/advanced-1.png";
import advanced2 from "@/services/advanced-2.png";
import IconList from "./components/Icon-list";
import { ICON_LIST_DATA } from "@/assets/generic-data";
import { Done } from "@mui/icons-material";
import SimpleButton from "@/components/widgets/simple-button";
import ServiceHeading from "./components/service-heading";
import Link from "next/link";
const AdvancedMyopia = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <ServiceHeading label="Advanced Myopia Control Treatments" />

            <IconList
              data={ICON_LIST_DATA}
              icon={<Done sx={{ color: COLORS.WHITE, fontSize: 15 }} />}
              iconSx={{ width: 25, height: 25 }}
            />
            <Link href={"/contact-us"}>
              <SimpleButton label="Book a Consultation" />
            </Link>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Box>
              <Image
                src={advanced1}
                alt=""
                style={{
                  width: "100%",
                  height: 200,
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
              <Image
                src={advanced2}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvancedMyopia;
