import { Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import { MainTypography, ThreeStar } from ".";
import { logo } from "@/assets";

const NavBar = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
  },
}));
const LogoPart = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    minWidth: "100vw",
    justifyContent: "center",
  },
}));

const OneLiner = styled(MainTypography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    border: "none",
    minWidth: "100vw",
    padding: "0px",
    textAlign: "center",
  },
}));

const OneLinerThreeStar = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const TopNav = () => {
  return (
    <NavBar
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      px={4}
      mt={4}>
      <LogoPart
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        xs={4}
        sm={4}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          xs={6}
          sm={4}>
          <Grid item>
            <Image src={logo} alt="logo" />
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
        <Grid item xs={6} sm={4}>
          <ThreeStar direction="row" />
        </Grid>
      </LogoPart>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sm={4}>
        <OneLinerThreeStar sm={3}>
          <ThreeStar direction="row" />
        </OneLinerThreeStar>
        <OneLiner
          variant="h6"
          textAlign="right"
          color="#EFC7B0"
          pl={3}
          sx={{
            borderLeft: "1px #EFC7B0 solid",
          }}>
          uncommon among uncommon
        </OneLiner>
      </Grid>
    </NavBar>
  );
};
