import { buttonBackground, character, noise, star } from "@/assets";
import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export const CharacterSection = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{ position: "relative" }}
      >
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
          textAlign="center"
        >
          We are an collective of creative thinkers united to express brands,
          stories, and experiences in the best possible way because who is a
          better storyteller than an artist?
        </Typography>
        <Button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            width: "172px",
            height: "60px",
            position: "absolute",
            top: "30vw",
            left: "10vw",
          }}
        >
          <Image
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              zIndex: 0,
            }}
            src={buttonBackground}
            alt="button_bg"
          />
          <Typography
            style={{
              color: "#efc7b0",
              fontSize: "30px",
              position: "relative",
              zIndex: 1,
              margin: "0px",
              padding: "0px",
            }}
          >
            story
          </Typography>
        </Button>

        <Button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            width: "172px",
            height: "60px",
            position: "absolute",
            top: "30vw",
            right: "7vw",
          }}
        >
          <Image
            style={{
              position: "absolute",
              left: "0px",
              top: "0px",
              zIndex: 0,
            }}
            src={buttonBackground}
            alt="button_bg"
          />
          <Typography
            style={{
              color: "#efc7b0",
              fontSize: "30px",
              position: "relative",
              zIndex: 1,
              margin: "0px",
              padding: "0px",
            }}
          >
            contact
          </Typography>
        </Button>
        <Grid
          container
          direction="column"
          position="absolute"
          top="392px"
          left="45px"
          width="Hug (16px)px"
          height="Hug (121px)px"
          gap="35px"
          justifyContent="space-evenly"
          alignItems="flex-start"
          sm={11}
        >
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          position="absolute"
          top="392px"
          left="1360px"
          width="Hug (16px)px"
          height="Hug (121px)px"
          gap="35px"
          justifyContent="space-evenly"
          alignItems="flex-start"
          sm={11}
        >
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
          <Grid item>
            <Image src={star} alt="star" width={20} height={20} />
          </Grid>
        </Grid>

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
          textAlign="center"
        >
          Design without strategy is mere decoration, yet sometimes off-strategy
          creative ideas can revolutionize a category and drive disruptive
          change.
        </Typography>
      </Grid>
    </>
  );
};
