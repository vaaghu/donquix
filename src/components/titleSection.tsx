import { Grid, Typography } from "@mui/material";
import { MainTypography } from ".";
import Image from "next/image";
import { landing_page_scribble } from "@/assets";
import Link from "next/link";

export const TitleSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: "25vh" }}
    >
      <MainTypography variant="h1" color="#EFC7B0" textAlign="center" px={4}>
        A visionary creative studio
      </MainTypography>
      <Typography
        variant="h4"
        color="#EFC7B0"
        position="relative"
        textAlign="end"
        component={Link}
        href="/"
        px={4}
        style={{
          marginRight: "100px",
        }}
      >
        that brings brands, stories, and experiences to life through art,
        design, and animation.
        <Image
          src={landing_page_scribble}
          alt="scribble"
          style={{
            position: "absolute",
            right: "-220px",
            bottom: "-55px",
            height: "130px",
          }}
        />
      </Typography>
    </Grid>
  );
};
