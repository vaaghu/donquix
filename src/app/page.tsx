"use client";

import { Box, Grid, Typography } from "@mui/material";
import {
  CharacterSection,
  ListSection,
  MainTypography,
  TitleSection,
} from "@/components";
import { logo, star, arrowLeft, landing_page_scribble } from "@/assets";
import Image from "next/image";
import { TopNav } from "@/components/topNav";
export default function Home() {
  return (
    <>
      <TopNav />
      <TitleSection />
      <CharacterSection />
      <Grid container justifyContent="space-evenly" alignContent="center">
        <Grid item sm={5}>
          <MainTypography variant="h1" color="#EFC7B0">
            We take ownership. Period.
          </MainTypography>
        </Grid>
        <Grid container sm={5}>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              Your brand’s story is unique, and understanding that story is our
              first step
            </Typography>
          </Grid>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              We are process oriented and quality obsessed people.
            </Typography>
          </Grid>
          <Grid item sm={1}>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item sm={11}>
            <Typography variant="h5" color="#EFC7B0">
              Nothing lifts our spirit more than creating impactful work so we
              strive to be more than mere numbers. We give importance to your
              brand, your product, your target audience, and your competition.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <ListSection />
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center">
        <Grid
          container
          sx={{ border: "1px solid #EFC7B0", p: 5 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sm={9}>
          <Grid item sm={10}>
            <MainTypography variant="h1" textAlign="center" color="#EFC7B0">
              Start a Project
            </MainTypography>
          </Grid>
          <Grid item sm={2}>
            <Image src={arrowLeft} alt="star" width={150} height={150} />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h3" textAlign="center" color="#EFC7B0">
            That{"'"}s a wrap! Hope the button{"'"}s big enough for you to
            smash!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
