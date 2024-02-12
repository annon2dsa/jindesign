import React from "react";
import { keyframes, styled } from "@mui/system";
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
}));

const TextContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "180px",
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
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "normal",
  color: "#000",
  ":hover": {
    color: "#fff",
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

const quackAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-10px);
  }
  20% {
    transform: translateY(-15px);
  }
  30% {
    transform: translateY(-10px);
  }
  40% {
    transform: translateY(-15px);
  }
  40% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(-px);
  }
  60% {
    transform: translateY(-10px);
  }
  70% {
    transform: translateY(-15px);
  }
  80% {
    transform: translateY(-10px);
  }
  90% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  // width: "100%",
  paddingLeft: "5rem",
  [theme.breakpoints.down("sm")]: { paddingLeft: "0rem" },
  transition: "transform 0.3s ease-in-out",
  ":hover": {
    // transform: "scale(1.1)",
    animation: `${quackAnimation} 0.6s infinite`,
  },
}));

const AboutIcon = styled(IconButton)(({ theme }) => ({
  height: "14.438rem",
  width: "14.438rem",
  background: "#8ED6FF",
  transition: "transform 0.3s ease-in-out",
  ":hover": {
    transform: "scale(1.5)",
    background: "#8ED6FF",
    boxShadow: "0px 0px 10px #8ED6FF",
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

const colorChangeAnimation = keyframes`
  0% {
    color: #8ED6FF;
  }
  50% {
    color: #FFA500;  // Change to your desired color
  }
  100% {
    color: #8ED6FF;
  }
`;

const colorAmination = keyframes`
 0% {
    color: ;
  }
  50% {
    color: #8ED6FF;  // Change to your desired color
  }
  100% {
    color: #FFFFF;
  }
`;

const TextSpan = styled("span")(({ theme }) => ({
  animation: `${colorChangeAnimation} 5s infinite`, // Adjust the duration as needed
  transition: "transform 0.3s ease-in-out",
}));

const MainText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "3rem",
  lineHeight: "3.65rem",
  color: "#FFFFFF",
  textAlign: "left",
  paddingLeft: "5rem",
  maxWidth: "49.688rem",
  animation: `${colorAmination} 5s`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
    lineHeight: "140%",
    fontWeight: 700,
    paddingLeft: "0rem",
  },
}));

const SectionTwo = () => {
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
            Design isn't just my job;
            <br /> it's my <TextSpan>passion.</TextSpan> I'm always on the
            <br />
            lookout for exciting new projects <br />
            and creative challenges.
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
              height: "54px",
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
