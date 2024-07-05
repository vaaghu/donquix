import { character2 } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const ListSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
      position="relative">
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
        left="11vw"
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
      <Box position="absolute" top="5vw" left="55vw">
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="5.5vw"
          fontFamily="chokokutai"
          color="#EFC7B0"
          style={{
            borderBottom: "1px solid",
            paddingLeft: "100px",
            borderImage: `linear-gradient(to left,#EFC7B0 40%, transparent) 1`,
          }}>
          Capabilities
        </Typography>
      </Box>
      <Box position="absolute" top="20vw" left="15vw">
        <Grid>
          <Typography
            textAlign="left"
            variant="h3"
            fontFamily="chokokutai"
            style={{
              color: "black",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#EFC7B5",
            }}>
            Craft
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-end"
          color="#EFC7B5">
          <Typography variant="h5">Creative Direction</Typography>
          <Typography variant="h5">Art Direction</Typography>
          <Typography variant="h5">Motion Design</Typography>
          <Typography variant="h5">Animation</Typography>
          <Typography variant="h5">Brand Design</Typography>
          <Typography variant="h5">Design Systems</Typography>
          <Typography variant="h5">Video Production</Typography>
          <Typography variant="h5">Ad films</Typography>
          <Typography variant="h5">Web Design & Development</Typography>
          <Typography variant="h5">Digital Product Design</Typography>
        </Grid>
      </Box>
      <Box position="absolute" top="20vw" left="70vw">
        <Grid item>
          <Typography
            variant="h3"
            textAlign="left"
            fontFamily="chokokutai"
            style={{
              color: "black",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#EFC7B5",
            }}>
            Strategy
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-start"
          color="#EFC7B5">
          <Typography variant="h5">Target analysis & segmentation</Typography>
          <Typography variant="h5">Brand strategy & positioning</Typography>
          <Typography variant="h5">Social media & content strategy</Typography>
          <Typography variant="h5">Market analysis</Typography>
          <Typography variant="h5">Brand proposition</Typography>
          <Typography variant="h5">Influencer marketing</Typography>
          <Typography variant="h5">Social media marketing</Typography>
          <Typography variant="h5">Media partnership</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};
export default ListSection;
