import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "1rem",
  gap: "5.25rem",
  marginTop: "11.25rem",
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "2.466rem",
  width: "2.466rem",
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  // width: "100%",
  gap: "1rem",
  // paddingLeft: "5rem",
}));

const HeadeText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "3rem",
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
  lineHeight: "1.8756rem",
  color: "#FFFFFF",
}));

const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "1rem 2rem",
  gap: "0.625rem",
  borderRadius: "1.625rem",
  border: "solid 2px #8ED6FF",
  background: "#1A1D1F",
  backdropFilter: "blur(2px)",
}));

const ContentContainerOne = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "0.75rem",
}));

const ContentContainerTwo = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "5.5rem",
  width: "100%",
}));

const CashUpImage = styled("img")(({ theme }) => ({
  maxHeight: "26.375rem",
  maxWidth: "790px",
  flexShrink: 0,
  borderRadius: "1.625rem",
  [theme.breakpoints.down("sm")]: {
    width: "10.25rem",
  },
}));

const ContentContainerThree = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "9.438rem",
  height: "100%",
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.938rem",
  maxWidth: "12.563rem",
  height: "100%",
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
        <Image src="/images/logo/Vector.svg" alt="logo" />
      </HeadingContainer>
      <AboutContainer>
        <ContentContainerOne>
          <Text>Cash Up</Text>
          <SubText sx={{ maxWidth: "40rem" }}>
            I believe that design isn't just about aesthetics; it's about
            crafting delightful and meaningful interactions I believe that
            design isn't just about aesthetics; it's about crafting delightful
            and meaningful interactions
          </SubText>
        </ContentContainerOne>
        <ContentContainerTwo>
          <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
          <ContentContainerThree>
            <InfoContainer>
              <InfoContainer sx={{ gap: "0.5rem" }}>
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
              <InfoContainer sx={{ gap: "0.5rem" }}>
                {" "}
                <SubText
                  sx={{
                    color: "#C2DBE9",
                    fontSize: "0.75rem",
                    lineHeight: "1rem",
                  }}
                >
                  Project type
                </SubText>
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
            </InfoContainer>
            <Button
              sx={{
                width: "12.563rem",
                borderRadius: "5.563rem",
                textTransform: "none",
              }}
              variant="outlined"
              color="secondary"
              onClick={handleClick}
            >
              View project <SouthEastIcon sx={{ height: "1rem" }} />
            </Button>
          </ContentContainerThree>
        </ContentContainerTwo>
      </AboutContainer>
    </MainContainer>
  );
};
export default SectionThree;
