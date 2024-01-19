import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

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

const ServeyAndQAContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "100px",
  width: "100%",
  marginTop: "145px",
}));

const ProgressContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
  width: "100%",
}));

const Progress = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}));

const PrgressBar = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "33px",
  width: "193px",
  padding: "32px",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
}));

const DivContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flsex-start",
  width: "100%",
  gap: "318px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "50px",
  },
}));

const SectionThree = () => {
  return (
    <ServeyAndQAContainer>
      <DivContainer>
        <Head>Survey</Head>
        <Sub>
          The survey was conducted to understand the user’s spending habits and
          how they manage their money. The survey was conducted on 10 people.
        </Sub>
      </DivContainer>
      <DivContainer sx={{ gap: "256px" }}>
        <Head sx={{ width: "187px" }}>Qualitative Analysis</Head>
        <Sub>
          1) How usually do you manage your money?
          <br /> 2) What are the problems while trying to save money? <br /> 3)
          Do you keep a track of your expenses?
          <br /> 4) What would motivate you to save money?
          <br /> 5) What do you do during a crisis?
          <br />
          6) Are you aware of your expenses?
          <br /> 7) How do you control your income and spending?
          <br /> 8) What techniques do you use to manage your unnecessary
          expenses?
          <br /> 9) Have you ever used an application to track your expenses?
          Was it helpful? What were the issues?
        </Sub>
      </DivContainer>
      <Head>Quantitative Analysis</Head>
      <ProgressContainer>
        <Progress>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={84}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>84%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Reply on their bank statement to handle their finances.
              </Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={76}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>76%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Say it’s helpful having a specific saving goal can be in curbing
                unnecessary spending.
              </Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={37.5}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>37.5%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>Track their expenses.</Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={29}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>29%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Save specific amount from their monthy income.
              </Sub>
            </ContentContainer>
          </PrgressBar>
        </Progress>
        <Progress>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={89}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>89%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Say that tracking expenses will help to savemoney.
              </Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={28}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>28%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Allocate amount of money to variable expenses during the month.
              </Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={32}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>32%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Have used a budget tracking app
              </Sub>
            </ContentContainer>
          </PrgressBar>
          <PrgressBar>
            <CircularProgress
              size={100}
              variant="determinate"
              value={52}
              thickness={10}
            />
            <ContentContainer>
              <Head sx={{ fontSize: "28px" }}>52%</Head>
              <Sub sx={{ lineHeight: "174.5%" }}>
                Use savings during a financial crisis
              </Sub>
            </ContentContainer>
          </PrgressBar>
        </Progress>
      </ProgressContainer>
      <DivContainer>
        <Head>Results</Head>
        <Sub>
          I conducted a survey through a questionnaire to which I received 24
          responses. This helped me identify the real challenges. The responses
          gave a good result to know that most of the users are fresher’s and
          already working professionals between 22 to 40 age group as their main
          income comes from fixed salary. The survey showed that some people
          occasionally save money and are unable to achieve their goals due to
          losing track of their expenses. From the interview we found out that
          people need to manage and control their spending and also need to set
          long term goals. Using the savings money is the common option during a
          crisis and due to the lack of knowledge of investments they tend use
          the money for unnecessary purposes. The ones that have used other apps
          didn’t continue due to problems like bad interface and unnecessary
          data.
        </Sub>
      </DivContainer>
    </ServeyAndQAContainer>
  );
};

export default SectionThree;
