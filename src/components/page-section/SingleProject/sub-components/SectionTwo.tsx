import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "2rem",
  },
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

const SectionTwo = () => {
  const navigate = useNavigate();

  return (
    <ContentContainer>
      <OverviewContainer>
        <Head>Overview</Head>
        <Sub>
          CashUp is a money saving and tacking app which consists of features
          like budgeting, splitting money, helps in checking returns on
          investment and motivates the user to achieve the goals by tracking
          their spending via messages received from the bank and also allows the
          user to record offline transactions.
        </Sub>
      </OverviewContainer>
      <ProblemSolutionContainer>
        <ProblemContainer>
          <Head>The Problem</Head>
          <Sub>
            The problem that young adults are facing is how to manage their
            money. Saving money is important and it will help in providing
            financial stability and freedom. The biggest problem that people are
            facing is not planning for their future plans and it causes lack of
            motivation to achieve their goals. People often spend more than
            their budget without tracking where the money is being spent. When
            there are a lot of people involved in an event, they often lose
            track of how much money they owe and who owes them.
          </Sub>
        </ProblemContainer>
        <ProblemContainer>
          <Head>The Solution</Head>
          <Sub>
            CashUp will help the user control their budget by tracking the money
            spent each time they make an online payment by tracking messages
            from the bank and cash payment can be manually entered. It allows
            them to set a goal which would motivate them to save. CashUp also
            allows the user to split the finances evenly.
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
    </ContentContainer>
  );
};

export default SectionTwo;
