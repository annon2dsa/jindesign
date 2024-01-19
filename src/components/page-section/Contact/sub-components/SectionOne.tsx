import React from "react";
import { styled } from "@mui/system";
import { Typography, TextField } from "@mui/material";
const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  height: "calc(100vh - 4rem)",
  padding: "1rem",
  gap: "110px",
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    marginTop: "4rem",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  fontWeight: 700,
  lineHeight: "86px",
  color: "#fff",
  width: "685px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
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

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
}));

const FormContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "32px",
  padding: "1rem 1rem 1rem 0rem",
  width: "100%",
}));

const TextContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "1rem",
  borderTop: "1px solid #364F5C",
  width: "584px",
  // padding: "32px 0px 32px 0px",
}));

const Question = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "32px",
  fontWeight: 600,
  lineHeight: "normal",
  color: "#fff",
  gap: "32px",
  marginTop: "32px",
}));

const ContactCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "54px",
  padding: "1rem",
  width: "254px",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "normal",
  color: "#8ED6FF",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "normal",
  color: "#fff",
}));

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "12px",
}));

const SectionOne = () => {
  return (
    <MainContainer>
      <BackgroundGlow />
      <Heading>
        Let’s talk about <br /> your{" "}
        <span style={{ color: "#8ED6FF" }}>new project</span>
      </Heading>
      <ContentContainer>
        <FormContainer>
          <TextContent>
            <Question>
              <span style={{ fontSize: "16px" }}>01</span> What’s your name?
            </Question>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </TextContent>
          <TextContent>
            <Question>
              <span style={{ fontSize: "16px" }}>01</span> What’s your name?
            </Question>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </TextContent>
          <TextContent>
            <Question>
              <span style={{ fontSize: "16px" }}>01</span> What’s your name?
            </Question>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </TextContent>
        </FormContainer>
        <ContactCard>
          <Content>
            <SubText>Contact Details</SubText>
            <Text>Phone</Text>
            <Text>Email</Text>
          </Content>
          <Content>
            <SubText>Socials</SubText>
            <Text>Behance</Text>
          </Content>
        </ContactCard>
      </ContentContainer>
    </MainContainer>
  );
};
export default SectionOne;
