import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography, AppBar, SwipeableDrawer } from "@mui/material";
import { Link } from "react-router-dom";

const HeadComponent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "2rem 4rem",
  backgroundColor: "#131516",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const LogoComponent = styled("img")(({ theme }) => ({
  maxWidth: "6.313rem",
  maxHeight: "3.125rem",
}));

const TabHead = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "2rem",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const TabComponent = styled(Button)(({ theme }) => ({
  color: "#fff",
}));

const Text = styled(Typography)(({ theme }) => ({
  font: "syne",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "normal",
  textDecoration: "none",
}));

const Header = () => {
  const [scrollY, setScrollY] = React.useState<number>(0);
  const [negativeScroll, setNegativeScroll] = React.useState<boolean>(true);

  React.useEffect(() => {
    /* First let's define an event listener */

    const handleScroll = () => {
      if (window.scrollY < scrollY) {
        setNegativeScroll(true);
      } else {
        setNegativeScroll(false);
      }
      setScrollY(window.scrollY);
    };
    /* Now we can add the event listener */

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={scrollY === 0 ? 0 : 3}
    >
      <HeadComponent sx={{ backdropFilter: scrollY !== 0 ? "blur(1rem)" : "" }}>
        <Link to="/">
          <LogoComponent src="/images/logo/jim.svg" alt="logo" />
        </Link>
        <TabHead>
          <Link
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
            to="/about"
          >
            <Text variant="subtitle1">About me</Text>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
            to="/projects"
          >
            <Text variant="subtitle1">Project</Text>
          </Link>
          {/* <Link
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
            to="/contact"
          >
            <Text
              style={{
                textDecoration: "none",
                color: "#FFFFFF",
              }}
              variant="subtitle1"
            >
              Contact
            </Text>
          </Link> */}
        </TabHead>
      </HeadComponent>
    </AppBar>
  );
};

export default Header;
