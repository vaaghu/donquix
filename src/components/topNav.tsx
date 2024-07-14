import { Grid } from "@mui/material";
import Image from "next/image";
import { MainTypography, ThreeStar } from ".";
import { logo, star } from "@/assets";

export const TopNav = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      mt={4}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sm={2}>
        <Image src={logo} alt="logo" />
        <MainTypography
          variant="h6"
          textAlign="left"
          color="#EFC7B0"
          sx={{
            pl: 1,
            pr: 3,
            borderRight: "1px #EFC7B0 solid",
          }}>
          Donquix
        </MainTypography>
        <Grid sm={4}>
          <ThreeStar direction="row" />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        sm={4}>
        <Grid sm={3}>
          <ThreeStar direction="row" />
        </Grid>
        <MainTypography
          variant="h6"
          textAlign="right"
          color="#EFC7B0"
          pl={3}
          sx={{
            borderLeft: "1px #EFC7B0 solid",
          }}>
          uncommon among uncommon
        </MainTypography>
      </Grid>
    </Grid>
  );
};
