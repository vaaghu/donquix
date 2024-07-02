import { character, noise } from "@/assets";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

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
