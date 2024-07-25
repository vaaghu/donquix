import { Box, Button, Grid, Input, styled, Typography } from "@mui/material";
import Image from "next/image";
import { buttonArrow } from "@/assets";
import Link from "next/link";

const CustomTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));
const CusInput = styled(Input)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

export const ContactSection = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        color="#efc7b0"
        m="2"
        p="5"
        style={{
          borderTop: "1px solid",
          paddingTop: "20px",
          minHeight: "50vh",
          borderImage:
            "linear-gradient(to right, transparent 10%, #EFC7B0 40%, transparent) 1 ",
        }}>
        <Grid item order={{ md: 2 }} position="relative" minHeight={"100%"}>
          <Typography
            component={Link}
            href="https://www.instagram.com/donquix_/ "
            target="_blank">
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Instagram
            </CustomTypography>
          </Typography>

          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sm={3}
            style={{ position: "absolute", top: "15vh" }}>
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Home
            </CustomTypography>
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Story
            </CustomTypography>
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Approach
            </CustomTypography>
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Service
            </CustomTypography>
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Contact
            </CustomTypography>
          </Grid>
        </Grid>
        <Grid item order={{ md: 3 }} position="relative" minHeight={"100%"}>
          <Typography
            component={Link}
            href="https://www.linkedin.com/in/deekay000/"
            target="_blank">
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              LinkedIn
            </CustomTypography>
          </Typography>

          <Box
            style={{
              position: "absolute",
              top: "15vh",
              minWidth: "280px",
            }}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="baseline"
              color="#efc7b0"
              sx={{
                minHeight: "15vh",
              }}
              sm={12}>
              <Grid item sm={12}>
                <Input
                  type="text"
                  style={{
                    color: "#efc7b0",
                    border: "none",
                    outline: "none",
                    width: "200px",
                    background: "transparent",
                    borderBottom: "2px solid #efc7b0",
                    fontFamily: "gilroy_light",
                  }}
                  placeholder="email address"
                />
                <Button>
                  <Image src={buttonArrow} alt="button" />
                </Button>
              </Grid>
              <Grid item sm={12}>
                <CustomTypography
                  marginBottom={2}
                  variant="h5"
                  fontSize="1.4rem"
                  fontFamily="gilroy_light">
                  Subscribe to our newsletter
                </CustomTypography>
                <CustomTypography variant="h6" fontFamily="gilroy_light">
                  © 2024, Donquix
                </CustomTypography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item order={{ md: 1 }}>
          <Typography
            component={Link}
            href="https://youtu.be/Y_ydbeCSMeI?si=NnuTEV4wE_MUNSNn"
            target="_blank">
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              Behance
            </CustomTypography>
          </Typography>
        </Grid>
        <Grid item order={{ md: 4 }}>
          <Typography
            component={Link}
            href="https://youtu.be/Y_ydbeCSMeI?si=NnuTEV4wE_MUNSNn"
            target="_blank">
            <CustomTypography variant="h5" fontFamily="gilroy_light">
              YouTube
            </CustomTypography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
