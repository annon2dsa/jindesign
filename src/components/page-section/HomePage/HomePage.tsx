import React from "react";
import { styled } from "@mui/system";
import SectionOne from "./sub-components/SectionOne";
import Layout from "../../Layout";
import SectionTwo from "./sub-components/SectionTwo";
import SectionThree from "./sub-components/SectionThree";
import SectionThreeMobile from "./sub-components/SectionThreeMobile";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Marquee from "react-fast-marquee";
import MarqueeComponent from "../Other/MarqueeComponent";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  backgroundColor: "#131516",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

const HomePage = () => {
  React.useEffect(() => {
    // Set the scroll position to the top
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <MainContainer>
        <SectionOne />
        <MarqueeComponent />
        <SectionTwo />
        {/* <SectionThree /> */}
        <SectionThreeMobile />
        {/* <Button
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: "normal",
            textTransform: "none",
            height: "58px",
            width: "228px",
            color: "#000",
            backgroundColor: " #8ED6FF",
            borderRadius: "89px",
            "&hover": {
              color: "#fff", backgroundColor: "#8ED6FF",
            },
          }}
          placeholder="View all projects"
        >
          View all Projects <ArrowForwardIcon />
        </Button> */}
      </MainContainer>
    </Layout>
  );
};

export default HomePage;
