import React from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "145px",
  gap: "145px",
}));

const Image = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    maxWidth: "353px",
  },
}));

const BackgroundGlow = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "45.25rem",
  flexShrink: 0,
  //   borderRadius: "1115",
  background:
    "linear-gradient(177deg, rgba(19, 21, 22, 0.00) 2.67%, #131516 93.19%)",
//   filter: "blur(100px)",
  zIndex: 1,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "10rem",
      borderRadius: "25rem",
    marginTop: "10rem",
  },
  marginTop: "15rem",
}));

const UserInterface = () => {
  return (
    <MainContainer>
      <Image
        src="/images/user_interface.svg"
        alt="user_interface"
      />
      <BackgroundGlow />
    </MainContainer>
  );
};
export default UserInterface;
