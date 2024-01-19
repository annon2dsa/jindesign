import React from "react";
import { styled } from "@mui/system";
import { IconButton, Typography } from "@mui/material";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "1rem",
  gap: "2.063rem",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    marginTop: "4rem",
  },
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  gap: "2rem",
  maxWidth: "100%",
}));

const HeadeText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3rem",
  lineHeight: "3.6rem",
  color: "#8ED6FF",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "5rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "2rem",
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
}));

const AboutIcon = styled(IconButton)(({ theme }) => ({
  height: "14.438rem",
  width: "14.438rem",
  background: "#8ED6FF",
  "&hover": {
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const AboutButtonContainer = styled("div")(({ theme }) => ({
  padding: "0r3em",
  margin: "0rem",
  width: "291px",
  "&:hover": {
    color: "#fff",
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: "1.188rem",
  color: "#000",
  "&:hover": {
    color: "#fff",
  },
}));

const DetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "10.75rem",
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "131px",
}));

const SectionTwo = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        {" "}
        <HeadeText>Work experience</HeadeText>
      </HeadingContainer>
      <ContentContainer>
        {/* <AboutButtonContainer>
          <AboutIcon>
            <SubText>Download Resume</SubText>
          </AboutIcon>
        </AboutButtonContainer> */}
        <DetailsContainer>
          <BackgroundGlow />
          <Container sx={{ width: "37.063rem" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "normal",
                color: "#FFFFFF",
                width: "116px",
              }}
            >
              2023 - Present
            </Typography>
            <Container
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
                width: "330px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                eCabs Malta
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                UX/UI Designer
              </Typography>
            </Container>
          </Container>
          <Container sx={{ width: "37.063rem" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "normal",
                color: "#FFFFFF",
                width: "116px",
              }}
            >
              2021 - 2022
            </Typography>
            <Container
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
                width: "330px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                EagleView
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                UX/UI Designer
              </Typography>
            </Container>
          </Container>
          <Container sx={{ width: "37.063rem" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "normal",
                color: "#FFFFFF",
                width: "116px",
              }}
            >
              2020 - 2021
            </Typography>
            <Container
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
                width: "330px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                Foxwell Productions
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                Graphic Designer
              </Typography>
            </Container>
          </Container>
          <Container sx={{ width: "37.063rem" }}>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "1rem",
                lineHeight: "normal",
                color: "#FFFFFF",
                width: "116px",
              }}
            >
              2019 - Present
            </Typography>
            <Container
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "1rem",
                width: "330px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "32px",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                Freelancer
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: "normal",
                  color: "#FFFFFF",
                }}
              >
                Graphic & UX/UI Designer
              </Typography>
            </Container>
          </Container>
        </DetailsContainer>
      </ContentContainer>
    </MainContainer>
  );
};
export default SectionTwo;
