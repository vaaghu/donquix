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
      justifyContent="space-evenly"
      alignItems="center">
      <Image src={star} alt="star" width={20} height={20} />
      <Image src={star} alt="star" width={20} height={20} />
      <Image src={star} alt="star" width={20} height={20} />
    </Grid>
  );
};
