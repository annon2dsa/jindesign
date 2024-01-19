import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const MarqueeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "40px",
  },
}));

const ImagesSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // gap: "2.75rem",
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    height:"41px",
  },
}));

const SectionOne = () => {
  const marqueeFunction = () => {
    return (
      <ImagesSection
        sx={{
          flexDirection: "row",
          margin: "0rem",
          padding: "0rem",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        <Image
          sx={{
            width: "auto",
            top: "0px",
          }}
          src="/images/marquee1.svg"
          alt="marquee1"
        />
      </ImagesSection>
    );
  };
  const marqueeFunctionTwo = () => {
    return (
      <ImagesSection
        sx={{
          flexDirection: "row",
          margin: "0rem",
          padding: "0rem",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        <Image
          sx={{
            width: "auto",
            top: "0px",
          }}
          src="/images/marquee2.svg"
          alt="marquee2"
        />
      </ImagesSection>
    );
  };
  return (
    <MarqueeContainer>
      <Marquee style={{ padding: "0rem" }}>{marqueeFunction()}</Marquee>
      <Marquee direction="right">{marqueeFunctionTwo()}</Marquee>
    </MarqueeContainer>
  );
};
export default SectionOne;
