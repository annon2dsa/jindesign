import React from "react";
import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const HeadContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  height: "61px",
  marginTop: "60px",
  width: "100%",
}));

const InfoContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "1.938rem",
  maxWidth: "12.563rem",
  height: "100%",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "3.6rem",
  color: "#8ED6FF",
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "1.8756rem",
  color: "#FFFFFF",
}));

const CashUpImage = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  flexShrink: 0,
  borderRadius: "1.625rem",
  [theme.breakpoints.down("sm")]: {
    width: "10.25rem",
  },
}));

const SectionOne = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate("/");
  };

  return (
    <React.Fragment>
      <Button
        sx={{
          width: "156px",
          height: "58px",
          padding: "10px",

          borderRadius: "89px",
          textTransform: "none",
          gap: "10px",
          border: "1px solid #FFFFFF",
        }}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        <ArrowBackIcon sx={{ color: "#FFFFFF" }} />
        Back
      </Button>
      <HeadContainer sx={{ marginBottom: "82px" }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Cash Up
        </Typography>
        <InfoContainer>
          <InfoContainer sx={{ gap: "0.5rem", flexDirection: "column" }}>
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
          <InfoContainer sx={{ gap: "0.5rem", flexDirection: "column" }}>
            {" "}
            <SubText sx={{ color: "#C2DBE9" }}>Year</SubText>
            <Text
              sx={{
                color: "#ffffff",
                fontSize: "1rem",
                lineHeight: "1rem",
              }}
            >
              2020
            </Text>
          </InfoContainer>
        </InfoContainer>
      </HeadContainer>
      <CashUpImage src="/images/logo/cashup.png" alt="cashup" />
    </React.Fragment>
  );
};

export default SectionOne;
