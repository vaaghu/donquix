import { Box, Button, Grid, Typography } from "@mui/material";
import {
  buttonBackground,
  character,
  star,
  eyeball,
  noise,
  pupil,
} from "@/assets";
import Image from "next/image";
import React, { useEffect } from "react";

type propType = {
  clientX: number;
  clientY: number;
};
export const CharacterSection = ({ clientX, clientY }: propType) => {
  const rPupilRef: HTMLElement | null = document.querySelector("#rPupil");
  const lPupilRef: HTMLElement | null = document.querySelector("#lPupil");
  useEffect(() => {
    if (!!rPupilRef) {
      let rData = rPupilRef.getBoundingClientRect();
      let distance = getDis(clientX, clientY, rData.x, rData.y);

      rPupilRef.style.top = `${
        34 + (distance.y > 200 ? -2 : distance.y < -200 ? 2 : 0)
      }vw`;
    }
    if (!!lPupilRef) {
      let lData = lPupilRef.getBoundingClientRect();
      let distance = getDis(clientX, clientY, lData.x, lData.y);
      lPupilRef.style.top = `${
        34.3 + (distance.y > 200 ? -2 : distance.y < -200 ? 2 : 0)
      }vw`;
    }
    if (!!rPupilRef && !!lPupilRef) {
      let rData = rPupilRef.getBoundingClientRect();
      let distance = getDis(clientX, clientY, rData.x, rData.y);
      rPupilRef.style.right = `${
        40 + (distance.x > 200 ? 2 : distance.x < -200 ? -2 : 0)
      }vw`;

      lPupilRef.style.left = `${
        42 + (distance.x > 200 ? -2 : distance.x < -200 ? 2 : 0)
      }vw`;
    }
  }, [clientX, clientY]);
  const getDis = (x1: number, y1: number, x2: number, y2: number) => {
    return { x: Math.round(x2 - x1), y: Math.round(y2 - y1) };
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        style={{ position: "relative" }}
      >
        <Box
          style={{
            zIndex: 1,
          }}
        >
          <Image
            style={{
              zIndex: -1,
              width: "13vw",
              height: "auto",
              position: "absolute",
              top: "30vw",
              right: "40vw",
              transform: "translateX(+50%)",
            }}
            src={eyeball}
            alt="right eyeball"
          />
          <Image
            style={{
              zIndex: -1,
              width: "13vw",
              height: "auto",
              position: "absolute",
              top: "30vw",
              left: "42vw",
              transform: "translateX(-50%)",
            }}
            src={eyeball}
            alt="right eyeball"
          />
          <Image
            style={{
              zIndex: -1,
              width: "5vw",
              height: "auto",
              position: "absolute",
              top: "34vw",
              right: "40vw",
              transform: "translateX(+50%) ",
              transitionDuration: "1s",
            }}
            id="rPupil"
            src={pupil}
            alt="right pupil"
          />
          <Image
            style={{
              zIndex: -1,
              width: "5vw",
              height: "auto",
              position: "absolute",
              top: "34.3vw",
              left: "42vw",
              transform: "translateX(-50%)",
              transitionDuration: "1s",
            }}
            id="lPupil"
            src={pupil}
            alt="left pupil"
          />
          <Image
            style={{
              zIndex: 1,
              width: "70vw",
              height: "auto",
            }}
            src={character}
            alt="character"
          />
        </Box>
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
          gap="35px"
          justifyContent="space-evenly"
          alignItems="flex-start"
          style={{
            position: "absolute",
            top: "27vw",
            left: "2vw",
          }}
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
          gap="35px"
          justifyContent="space-evenly"
          alignItems="flex-start"
          style={{
            position: "absolute",
            top: "27vw",
            left: "96vw",
          }}
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
