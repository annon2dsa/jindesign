import * as React from "react";
import { styled } from "@mui/system";
import Layout from "../../Layout";
import SectionOne from "./sub-components/SectionOne";
import SectionTwo from "./sub-components/SectionTwo";
import SectionThree from "./sub-components/SectionThree";
import SectionFour from "./sub-components/SectionFour";
import SectionFive from "./SectionFive";
import EmpathyMap from "./sub-sections/EmpathyMap";
import LayoutGrid from "./sub-sections/LayoutGrid";
import UserInterface from "./sub-sections/UserInterface";
import UserOnboarding from "./sub-sections/UserOnboarding";
import HomeScreen from "./sub-sections/HomeScreen";
import Budgeting from "./sub-sections/Budgeting";
import Splitmoney from "./sub-sections/SplitMoney";
import SetGoals from "./sub-sections/SetGoals";
const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "7.5rem",
  gap: "1rem",
  backgroundColor: "#131516",
  [theme.breakpoints.down("lgPlus")]: {
    padding: "5rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "0rem",
  },
}));

const CashUp = () => {
  React.useEffect(() => {
    // Set the scroll position to the top
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <MainContainer>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <EmpathyMap />
        <LayoutGrid />
        <UserInterface />
        <UserOnboarding />
        <HomeScreen />
        <Budgeting />
        <Splitmoney />
        <SetGoals />
      </MainContainer>
    </Layout>
  );
};

export default CashUp;
