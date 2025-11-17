import SimpleButton from "@/components/widgets/simple-button";
import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { TEXTFIELD_STYLE } from "@/utils/styles";
import { Box, Container, Grid, Stack, TextField } from "@mui/material";
import React from "react";

const FormMap = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112080.91941345131!2d77.06462860107422!3d28.613911512408446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1760192404885!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "20px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
          <Grid size={{ lg: 6, xs: 12 }}>
            <form>
              <Grid container spacing={4}>
                <Grid size={12}>
                  <TextField
                    sx={{ ...TEXTFIELD_STYLE }}
                    label="Name"
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    sx={{ ...TEXTFIELD_STYLE }}
                    label="Email Address"
                    fullWidth
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    sx={{
                      ...TEXTFIELD_STYLE,
                      fieldset: {
                        height: 110,
                      },
                      "& .MuiOutlinedInput-input": {
                        height: "100px !important",
                      },
                    }}
                    label="Email Address"
                    fullWidth
                    multiline
                  />
                </Grid>
                <Grid size={12}>
                  <SimpleButton
                    label="Send now"
                    sx={{ fontWeight: 500 }}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FormMap;
