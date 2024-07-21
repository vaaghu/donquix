import { Grid, styled, Typography } from "@mui/material";
import { MainTypography } from ".";
import Image from "next/image";
import { star } from "@/assets";

const CustomHeader = styled(MainTypography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    padding: "0px",
    margin: "0px 10px",
  },
}));

const CustomSection = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}));

const CustomParagraph = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
}));
export const PromiseSection = () => {
  return (
    <CustomSection
      container
      justifyContent="space-evenly"
      alignContent="center"
      minHeight="100vh"
      px={15}>
      <Grid item sm={5}>
        <CustomHeader
          variant="h1"
          color="#EFC7B0"
          style={{ lineHeight: "150%" }}
          textAlign="center">
          We take ownership. Period.
        </CustomHeader>
      </Grid>
      <Grid container sm={5} p={5}>
        <Grid item sm={1} xs={1}>
          <Image
            src={star}
            alt="star"
            width={20}
            height={20}
            style={{ transform: "rotatez(45deg)" }}
          />
        </Grid>
        <Grid item sm={11} xs={11} mb={2}>
          <CustomParagraph variant="h5" color="#EFC7B0">
            Your brand’s story is unique, and understanding that story is our
            first step
          </CustomParagraph>
        </Grid>
        <Grid item sm={1} xs={1}>
          <Image
            src={star}
            alt="star"
            width={20}
            height={20}
            style={{ transform: "rotatez(45deg)" }}
          />
        </Grid>
        <Grid item sm={11} xs={11} mb={2}>
          <CustomParagraph variant="h5" color="#EFC7B0">
            We are process oriented and quality obsessed people.
          </CustomParagraph>
        </Grid>
        <Grid item sm={1} xs={1}>
          <Image
            src={star}
            alt="star"
            width={20}
            height={20}
            style={{ transform: "rotatez(45deg)" }}
          />
        </Grid>
        <Grid item sm={11} xs={11} mb={2}>
          <CustomParagraph variant="h5" color="#EFC7B0">
            Nothing lifts our spirit more than creating impactful work so we
            strive to be more than mere numbers. We give importance to your
            brand, your product, your target audience, and your competition.
          </CustomParagraph>
        </Grid>
      </Grid>
    </CustomSection>
  );
};

export default PromiseSection;
