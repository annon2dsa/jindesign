import React from "react";
import { styled } from "@mui/system";
import Layout from "../../Layout";
import SectionOne from "./sub-components/SectionOne";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "7.5rem",
  gap: "1rem",
  backgroundColor: "#131516",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

const AboutMe = () => {
  React.useEffect(() => {
    // Set the scroll position to the top
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <MainContainer>
        <SectionOne />
      </MainContainer>
    </Layout>
  );
};

export default AboutMe;
