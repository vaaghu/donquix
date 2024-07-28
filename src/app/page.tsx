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
  x_mark,
} from "@/assets";
import Image from "next/image";
import { TopNav } from "@/components/topNav";
import { useEffect, useRef, useState } from "react";
import PromiseSection from "@/components/promiseSection";
import StartButton from "@/components/startButton";
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
      <StartButton />
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
