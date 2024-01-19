import React from "react";
import { styled } from "@mui/system";
import Layout from "../../../Layout";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "7.5rem",
  gap: "1rem",
  backgroundColor: "#131516",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

const HeadContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "61px",
  marginTop: "60px",
  width: "100%",
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1.938rem",
  maxWidth: "12.563rem",
  height: "100%",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "3.6rem",
  color: "#8ED6FF",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "1.8756rem",
  color: "#FFFFFF",
}));

const CashUpImage = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  flexShrink: 0,
  borderRadius: "1.625rem",
  [theme.breakpoints.down("sm")]: {
    width: "10.25rem",
  },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  gap: "145px",
  marginTop: "145px",
}));

const OverviewContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "24px",
  //   marginTop: "145px",
  width: "100%",
}));

const Head = styled(Typography)(({ theme }) => ({
  color: "#8ED6FF",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "normal",
}));

const Sub = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "30px",
  color: "#FFFFFF",
  maxWidth: "836px",
  width: "100%",
}));

const ProblemSolutionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "245px",
  alignSelf: "stretch",
}));

const ProblemContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  maxWidth: "479px",
  width: "100%",
  gap: "23px",
}));

const StepperContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
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

const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "200px",
  width: "131px",
  border: "1px solid #8ED6FF",
  borderRadius: "65.5px",
}));

const StepperText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "30px",
}));

const ServeyAndQAContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "100px",
  width: "100%",
}));

const ProgressContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "50px",
}));

const CashUp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <Layout>
      <MainContainer>
        <Button
          sx={{
            width: "156px",
            height: "58px",
            padding: "10px",

            borderRadius: "89px",
            textTransform: "none",
            gap: "10px",
            border: "1px solid #FFFFFF",
          }}
          variant="outlined"
          color="secondary"
          onClick={handleClick}
        >
          <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
          Back
        </Button>
        <HeadContainer sx={{ marginBottom: "82px" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Cash Up
          </Typography>
          <InfoContainer>
            <InfoContainer sx={{ gap: "0.5rem", flexDirection: "column" }}>
              {" "}
              <SubText sx={{ color: "#C2DBE9" }}>Role</SubText>
              <Text
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  lineHeight: "1rem",
                }}
              >
                UX/UI Designer
              </Text>
            </InfoContainer>
            <InfoContainer sx={{ gap: "0.5rem", flexDirection: "column" }}>
              {" "}
              <SubText sx={{ color: "#C2DBE9" }}>Year</SubText>
              <Text
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  lineHeight: "1rem",
                }}
              >
                2020
              </Text>
            </InfoContainer>
          </InfoContainer>
        </HeadContainer>
        <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
        <ContentContainer>
          <OverviewContainer>
            <Head>Overview</Head>
            <Sub>
              CashUp is a money saving and tacking app which consists of
              features like budgeting, splitting money, helps in checking
              returns on investment and motivates the user to achieve the goals
              by tracking their spending via messages received from the bank and
              also allows the user to record offline transactions.
            </Sub>
          </OverviewContainer>
          <ProblemSolutionContainer>
            <ProblemContainer>
              <Head>The Problem</Head>
              <Sub>
                The problem that young adults are facing is how to manage their
                money. Saving money is important and it will help in providing
                financial stability and freedom. The biggest problem that people
                are facing is not planning for their future plans and it causes
                lack of motivation to achieve their goals. People often spend
                more than their budget without tracking where the money is being
                spent. When there are a lot of people involved in an event, they
                often lose track of how much money they owe and who owes them.
              </Sub>
            </ProblemContainer>
            <ProblemContainer>
              <Head>The Solution</Head>
              <Sub>
                CashUp will help the user control their budget by tracking the
                money spent each time they make an online payment by tracking
                messages from the bank and cash payment can be manually entered.
                It allows them to set a goal which would motivate them to save.
                CashUp also allows the user to split the finances evenly.
              </Sub>
            </ProblemContainer>
          </ProblemSolutionContainer>
          <StepperContainer>
            <BackgroundGlow />
            <ContentBox>
              <StepperText>Discover</StepperText>
            </ContentBox>
            <div
              style={{
                borderStyle: "dashed",
                width: "3rem",
                border: "1px dashed #8ED6FF",
              }}
            ></div>
            <ContentBox>
              <StepperText>Define</StepperText>
            </ContentBox>
            <div
              style={{
                borderStyle: "dashed",
                width: "3rem",
                border: "1px dashed #8ED6FF",
              }}
            ></div>
            <ContentBox>
              <StepperText>Ideate</StepperText>
            </ContentBox>
            <div
              style={{
                borderStyle: "dashed",
                width: "3rem",
                border: "1px dashed #8ED6FF",
              }}
            ></div>
            <ContentBox>
              <StepperText>Prototype</StepperText>
            </ContentBox>
            <div
              style={{
                borderStyle: "dashed",
                width: "3rem",
                border: "1px dashed #8ED6FF",
              }}
            ></div>
            <ContentBox>
              <StepperText>Testing</StepperText>
            </ContentBox>
          </StepperContainer>
          <ServeyAndQAContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flsex-start",
                width: "100%",
                gap: "318px",
              }}
            >
              <Head>Survey</Head>
              <Sub>
                The survey was conducted to understand the user’s spending
                habits and how they manage their money. The survey was conducted
                on 10 people.
              </Sub>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
                gap: "256px",
              }}
            >
              <Head sx={{ width: "187px" }}>Qualitative Analysis</Head>
              <Sub>
                1) How usually do you manage your money?
                <br /> 2) What are the problems while trying to save money?{" "}
                <br /> 3) Do you keep a track of your expenses?
                <br /> 4) What would motivate you to save money?
                <br /> 5) What do you do during a crisis?
                <br />
                6) Are you aware of your expenses?
                <br /> 7) How do you control your income and spending?
                <br /> 8) What techniques do you use to manage your unnecessary
                expenses?
                <br /> 9) Have you ever used an application to track your
                expenses? Was it helpful? What were the issues?
              </Sub>
            </div>
            <Head>Quantitative Analysis</Head>
            <ProgressContainer></ProgressContainer>
          </ServeyAndQAContainer>
        </ContentContainer>
      </MainContainer>
    </Layout>
  );
};

export default CashUp;
