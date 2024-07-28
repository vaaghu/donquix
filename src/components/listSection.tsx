import { character2, spark } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";

const CustomImage = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ListSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
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
      <Box
        position="absolute"
        top="7vw"
        left="8vw"
        style={{
          borderBottom: "1px solid",
          paddingRight: "100px",
          paddingLeft: "20px",
          paddingBottom: "10px",
          borderImage: `linear-gradient(to right,#EFC7B0 40%, transparent) 1`,
        }}>
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="4vw"
          fontFamily={"chokokutai"}
          color="#EFC7B0">
          Highlighted
        </Typography>
      </Box>
      <Box position="absolute" top="7vw" left="55vw">
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="4vw"
          fontFamily="chokokutai"
          color="#EFC7B0"
          style={{
            borderBottom: "1px solid",
            paddingLeft: "140px",
            paddingBottom: "10px",

            borderImage: `linear-gradient(to left,#EFC7B0 40%, transparent) 1`,
          }}>
          Capabilities
        </Typography>
      </Box>
      <Box position="absolute" top="23vw" left="15vw">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-end"
          color="#EFC7B5">
          <Typography variant="h5" sx={{ lineHeight: "60px" }}>
            <Image src={spark} alt="spark" />
          </Typography>
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
        </Grid>
      </Box>

      <Box position="absolute" top="23vw" left="75vw">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-start"
          color="#EFC7B5">
          <Typography variant="h5" sx={{ lineHeight: "60px" }}>
            <Image src={spark} alt="spark" />
          </Typography>
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
        </Grid>
      </Box>
    </Grid>
  );
};
export default ListSection;
