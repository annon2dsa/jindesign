import React from "react";
import { styled } from "@mui/system";
import { Typography, IconButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  gap: "1rem",
  // marginTop: "8rem",
}));

const MarqueeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "1rem",
  gap: "1rem",
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.5rem",
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontWeight: 300,
  fontSize: "1rem",
  lineHeight: "1.188rem",
  color: "#FFFFFF",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "3rem",
  lineHeight: "3.65rem",
  color: "#FFFFFF",
  textAlign: "left",
  paddingLeft: "5rem",
  maxWidth: "49.688rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    lineHeight: "140%",
    fontWeight: 700,
    paddingLeft: "0rem",
  },
}));

const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "spa",
  alignItems: "flex-start",
  gap: "2.5rem",
  marginTop: "6rem",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    marginTop: "0rem",
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  // width: "100%",
  paddingLeft: "5rem",
  [theme.breakpoints.down("sm")]: { paddingLeft: "0rem" },
}));

const AboutIcon = styled(IconButton)(({ theme }) => ({
  height: "14.438rem",
  width: "14.438rem",
  background: "#8ED6FF",
  "&hover": {
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    width: "128px",
    height: "128px",
  },
}));

const AboutButtonContainer = styled("div")(({ theme }) => ({
  padding: "0r3em",
  margin: "0rem",
  width: "30%",
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "353px",
  },
}));

const SectionTwo = () => {
  const marqueeFunction = () => {
    return (
      <MainContainer
        sx={{
          flexDirection: "row",
          margin: "0rem",
          padding: "0rem",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        <Image
          sx={
            {
              // maxWidth: "1115px",
            }
          }
          src="/images/marqee1.svg"
          alt="marqee1"
        />
      </MainContainer>
    );
  };
  const marqueeFunctionTwo = () => {
    return (
      <MainContainer
        sx={{
          flexDirection: "row",
          margin: "0rem",
          padding: "0rem",
          overflow: "hidden",
          gap: "2rem",
        }}
      >
        <Image
          sx={
            {
              // maxWidth: "1115px",
            }
          }
          src="/images/marqee2.svg"
          alt="marqee2"
        />
      </MainContainer>
    );
  };

  const handleButtonClick = () => {
    // Replace 'recipient@example.com' with the actual email address
    const toAddress = "kjim400@gmail.com.com";

    // Construct the Gmail URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      toAddress
    )}`;

    // Open the default email client with the new email composition window
    window.open(gmailUrl, "_blank");
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
    console.log("clicked");
  };

  return (
    <MainContainer>
      <AboutContainer>
        <TextContainer
          sx={{
            gap: "2rem",
          }}
        >
          <MainText>
            Design isn't just my job; it's my{" "}
            <span style={{ color: "#8ED6FF" }}>passion.</span> I'm always on the
            lookout for exciting new projects and creative challenges.
          </MainText>
          <AboutButtonContainer>
            <AboutIcon onClick={handleClick}>
              <SubText>About Me :)</SubText>
            </AboutIcon>
          </AboutButtonContainer>
        </TextContainer>
        <ButtonContainer>
          <Button
            sx={{
              width: "12.563rem",
              borderRadius: "5.563rem",
              textTransform: "none",
            }}
            variant="outlined"
            color="secondary"
            onClick={handleButtonClick}
          >
            Let's talk
          </Button>
        </ButtonContainer>
      </AboutContainer>
    </MainContainer>
  );
};
export default SectionTwo;
