import { character, character2, noise } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const MainTypography = (props) => {
  return <Typography fontFamily={"chokokutai"} fontWeight={400} {...props} />;
};

export const CharacterSection = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{ position: "relative" }}>
        <Image
          style={{
            zIndex: 1,
            width: "70vw",
            height: "auto",
          }}
          src={character}
          alt="character"
        />
        <Image
          style={{
            position: "absolute",
            zIndex: 0,
            top: "10vw",
            height: "10vw",
            width: "auto",
          }}
          src={noise}
          alt="character"
        />
        <Typography
          color="#EFC7B0"
          style={{
            position: "absolute",
            top: "50vw",
            left: "5vw",
            width: "25vw",
            fontWeight: 400,
          }}
          variant="h6"
          textAlign="center">
          We are an collective of creative thinkers united to express brands,
          stories, and experiences in the best possible way because who is a
          better storyteller than an artist?
        </Typography>
        <Typography
          color="#EFC7B0"
          style={{
            position: "absolute",
            top: "50vw",
            right: "5vw",
            width: "25vw",
            fontWeight: 400,
          }}
          variant="h6"
          textAlign="center">
          Design without strategy is mere decoration, yet sometimes off-strategy
          creative ideas can revolutionize a category and drive disruptive
          change.
        </Typography>
      </Grid>
    </>
  );
};

export const ListSection = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
      position="relative">
      {/* <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignContent="center"
        sm={3}
        position="absolute"
        left="10vw">
        <Grid item sm={2}>
          <Typography variant="h2" textAlign="center">
            Highlighted
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="center"
          sm={2}>
          <Grid item>
            <Typography variant="h4" textAlign="left">
              Craft
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent="flex-start">
            <Typography>Creative Direction</Typography>
            <Typography>Art Direction</Typography>
            <Typography>Motion Design</Typography>
            <Typography>Animation</Typography>
            <Typography>Brand Design</Typography>
            <Typography>Design Systems</Typography>
            <Typography>Video Production</Typography>
            <Typography>Ad films</Typography>
            <Typography>Web Design & Development</Typography>
            <Typography>Digital Product Design</Typography>
          </Grid>
        </Grid>
      </Grid> */}
      <Image
        src={character2}
        alt="character2"
        style={{
          width: "40vw",
          height: "auto",
        }}
      />
      <Box position="absolute" top="10vw" left="60vw">
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="5.5vw"
          fontFamily="chokokutai"
          color="#EFC7B0">
          Capabilities
        </Typography>
      </Box>
      <Box position="absolute" top="20vw" left="15vw">
        <Grid>
          <Typography
            textAlign="right"
            variant="h3"
            fontFamily="chokokutai"
            style={{
              textShadow: "0 0 5px #EFC7B5",
              color: "black",
            }}>
            Craft
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-end">
          <Typography textAlign="right" variant="h5">
            Creative Direction
          </Typography>
          <Typography textAlign="right" variant="h5">
            Art Direction
          </Typography>
          <Typography textAlign="right" variant="h5">
            Motion Design
          </Typography>
          <Typography textAlign="right" variant="h5">
            Animation
          </Typography>
          <Typography textAlign="right" variant="h5">
            Brand Design
          </Typography>
          <Typography textAlign="right" variant="h5">
            Design Systems
          </Typography>
          <Typography textAlign="right" variant="h5">
            Video Production
          </Typography>
          <Typography textAlign="right" variant="h5">
            Ad films
          </Typography>
          <Typography textAlign="right" variant="h5">
            Web Design & Development
          </Typography>
          <Typography textAlign="right" variant="h5">
            Digital Product Design
          </Typography>
        </Grid>
      </Box>
      <Box position="absolute" top="20vw" left="70vw">
        <Grid item>
          <Typography
            variant="h3"
            textAlign="left"
            fontFamily="chokokutai"
            style={{
              textShadow: "0 0 3px #EFC7B0",
              color: "black",
            }}>
            Strategy
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="flex-start"
          sm={12}>
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
      <Box position="absolute" top="10vw" left="4vw">
        <Typography
          variant="h2"
          textAlign="center"
          fontSize="5.5vw"
          fontFamily={"chokokutai"}
          color="#EFC7B0">
          Highlighted
        </Typography>
      </Box>
      {/* <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignContent="center"
        position="absolute"
        sm={3}
        right="10vw">
        <Grid item sm={2}>
          <Typography variant="h2" textAlign="center">
            Capabilities
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignContent="center"
          sm={5}>
          <Grid item>
            <Typography variant="h4" textAlign="left">
              Strategy
            </Typography>
          </Grid>
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignContent="flex-start"
            sm={12}>
            <Typography fullwidth>Target analysis & segmentation</Typography>
            <Typography>Brand strategy & positioning</Typography>
            <Typography>Social media & content strategy</Typography>
            <Typography>Market analysis</Typography>
            <Typography>Brand proposition</Typography>
            <Typography>Influencer marketing</Typography>
            <Typography>Social media marketing</Typography>
            <Typography>Media partnership</Typography>
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
  );
};
