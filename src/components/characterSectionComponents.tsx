import { buttonBackground, noise } from "@/assets";
import { Box, Button, styled, Typography } from "@mui/material";
import Image from "next/image";

const CustomTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
export const Paragraph = ({
  style = {},
  children = "",
}: {
  style?: object;
  children: string;
}) => {
  return (
    <CustomTypography
      color="#EFC7B0"
      style={{
        position: "absolute",
        top: "50vw",
        fontFamily: "gilroy_ultrathin",
        width: "25vw",
        fontWeight: 400,
        ...style,
      }}
      variant="h6"
      textAlign="center">
      {children}
    </CustomTypography>
  );
};

export const NoiseImgComp = () => {
  return (
    <CustomBox>
      <Image
        style={{
          position: "absolute",
          zIndex: 0,
          top: "11.5vw",
          left: "0px",
          height: "10vw",
          width: "auto",
        }}
        src={noise}
        alt="noise"
      />
    </CustomBox>
  );
};

const CustomButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ButtonComp = ({
  style = {},
  children = "",
}: {
  style?: object;
  children: string;
}) => {
  return (
    <CustomButton
      style={{
        background: "transparent",
        border: "none",
        color: "white",
        width: "172px",
        height: "60px",
        position: "absolute",
        top: "30vw",
        ...style,
      }}>
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
          position: "absolute",
          fontFamily: "gilroy_light",
          zIndex: 1,
          margin: "0px",
          padding: "0px",
        }}>
        {children}
      </Typography>
    </CustomButton>
  );
};
