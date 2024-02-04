import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "145px",
  gap: "145px",
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "353px",
  },
}));

const BackgroundGlow = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "42.813rem",
  height: "45.25rem",
  flexShrink: 0,
  borderRadius: "45.25rem",
  background: "rgba(57, 196, 255, 0.08)",
  filter: "blur(100px)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "10rem",
    height: "10rem",
    borderRadius: "25rem",
  },
  marginTop: "2rem",
}));

const SetGoals = () => {
  return (
    <MainContainer>
      <BackgroundGlow />
      <Image src="/images/setgoals.png" alt="user_onboarding" />
    </MainContainer>
  );
};
export default SetGoals;
