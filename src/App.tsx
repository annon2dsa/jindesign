// App.js

/* @mui imports */

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";

/* Lets import the components */
import Theme from "./components/Theme";
import AboutMe from "./components/page-section/AboutMe/AboutMe";
import HomePage from "./components/page-section/HomePage/HomePage";
import Projects from "./components/page-section/Projects/Projects";
import ContactMe from "./components/page-section/Contact/ContactMe";
import CashUp from "./components/page-section/SingleProject/CashUp";

const MainContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#131516",
}));

const App = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <ThemeProvider theme={Theme}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/cashup" element={<CashUp />} />
          </Routes>
        </ThemeProvider>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
