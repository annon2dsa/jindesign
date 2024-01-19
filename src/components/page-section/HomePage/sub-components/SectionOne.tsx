import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "calc(100vh - 4rem)",
  padding: "1rem",
  gap: "3rem",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    marginTop: "10rem",
  },
}));

const ProfileBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "auto",
  maxWidth: "223px",
  maxHeight: "83px",
  height: "auto",
  background: "#1B272C",
  borderRadius: "51px",
  border: "3px solid rgba(142, 214, 255, 0.10)",
  padding: "6px 16px",
  gap: "8px",
  boxShadow: "0px 22px 30px 0px rgba(0, 0, 0, 0.10)",
  [theme.breakpoints.down("sm")]: {
    width: "10rem",
    gap: "0rem",
  },
}));

const Image = styled("img")(({ theme }) => ({
  objectFit: "cover",
  height: "59px",
  width: "59px",
  borderRadius: "50%",
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  width: "100%",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontFamily: "Syne",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "normal",
  fontStyle: "normal",
  // letterSpacing: "2px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    lineHeight: "normal",
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: "1.188rem",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    lineHeight: "normal",
    width: "100%",
  },
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "72px",
  lineHeight: "86px",
  color: "#FFFFFF",
  textAlign: "center",
  fontFamily: "Syne",
  width: "59.938rem",
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
  marginTop: "-6rem",
}));

const SectionOne = () => {
  return (
    <MainContainer sx={{ marginTop: "5.563rem" }}>
      <BackgroundGlow></BackgroundGlow>
      <Fade>
        <ProfileBox>
          {/* <ImageContainer> */}
          <Image src="/images/logo/profile.svg" alt="profile" />
          {/* </ImageContainer> */}
          <TextContainer
            sx={{
              alignItems: "flex-start",
            }}
          >
            <Text>Kristen Jim</Text>
            <SubText>UX/UI Designer</SubText>
          </TextContainer>
        </ProfileBox>
      </Fade>
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
          I design mindful user{" "}
          <span style={{ color: "#8ED6FF" }}>experiences</span> & seamless
          interfaces
        </MainText>
        <SubText sx={{ textAlign: "center", width: "35.063rem" }}>
          I believe that design isn't just about aesthetics; it's about crafting
          delightful and meaningful interactions
        </SubText>
      </TextContainer>
    </MainContainer>
  );
};
export default SectionOne;
