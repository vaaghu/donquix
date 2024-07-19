import { character2, spark } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const ListSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
      position="relative"
    >
      <Image
        src={character2}
        alt="character2"
        style={{
          width: "39vw",
          height: "auto",
        }}
      />
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
        }}
      >
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="4vw"
          fontFamily={"chokokutai"}
          color="#EFC7B0"
        >
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
          }}
        >
          Capabilities
        </Typography>
      </Box>
      <Image
        src={spark}
        alt="spark"
        style={{
          position: "absolute",
          width: "34px",
          height: "34.68px",
          top: "283px",
          left: "1062px",
          border: "1.36px 0px 0px 0px",
          opacity: "0px",
        }}
      />
      <Box position="absolute" top="23vw" left="15vw">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-end"
          color="#EFC7B5"
        >
          <Typography variant="h5">Creative Direction</Typography>
          <Typography variant="h5">Art Direction</Typography>
          <Typography variant="h5">Graphic Novel</Typography>
          <Typography variant="h5">Motion Design</Typography>
          <Typography variant="h5">Animation</Typography>
        </Grid>
      </Box>
      <Image
        src={spark}
        alt="spark"
        style={{
          position: "absolute",
          width: "34px",
          height: "34.68px",
          top: "283px",
          right: "1194px",
          border: "1.36px 0px 0px 0px",
          opacity: "0px",
        }}
      />
      <Box position="absolute" top="23vw" left="75vw">
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-start"
          color="#EFC7B5"
        >
          <Typography variant="h5">Brand Design</Typography>
          <Typography variant="h5">Video Production</Typography>
          <Typography variant="h5">Ad films</Typography>
          <Typography variant="h5">Web Design</Typography>
          <Typography variant="h5">Design System</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};
export default ListSection;
