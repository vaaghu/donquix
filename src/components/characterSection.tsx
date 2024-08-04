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
import React, { MutableRefObject, useEffect, useRef } from "react";
import { ThreeStarV2 } from "./threeStar";
import {
  NoiseImgComp,
  Paragraph,
  ButtonComp,
} from "./characterSectionComponents";
import { styled } from "@mui/system";

type propType = {
  clientX: number;
  clientY: number;
};

const CharacterImageBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "70vw",
  },
}));

export const CharacterSection = ({ clientX, clientY }: propType) => {
  const rPupilRef: MutableRefObject<any> = useRef();
  const lPupilRef: MutableRefObject<any> = useRef();
  useEffect(() => {
    // if (!!rPupilRef.current) {
    //   let rData = rPupilRef.current.getBoundingClientRect();
    // }
    // if (!!lPupilRef.current) {
    // let lData = lPupilRef.current.getBoundingClientRect();
    //   let lDistance = getDis(clientX, clientY, lData.x, lData.y);
    // }
    if (!!rPupilRef.current && !!lPupilRef.current) {
      let rData = rPupilRef.current.getBoundingClientRect();
      let distance = getDis(clientX, clientY, rData.x, rData.y);

      lPupilRef.current.style.top = `${
        32 + (distance.y > 200 ? -2 : distance.y < -200 ? 2 : 0)
      }vw`;

      rPupilRef.current.style.top = `${
        32.4 + (distance.y > 200 ? -2 : distance.y < -200 ? 2 : 0)
      }vw`;

      rPupilRef.current.style.right = `${
        40 + (distance.x > 200 ? 2 : distance.x < -200 ? -2 : 0)
      }vw`;

      lPupilRef.current.style.left = `${
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
        style={{ position: "relative" }}>
        <Box
          style={{
            zIndex: 1,
            marginTop: "15px",
          }}>
          <ButtonComp style={{ left: "10vw" }}>story</ButtonComp>
          <ButtonComp style={{ right: "7vw" }}>contact</ButtonComp>

          <Box position="relative">
            <Image
              style={{
                zIndex: -1,
                width: "13vw",
                height: "auto",
                position: "absolute",
                top: "28vw",
                right: "39vw",
                transform: "translateX(+3vw)",
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
                top: "28vw",
                left: "42vw",
                transform: "translateX(-4vw)",
              }}
              src={eyeball}
              alt="left eyeball"
            />
            <Image
              style={{
                zIndex: -1,
                width: "5vw",
                height: "auto",
                position: "absolute",
                top: "32.7vw",
                right: "40vw",
                transitionDuration: "1s",
              }}
              id="rPupil"
              ref={rPupilRef}
              src={pupil}
              alt="right pupil"
            />
            <Image
              style={{
                zIndex: -1,
                width: "5vw",
                height: "auto",
                position: "absolute",
                top: "32vw",
                left: "42vw",
                transitionDuration: "1s",
              }}
              id="lPupil"
              ref={lPupilRef}
              src={pupil}
              alt="left pupil"
            />
            <CharacterImageBox width="70vw">
              <Image
                style={{
                  zIndex: 1,
                  width: "100%",
                  height: "auto",
                }}
                src={character}
                alt="character"
              />
            </CharacterImageBox>
          </Box>
        </Box>
        <NoiseImgComp />
        <Paragraph
          style={{
            left: "5vw",
            lineHeight: 1.2,
          }}>
          People may forget what you say, but they'll remember how you made them
          feel. So, judge us not by our words, but by our work.
        </Paragraph>
        <Paragraph
          style={{
            right: "5vw",
            lineHeight: 1.2,
          }}>
          Design without strategy is mere decoration, yet sometimes off-strategy
          creative ideas can revolutionize and lead to a change.
        </Paragraph>

        <ThreeStarV2
          style={{
            left: "2vw",
          }}
        />
        <ThreeStarV2
          style={{
            left: "96vw",
          }}
        />
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
          textAlign="center"></Typography>
      </Grid>
    </>
  );
};
