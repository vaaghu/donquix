import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { buttonArrow } from "@/assets";
import Link from "next/link";

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
        <Grid>
          <Typography variant="h5" fontFamily="gilroy_light">
            Behance
          </Typography>
        </Grid>
        <Grid position="relative" minHeight={"100%"}>
          <Typography
            variant="h5"
            component={Link}
            href="https://www.instagram.com/donquix_/ "
            target="_blank"
            fontFamily="gilroy_light">
            Instagram
          </Typography>

          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sm={3}
            style={{ position: "absolute", top: "15vh" }}>
            <Typography variant="h5" fontFamily="gilroy_light">
              Home
            </Typography>
            <Typography variant="h5" fontFamily="gilroy_light">
              Story
            </Typography>
            <Typography variant="h5" fontFamily="gilroy_light">
              Approach
            </Typography>
            <Typography variant="h5" fontFamily="gilroy_light">
              Service
            </Typography>
            <Typography variant="h5" fontFamily="gilroy_light">
              Contact
            </Typography>
          </Grid>
        </Grid>
        <Grid position="relative" minHeight={"100%"}>
          <Typography
            variant="h5"
            component={Link}
            href="https://www.linkedin.com/in/deekay000/"
            target="_blank"
            fontFamily="gilroy_light">
            LinkedIn
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
              alignItems="center"
              color="#efc7b0"
              sx={{
                minHeight: "15vh",
              }}
              sm={12}>
              <Grid item sm={12}>
                <input
                  type="text"
                  style={{
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
              <Grid sm={12}>
                <Typography
                  marginBottom={2}
                  variant="h5"
                  fontSize="1.4rem"
                  fontFamily="gilroy_light">
                  Subscribe to our newsletter
                </Typography>
                <Typography variant="h6" fontFamily="gilroy_light">
                  © 2024, Donquix
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            component={Link}
            href="https://youtu.be/Y_ydbeCSMeI?si=NnuTEV4wE_MUNSNn"
            target="_blank"
            fontFamily="gilroy_light">
            YouTube
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
