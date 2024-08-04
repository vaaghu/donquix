import { Grid, styled, Typography } from "@mui/material";
import Image from "next/image";
import { landing_page_scribble } from "@/assets";

const MainTypography = (props: any) => {
  return <Typography fontFamily={"chokokutai"} fontWeight={400} {...props} />;
};

const Title = styled(MainTypography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    padding: "0px",
    margin: "0px 10px",
  },
}));
const Description = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
    textAlign: "justify",
  },
}));
export const TitleSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      style={{ minHeight: "15vh" }}>
      <Title
        variant="h1"
        color="#EFC7B0"
        textAlign="center"
        px={4}
        style={{
          marginTop: "50px",
          marginBottom: "10px",
        }}>
        A visionary creative studio
      </Title>
      <Description
        variant="h4"
        color="#EFC7B0"
        fontFamily="gilroy_light"
        position="relative"
        textAlign="center"
        px={4}
        sx={{
          fontSize: "2rem",
        }}
        // style={{
        //   marginRight: "100px",
        // }}>
      >
        that brings brands, stories, and experiences to life through art,
        design, and animation.
        {/* <Image
          src={landing_page_scribble}
          alt="scribble"
          style={{
            position: "absolute",
            right: "-220px",
            bottom: "-55px",
            height: "130px",
          }}
        /> */}
      </Description>
    </Grid>
  );
};
