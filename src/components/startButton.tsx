import { arrowLeft, x_mark } from "@/assets";
import { Grid, styled, Typography } from "@mui/material";
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
        sx={{ border: "1px solid #EFC7B0", px: 5 }}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sm={8}
        xs={8}>
        <Grid item sm={10} xs={10}>
          <TitleText variant="h1" textAlign="center" color="#EFC7B0">
            Start a Project
          </TitleText>
        </Grid>
        <Grid item sm={1} xs={1}>
          <Image
            src={arrowLeft}
            alt="star"
            style={{
              width: "10vw",
              height: "10vw",
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
              display: "none",
            }}
          />
        </OneLineText>
      </Grid>
    </Grid>
  );
};

export default StartButton;
