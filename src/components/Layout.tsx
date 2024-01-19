// src/components/Layout.js

import Header from "./Header";
import Footer from "./Footer";
import { styled } from "@mui/system";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Main = styled("main")(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
  },
})); 

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <Main >
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export default Layout;
