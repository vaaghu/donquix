import { star } from "@/assets";
import { Grid, GridDirection } from "@mui/material";
import Image from "next/image";
type propType = {
  direction: GridDirection | undefined;
};
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
