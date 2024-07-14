import { Typography } from "@mui/material";
export * from "./listSection";
export * from "./characterSection";
export * from "./contactSection";
export * from "./titleSection";
export * from "./threeStar";

export const MainTypography = (props) => {
  return <Typography fontFamily={"chokokutai"} fontWeight={400} {...props} />;
};
