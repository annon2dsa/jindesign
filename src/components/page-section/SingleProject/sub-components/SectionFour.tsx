import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const MainContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  width: "100%",
  marginTop: "145px",
  gap: "145px",
  // maxWidth: "1115px",
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background:
    "radial-gradient(38.91% 56.14% at 47.71% 64.67%, rgba(142, 214, 255, 0.20) 21.81%, rgba(142, 214, 255, 0.00) 100%)",
}));

const Image = styled("img")(({ theme }) => ({
  // width: "988px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "353px",
  },
}));

const ContentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "254px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}));

const FrustrationContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "32px",
  width: "100%",
  // maxWidth: "467px",
}));

const FrustrationContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "32px",
  width: "100%",
}));

const Head = styled(Typography)(({ theme }) => ({
  color: "#8ED6FF",
  fontSize: "40px",
  fontWeight: 500,
  lineHeight: "normal",
}));

const Sub = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "30px",
  color: "#FFFFFF",
  maxWidth: "836px",
  width: "100%",
}));

const GoalsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "32px",
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
  marginTop: "-8rem",
}));

const TypoAndColorContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "54px",
  width: "100%",
  // maxWidth: "1115px",
}));

const TypographyContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  //   gap: "43px ",
}));

const TypoText = styled(Typography)(({ theme }) => ({
  color: "#8ED6FF",
  fontSize: "178.333px",
  fontWeight: 500,
  lineHeight: "107px",
}));

const InterContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "28px",
  width: "100%",
}));

const InterText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "67.046px",
  fontWeight: 500,
  lineHeight: "40.228px",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "30px",
  fontWeight: 500,
  lineHeight: "40.228px",
}));

const TextContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  //   width: "100%",
  gap: "43px ",
}));

const ColorContainer = styled("div")(({ theme }) => ({}));

const SectionFour = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <Image
          sx={{
            maxWidth: "1115px",
          }}
          src="/images/project_phone.svg"
          alt="phone"
        />
      </ImageContainer>
      <ContentContainer>
        <FrustrationContainer>
          <Head>Frustrations</Head>
          <FrustrationContent>
            <Sub>
              <ul>
                <li>Not tracking money</li>
                <li>Excessive spending</li>
                <li>Cannot achieve goals</li>
                <li>No investment plan</li>
              </ul>
            </Sub>
            <Sub>
              <ul>
                <li>Bad interface</li>
                <li>Borrowing money</li>
                <li>Causes stress</li>
                <li>Savings</li>
              </ul>
            </Sub>
          </FrustrationContent>
        </FrustrationContainer>
        <GoalsContainer>
          <Head>Goals</Head>
          <Sub>
            Reaching a reasonable spending module by tacking the income. This
            approach leads to an increase in savings of the users by managing
            expenses and reducing the unnecessary ones. In addition, seeing the
            goal continuously and linking it to the amount of savings, motivates
            the user in this path.
          </Sub>
        </GoalsContainer>
      </ContentContainer>

      {/* <BackgroundGlow /> */}
      <TypoAndColorContainer>
        <Image
          sx={{
            // maxWidth: "1115px",
          }}
          src="/images/typo_and_color.svg"
          alt="typo_and_color"
        />
      </TypoAndColorContainer>
      {/* <Head>Typography and colors</Head>
        <TypographyContent>
          <TextContent>
            <TypoText>Aa</TypoText>
            <InterContent>
              <InterText>Inter</InterText>
              <Text>Bold, Medium, Light</Text>
            </InterContent>
          </TextContent>
          <TextContent>
            <ColorContainer
              sx={{
                width: "200px",
                height: "181px",
                background: "#448EFC",
                borderRadius: "16px",
              }}
            />
            <ColorContainer
              sx={{
                width: "200px",
                height: "181px",
                background: "#F05959",
                borderRadius: "16px",
              }}
            />
          </TextContent>
        </TypographyContent>
        <TextContent sx={{ gap: "24px" }}>
          <ColorContainer
            sx={{
              width: "220.8px",
              height: "81px",
              background: "#00AAAD",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "220.8px",
              height: "81px",
              background: "#F95F30",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "220.8px",
              height: "81px",
              background: "#EA5C81",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "220.8px",
              height: "81px",
              background: "#B2D235",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "220.8px",
              height: "81px",
              background: "#FFCC23",
              borderRadius: "16px",
            }}
          />
        </TextContent>
        <TextContent sx={{ gap: "24px" }}>
          <ColorContainer
            sx={{
              width: "384px",
              height: "81px",
              background: "#1F2C37",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "384px",
              height: "81px",
              background: "#8E969C",
              borderRadius: "16px",
            }}
          />
          <ColorContainer
            sx={{
              width: "384px",
              height: "81px",
              background: "#C8C8C8",
              borderRadius: "16px",
            }}
          />
        </TextContent>
      </TypoAndColorContainer> */}
    </MainContainer>
  );
};
export default SectionFour;
