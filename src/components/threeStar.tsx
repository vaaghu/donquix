import { star } from "@/assets";
import { Box, Grid, GridDirection, styled } from "@mui/material";
import Image from "next/image";
type propType = {
  direction: GridDirection | undefined;
};
const ThreeStarTempComp = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ThreeStar = ({ direction = "row" }: propType) => {
  return (
    <Grid
      container
      direction={direction}
      justifyContent="flex-start"
      alignItems="center"
      minWidth="150px"
      maxWidth="50vw">
      <Image
        src={star}
        alt="star"
        width={20}
        height={20}
        style={{ margin: "0px 10px" }}
      />
      <Image
        src={star}
        alt="star"
        width={20}
        height={20}
        style={{ margin: "0px 10px" }}
      />
      <Image
        src={star}
        alt="star"
        width={20}
        height={20}
        style={{ margin: "0px 10px" }}
      />
    </Grid>
  );
};

export const ThreeStarV2 = ({ style }: { style: object }) => {
  return (
    <ThreeStarTempComp>
      <Grid
        container
        direction="column"
        gap="35px"
        justifyContent="space-evenly"
        alignItems="flex-start"
        style={{
          position: "absolute",
          top: "27vw",
          ...style,
        }}
        sm={11}>
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
    </ThreeStarTempComp>
  );
};
