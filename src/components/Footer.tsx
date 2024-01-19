// src/components/Footer.js

// import Typography from "@mui/material/Typography";
import { useTheme } from "@emotion/react";
import { Button, Divider, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "390px",
  },
}));

const TopContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "0rem",
  height: "24.313rem",
  width: "100%",
  backgroundColor: "#8ED6FF",
  [theme.breakpoints.down("sm")]: {
    height: "162px",
    padding: "16px",
  },
}));

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

const LeftContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "36px",
  [theme.breakpoints.down("sm")]: {
    gap: "14.827px",
  },
}));

// const LeftContent = styled("div")(({ theme }) => ({
//   [theme.breakpoints.down("sm")]: {},
// }));

const BottomContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundColor: "#131516",
  height: "104.34px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "44px",
  },
}));

const AboutIcon = styled(IconButton)(({ theme }) => ({
  background: "#131516",
  height: "14.438rem",
  width: "14.438rem",
  "&hover": {
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MainText = styled(Typography)(({ theme }) => ({
  color: "#131516",
  fontFamily: "Syne",
  fontSize: "64px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  [theme.breakpoints.down("sm")]: {
    color: "#131516",
    fontSize: "18px",
    lineHeight: "140%",
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItens: "flex-start",
  gap: "24px",
  [theme.breakpoints.down("sm")]: {
    gap: "14.827px",
  },
}));

const EmailButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  display: "flex",
  padding: "15px 39px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  color: "#131516",
  fontFamily: "Syne",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  borderRadius: "34px",
  border: "1px solid #000",
  background: "#8ED6FF",
  [theme.breakpoints.down("sm")]: {
    width: "141.782px",
    padding: "13.9px 36.14px",
    fontFamily: "Syne",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
  },
}));

const PhoneButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  display: "flex",
  padding: "15px 39px",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  color: "#131516",
  fontFamily: "Syne",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  borderRadius: "34px",
  border: "1px solid #000",
  background: "#8ED6FF",
  [theme.breakpoints.down("sm")]: {
    width: "98px",
    padding: "13.9px 36.14px",
    fontFamily: "Syne",
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
  },
}));

const HeadContainer = styled("div")(({ theme }) => ({
  width: "930px",
  padding: "0px 0px 36px 0px",
  borderBottom: "1px solid #000",
  [theme.breakpoints.down("sm")]: {
    width: "189px",
    padding: "0px 0px 36px 0px",
  },
}));

const Line = styled(Divider)(({ theme }) => ({
  margin: "36px 0px",
  background: "#000000",
  height: "1px",
  [theme.breakpoints.down("sm")]: {
    width: "286.62px",
    margin: "14.83px 0px",
    background: "#000000",
  },
}));

const BottomText = styled(Typography)(({ theme }) => ({
  marginRight: "69px",
  fontSize: "1rem",
  fontWeight: 500,
  lineHeight: "normal",
  color: "#fff",
}));

const Footer = () => {
  const theme = useTheme();
  return (
    <MainContainer>
      <TopContent>
        <Container>
          <LeftContent>
            <HeadContainer>
              <MainText>Let’s work together</MainText>
            </HeadContainer>
            {/* <Line /> */}
            <ButtonContainer>
              <EmailButton variant="outlined" color="secondary">
                kjim400@gmail.com
              </EmailButton>
              <PhoneButton variant="outlined" color="secondary">
                +99049921
              </PhoneButton>
            </ButtonContainer>
          </LeftContent>
          <AboutIcon>
            <Typography
              sx={{
                color: "var(--GRADIENT, #8ED6FF)",
                fontFamily: "Syne",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
              }}
            >
              Get in touch!
            </Typography>
          </AboutIcon>
        </Container>
      </TopContent>
      <BottomContent>
        <BottomText variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Jim Design. All rights reserved.
        </BottomText>
      </BottomContent>
    </MainContainer>
  );
};

export default Footer;
