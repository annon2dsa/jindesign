import { Box, styled } from "@mui/system";
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

const SubContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  // width: "100%",
  gap: "1rem",
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  gap: "1rem",
}));

const HeadeText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.75rem",
  lineHeight: "24px",
  color: "#8ED6FF",
}));

const HeadSub = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "24px",
  color: "#FFFFFF",
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

const ContentContainerTwo = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem",
  height: "304px",
  [theme.breakpoints.down("lgPlus")]: {
    height: "100%",
    width: "412px",
  },
}));

const CashUpImage = styled("img")(({ theme }) => ({
  height: "304px",
  maxHGeight: "304px",
  width: "521px",
  flexShrink: 0,
  borderRadius: "1.625rem",
  [theme.breakpoints.down("lgPlus")]: {
    height: "245px",
    width: "440px",
  },
  [theme.breakpoints.down("md")]: {
    height: "100%",
    width: "412px",
  },
}));

const ProjectContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "42px 64px 42px 64px",
  gap: "40px",
  borderRadius: "1.625rem",
  // border: "solid 2px #8ED6FF",
  background: "#1A1D1F",
  backgroundClip: "padding-box",
  "&:after": {
    position: "absolute",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background:
      "linear-gradient(252.31deg, #8ED6FF -20.25%, rgba(142, 214, 255, 0) 104.33%)",
    content: "''",
    zIndex: -1,
    borderRadius: "1.625rem",
  },
  [theme.breakpoints.down("md1190")]: {
    flexDirection: "column",
  },
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
        <div style={
          {
            display: "flex",
            flexDirection: "row",
            gap: "16px",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }
        }>
          <HeadSub sx={{ color: "#8ED6FF" }}>UI UX Projects</HeadSub>
          <HeadSub>Graphic Design</HeadSub>
        </div>
      </HeadingContainer>
      <Fade>
        <ProjectContainer>
          <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
          <ContentContainerTwo>
            <SubContainer sx={{ flexDirection: "column" }}>
              <Text>Cash Up</Text>{" "}
              <SubText>
                I believe that design isn't just about aesthetics; it's about
                crafting delightful and meaningful interactions I believe that
                design isn't just about aesthetics; it's about crafting
                delightful and meaningful interactions
              </SubText>
            </SubContainer>

            <Button
              sx={{
                width: "201px",
                height: "58px",
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
        </ProjectContainer>
      </Fade>
    </MainContainer>
  );
};
export default SectionThree;
