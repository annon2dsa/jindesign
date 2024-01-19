import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import SouthEastIcon from "@mui/icons-material/SouthEast";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "1rem",
  gap: "2rem",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "2rem",
  width: "2rem",
}));

const HeadingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
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
  fontSize: "0.75rem",
  lineHeight: "140%",
  color: "#FFFFFF",
}));

const AboutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "1rem",
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
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem",
}));

const CashUpImage = styled("img")(({ theme }) => ({
  //   maxHeight: "26.375rem",
  maxWidth: "20.25rem",
  flexShrink: 0,
  borderRadius: "1.625rem",
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "1.938rem",
  width: "100%",
  height: "100%",
}));

const ProjectSectionMobile = () => {
  return (
    <MainContainer>
      <HeadingContainer>
        <HeadeText>My Projects</HeadeText>
        <Image src="/images/logo/Vector.svg" alt="logo" />
      </HeadingContainer>
      <AboutContainer>
        <ContentContainerOne>
          <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
          <Text>Cash Up</Text>
        </ContentContainerOne>
        <ContentContainerTwo>
          {/* <InfoContainer sx={{ flexDirection: "row" }}>
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
          </InfoContainer> */}
          <SubText>
            I believe that design isn't just about aesthetics; it's about
            crafting delightful and meaningful interactions I believe that
            design isn't just about aesthetics; it's about crafting delightful
            and meaningful interactions
          </SubText>
          <Button
            sx={{
              width: "100%",
              borderRadius: "5.563rem",
              textTransform: "none",
            }}
            variant="outlined"
            color="secondary"
          >
            View project
          </Button>
        </ContentContainerTwo>
      </AboutContainer>
      <AboutContainer>
        <ContentContainerOne>
          <CashUpImage src="/images/logo/cashup2.png" alt="cashup" />
          <Text>Cash Up</Text>
        </ContentContainerOne>
        <ContentContainerTwo>
          <InfoContainer sx={{ flexDirection: "row" }}>
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
          <SubText>
            I believe that design isn't just about aesthetics; it's about
            crafting delightful and meaningful interactions I believe that
            design isn't just about aesthetics; it's about crafting delightful
            and meaningful interactions
          </SubText>
          <Button
            sx={{
              width: "100%",
              borderRadius: "5.563rem",
              textTransform: "none",
            }}
            variant="outlined"
            color="secondary"
          >
            View project <SouthEastIcon sx={{ height: "1rem" }} />
          </Button>
        </ContentContainerTwo>
      </AboutContainer>
    </MainContainer>
  );
};
export default ProjectSectionMobile;
