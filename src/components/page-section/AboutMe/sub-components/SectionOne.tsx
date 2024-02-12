import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "254px",
  padding: "1rem",
  maxWidth: "690px",
  marginTop: "110px",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "10rem",
    marginBottom: "40px",
    padding: "0rem",
  },
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "32px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
  },
}));

const HeadeText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3rem",
  lineHeight: "normal",
  color: "#FFFF",
  fontFamily: "Syne",
  // width: "191px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "140%",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.875rem",
  color: "#FFFFFF",
  textAlign: "justify",
}));

const BackgroundGlow = styled("div")(({ theme }) => ({
  left: "115px",
  position: "absolute",
  width: "33.563rem",
  height: "33.563rem",
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
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  width: "100%",
  // [theme.breakpoints.down("sm")]: {
  //   display: "none",
  // },
}));

const Image = styled("img")(({ theme }) => ({
  position: "relative",
  top: "25px",
  right: "0",
  width: "160px",
  height: "160px",
  [theme.breakpoints.down("sm")]: {
    width: "120px",
    height: "120px",
    marginBottom: "1rem",
  },
}));

const MaltaImg = styled("img")(({ theme }) => ({
  marginTop: "110px",
  maxWidth: "855px",
  width: "auto",
  maxHeight: "377px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SectionOne = () => {
  const isMobile = window.innerWidth <= 700; // 600px

  const imsSrc = isMobile
    ? "/images/aboutmemaltaph.svg"
    : "/images/aboutmemalta.svg";

  return (
    <MainContainer>
      <ImageContainer>
        <motion.div
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          <Image src="/images/kristen.svg" />
        </motion.div>
      </ImageContainer>
      <HeadingContainer>
        <HeadeText>
          Hi, I’m{" "}
          <span style={{ color: "#75AFD0", fontFamily: "Syne" }}>
            Kristen Jim.
          </span>
        </HeadeText>

        <Text>
          A passionate UI/UX designer with a penchant for creating experiences
          that make you smile. I'm not your typical designer; I'm your friendly
          neighborhood creative enthusiast. When I'm not pushing pixels and
          wireframing, you'll find me sipping on a chai latte or chasing sunsets
          at the beach.
        </Text>
      </HeadingContainer>
      <BackgroundGlow />
      <MaltaImg src={imsSrc} />
    </MainContainer>
  );
};
export default SectionOne;
1;
