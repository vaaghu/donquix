import { character, character2, noise } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
export * from "./listSection";
export * from "./characterSection";
export * from "./contactSection";


export const MainTypography = (props) => {
  return <Typography fontFamily={"chokokutai"} fontWeight={400} {...props} />;
};
