import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  // height: "calc(100vh - 4rem)",
  padding: "1rem",
  gap: "3rem",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    marginTop: "4rem",
  },
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "0.5rem",
  padding: "0.5rem",
  width: "100%",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "64px",
  lineHeight: "86px",
  color: "#FFFFFF",
  // textAlign: "center",
  fontFamily: "Syne",
  width: "857px",
  fontStyle: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    lineHeight: "140%",
    width: "100%",
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
  marginTop: "-8rem",
}));

const SectionOne = () => {
  return (
    <MainContainer sx={{ marginTop: "5.563rem" }}>
      <TextContainer
        sx={{
          marginTop: "2rem",
          padding: "0rem",
          // width: "59.938rem",
          // height: "100%",
          gap: "1.5rem",
        }}
      >
        <MainText>
          Helping brands thrive in the
          <span style={{ color: "#8ED6FF" }}>digital world</span>
        </MainText>
      </TextContainer>
      <BackgroundGlow></BackgroundGlow>
    </MainContainer>
  );
};
export default SectionOne;
