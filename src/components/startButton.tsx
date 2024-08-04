import { arrowLeft, x_mark } from "@/assets";
import { Button, Grid, styled, Typography } from "@mui/material";
import { MainTypography } from ".";
import Image from "next/image";

const TitleText = styled(MainTypography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

const OneLineText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));

export const StartButton = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sm={12}
      xs={12}
      style={{
        minHeight: "110vh",
      }}>
      <Grid
        container
        sx={{ border: "1px solid #EFC7B0", p: 5 }}
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        sm={8}
        xs={8}>
        <Grid item sm={11} xs={10}>
          <TitleText
            variant="h1"
            textAlign="center"
            color="#EFC7B0"
            sx={{ textTransform: "capitalize" }}>
            Start a Project
          </TitleText>
        </Grid>
        <Grid container sm={1} xs={1} alignItems="flex-end">
          <Image
            src={arrowLeft}
            alt="star"
            style={{
              width: "5vw",
              height: "5vw",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sm={8}
        xs={8}>
        <OneLineText
          variant="h4"
          textAlign="center"
          color="#EFC7B0"
          py={1}
          fontFamily="gilroy_light">
          That's a wrap! Hope the button's big enough for you to smash!
          <Image
            src={x_mark}
            alt="x_mark"
            style={{
              transform: "translateY(25px)",
            }}
          />
        </OneLineText>
      </Grid>
    </Grid>
  );
};

export default StartButton;
