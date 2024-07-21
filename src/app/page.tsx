"use client";

import { Box, Grid, Typography } from "@mui/material";
import {
  CharacterSection,
  ContactSection,
  ListSection,
  MainTypography,
  TitleSection,
} from "@/components";
import {
  logo,
  star,
  arrowLeft,
  landing_page_scribble,
  footerLogo,
} from "@/assets";
import Image from "next/image";
import { TopNav } from "@/components/topNav";
import { useEffect, useRef, useState } from "react";
import PromiseSection from "@/components/promiseSection";
export default function Home() {
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);

  return (
    <section
      onMouseMove={(event) => {
        setClientX(event.clientX);
        setClientY(event.clientY);
      }}>
      <TopNav />
      <TitleSection />
      <CharacterSection clientX={clientX} clientY={clientY} />
      <PromiseSection />
      <ListSection />
      {/* START BUTTON */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={12}
        style={{
          minHeight: "110vh",
        }}>
        <Grid
          container
          sx={{ border: "1px solid #EFC7B0", p: 5 }}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sm={8}>
          <Grid item sm={9} mx={1}>
            <MainTypography variant="h1" textAlign="center" color="#EFC7B0">
              Start a Project
            </MainTypography>
          </Grid>
          <Grid item sm={2} mx={1}>
            <Image src={arrowLeft} alt="star" width={150} height={150} />
          </Grid>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="h4" textAlign="justify" color="#EFC7B0" py={2}>
            That{"'"}s a wrap! Hope the button{"'"}s big enough for you to
            smash!
          </Typography>
        </Grid>
      </Grid>
      <ContactSection />
      <Grid container justifyContent="center" alignItems="center">
        <Image
          src={footerLogo}
          alt="footerLogo"
          style={{ width: "100vw", height: "auto" }}
        />
      </Grid>
    </section>
  );
}
