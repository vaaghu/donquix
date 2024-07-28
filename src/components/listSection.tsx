import { character2, spark } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const CustomImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "20vh",
    right: "0px",
  },
}));
const CustomSparkImage = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    visibility: "hidden",
  },
}));
const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    position: "static",
    borderImage: "none",
    borderBottom: "none",
    paddingLeft: "10px",
  },
}));

const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    alignContent: "flex-start",
  },
}));

const CustomText = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: "3rem",
    textAlign: "left",
  },
}));

export const ListSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignContent="center"
      position="relative"
      style={{
        minHeight: "100vh",
      }}>
      <CustomImage>
        <Image
          src={character2}
          alt="character2"
          style={{
            width: "39vw",
            height: "auto",
          }}
        />
      </CustomImage>
      <CustomBox
        position="absolute"
        top="7vw"
        left="8vw"
        sx={{
          borderBottom: "1px solid",
          paddingRight: "100px",
          paddingLeft: "20px",
          paddingBottom: "10px",
          borderImage: `linear-gradient(to right,#EFC7B0 40%, transparent) 1`,
        }}>
        <CustomText
          variant="h2"
          textAlign="center"
          fontSize="4vw"
          fontFamily={"chokokutai"}
          color="#EFC7B0">
          Highlighted
        </CustomText>
      </CustomBox>
      <CustomBox
        position="absolute"
        top="7vw"
        left="55vw"
        sx={{
          borderBottom: "1px solid",
          paddingLeft: "140px",
          paddingBottom: "10px",
          borderImage: `linear-gradient(to left,#EFC7B0 40%, transparent) 1`,
        }}>
        <CustomText
          variant="h2"
          textAlign="center"
          fontSize="4vw"
          fontFamily="chokokutai"
          color="#EFC7B0">
          Capabilities
        </CustomText>
      </CustomBox>
      <CustomBox position="absolute" top="23vw" left="15vw">
        <CustomGrid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-end"
          color="#EFC7B5">
          <CustomSparkImage variant="h5" sx={{ lineHeight: "60px" }}>
            <Image src={spark} alt="spark" />
          </CustomSparkImage>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Creative Direction
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Art Direction
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Graphic Novel
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Motion Design
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Animation
          </Typography>
        </CustomGrid>
      </CustomBox>

      <CustomBox position="absolute" top="23vw" left="75vw">
        <CustomGrid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-start"
          color="#EFC7B5">
          <CustomSparkImage variant="h5" sx={{ lineHeight: "60px" }}>
            <Image src={spark} alt="spark" />
          </CustomSparkImage>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Brand Design
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Video Production
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Ad films
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Web Design
          </Typography>
          <Typography
            variant="h5"
            fontFamily="gilroy_light"
            sx={{ lineHeight: "60px" }}>
            Design System
          </Typography>
        </CustomGrid>
      </CustomBox>
    </Grid>
  );
};
export default ListSection;
