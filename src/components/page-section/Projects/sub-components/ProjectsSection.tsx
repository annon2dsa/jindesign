import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import { Fade } from "react-awesome-reveal";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "1rem",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "2rem",
  width: "2rem",
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  // width: "100%",
  gap: "1rem",
}));

const HeadeText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.75rem",
  lineHeight: "3.6rem",
  color: "#8ED6FF",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "2rem",
  lineHeight: "3.6rem",
  color: "#8ED6FF",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "30px",
  color: "#FFFFFF",
}));

const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "42px 64px 42px 64px",
  gap: "70px",
  borderRadius: "1.625rem",
  border: "solid 2px #8ED6FF",
  background: "#1A1D1F",
  backdropFilter: "blur(2px)",
  height: "365px",
  maxWidth: "1200px"
}));

const ContentContainerTwo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem",
  // width: "542px",
  maxHeight: "304px",
  height: "304px",
}));

const CashUpImage = styled("img")(({ theme }) => ({
  // height: "304px",
  height: "304px",
  width: "521px",
  flexShrink: 0,
  borderRadius: "1.625rem",
}));

const SectionThree = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate("/cashup");
  };

  return (
    <MainContainer>
      <HeadingContainer>
        <HeadeText>My Projects</HeadeText>
      </HeadingContainer>
      <Fade>
        <AboutContainer>
          <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
          <ContentContainerTwo>
            <HeadingContainer>
              <Text>Cash Up</Text>{" "}
              <SubText>
                I believe that design isn't just about aesthetics; it's about
                crafting delightful and meaningful interactions I believe that
                design isn't just about aesthetics; it's about crafting
                delightful and meaningful interactions
              </SubText>
            </HeadingContainer>

            <Button
              sx={{
                width: "201px",
                borderRadius: "5.563rem",
                textTransform: "none",
              }}
              variant="outlined"
              color="secondary"
              onClick={handleClick}
            >
              View project <SouthEastIcon sx={{ height: "1rem" }} />
            </Button>
          </ContentContainerTwo>
        </AboutContainer>
      </Fade>
    </MainContainer>
  );
};
export default SectionThree;
