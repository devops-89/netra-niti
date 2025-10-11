import { PROCESS_CARD_DATA } from "@/assets/generic-data";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ProcessCard from "./components/process-card";
const Process = () => {
  return (
    <Box sx={{ py: 7 }}>
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: poppins.style.fontFamily,
            color: COLORS.SECONDARY,
            fontWeight: 600,
            fontSize: { lg: 60, xs: 35 },
            textTransform: "capitalize",
          }}
        >
          How Our Process Works
        </Typography>

        <Grid container sx={{ mt: 3 }} spacing={5}>
          {PROCESS_CARD_DATA.map((val, i) => (
            <Grid size={{ lg: 3, xs: 12 }} key={i}>
              <Box sx={{ display: "flex", position: "relative" }}>
                <ProcessCard
                  img={val.img}
                  heading={val.heading}
                  description={val.description}
                />
                {PROCESS_CARD_DATA.length - 1 !== i && (
                  <Box
                    sx={{
                      position: "absolute",
                      left: "70%",
                      transform: "translate(20%, -50%)",
                      top: "30%",
                      display: { lg: "block", xs: "none" },
                    }}
                  >
                    <Image src={val.arrowImg || ""} alt="" width={150} />
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Process;
