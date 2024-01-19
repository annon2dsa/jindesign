import React from "react";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "145px",
  gap: "145px",
}));

const MainTabContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  // width: "100%",
  gap: "16px",
  padding: "16px",
  borderRadius: "95px",
  border: "1px solid rgba(142, 214, 255, 0.60)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const TabsContainer = styled(Button)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 32px",
  borderRadius: "79px",
  textTransform: "none",
  ":active": {
    background: "#8ED6FF",
  },
  ":focus": {
    background: "#8ED6FF",
  },
  "&hover": {
    background: "#8ED6FF",
  },
  textDecoration: "none",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: 500,
  color: "#8ED6FF",
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "353px",
  },
}));

const Head = styled(Typography)(({ theme }) => ({
  color: "#8ED6FF",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "normal",
}));

const ImageContainer = styled("div")(({ theme }) => ({
  dfisplay: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  // width: "100%",
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

const SectionFive = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  return (
    <MainContainer>
      <MainTabContainer>
        <TabsContainer
          sx={
            value === 0
              ? {
                  background: "#8ED6FF",
                }
              : null
          }
          onClick={() => handleChange(0)}
        >
          <Text sx={value === 0 ? { color: "#1A1D1F" } : null} variant="h6">
            Competitor Analysis
          </Text>
        </TabsContainer>
        <TabsContainer
          sx={
            value === 1
              ? {
                  background: "#8ED6FF",
                }
              : null
          }
          onClick={() => handleChange(1)}
        >
          <Text sx={value === 1 ? { color: "#1A1D1F" } : null} variant="h6">
            Information Architecture
          </Text>
        </TabsContainer>
        <TabsContainer
          sx={
            value === 2
              ? {
                  background: "#8ED6FF",
                }
              : null
          }
          onClick={() => handleChange(2)}
        >
          <Text sx={value === 2 ? { color: "#1A1D1F" } : null} variant="h6">
            User Flow
          </Text>
        </TabsContainer>
      </MainTabContainer>
      {value === 0 ? (
        // <ImageContainer>
        <Image
          sx={{
            maxWidth: "1115px",
          }}
          src="/images/compietitor_analysis.png"
          alt="compietitor_analysis"
        />
      ) : // </ImageContainer>
      value === 1 ? (
        <Image
          sx={{
            maxWidth: "1115px",
          }}
          src="/images/information.png"
          alt="information"
        />
      ) : value === 2 ? (
        <Image
          sx={{
            maxWidth: "1115px",
          }}
          src="/images/user_flow.svg"
          alt="user_flow"
        />
      ) : (
        <Image
          sx={{
            maxWidth: "1115px",
          }}
          src="/images/compietitor_analysis.png"
          alt="compietitor_analysis"
        />
      )}
      {/* <ImageContainer>
        {" "}
        <BackgroundGlow/> 
        <Image
          sx={
            {
              // maxWidth: "1115px",
            }
          }
          src="/images/empathy_map.svg"
          alt="empathy_map"
        />
      </ImageContainer>

      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/layout_grid.svg"
        alt="layout_grid"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/user_interface.svg"
        alt="user_interface"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/user_onboarding.svg"
        alt="user_onboarding"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/home_screen.svg"
        alt="home_screen"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/budgeting.svg"
        alt="budgeting"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/split_money.svg"
        alt="split_money"
      />
      <Image
        sx={
          {
            // maxWidth: "1115px",
          }
        }
        src="/images/goals.svg"
        alt="goals"
      /> */}
    </MainContainer>
  );
};
export default SectionFive;
