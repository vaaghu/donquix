import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { buttonArrow } from "@/assets";

export const ContactSection = () => {
  return (
    <>
      <Grid container direction="row" justifyContent="space-around" m="2" p="5">
        <Grid>
          <Typography variant="h5">Behance</Typography>
        </Grid>
        <Grid>
          <Typography variant="h5">Instagram</Typography>
        </Grid>
        <Grid>
          <Typography variant="h5">LinkedIn</Typography>
        </Grid>
        <Grid>
          <Typography variant="h5">YouTube</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
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
              borderBottom: "2px solid wheat",
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
