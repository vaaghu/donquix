import { Button, Grid, Typography } from "@mui/material";
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

          borderImage:
            "linear-gradient(to right, transparent 10%, #EFC7B0 40%, transparent) 1 ",
        }}
      >
        <Grid>
          <Typography variant="h5">Behance</Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            component={Link}
            href="https://www.instagram.com/donquix_/ "
            target="_blank"
          >
            Instagram
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            component={Link}
            href="https://www.linkedin.com/in/deekay000/"
            target="_blank"
          >
            LinkedIn
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="h5"
            component={Link}
            href="https://youtu.be/Y_ydbeCSMeI?si=NnuTEV4wE_MUNSNn"
            target="_blank"
          >
            YouTube
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        color="#efc7b0"
        style={{
          minHeight: "50vh",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          sm={3}
        >
          <Typography variant="h5">Home</Typography>
          <Typography variant="h5">Story</Typography>
          <Typography variant="h5">Approach</Typography>
          <Typography variant="h5">Service</Typography>
          <Typography variant="h5">Contact</Typography>
        </Grid>
        <Grid sm={3}>
          <input
            type="text"
            style={{
              border: "none",
              outline: "none",
              width: "240px",
              background: "transparent",
              borderBottom: "2px solid #efc7b0",
            }}
            placeholder="email address"
          />
          <Button>
            <Image src={buttonArrow} alt="button" />
          </Button>
          <Typography marginBottom={2} variant="h5">
            Subscribe to our newsletter
          </Typography>
          <Typography variant="h6">© 2024, Donquix</Typography>
        </Grid>
      </Grid>
    </>
  );
};
