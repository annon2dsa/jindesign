import React, { useState } from "react";
import { styled } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import ReactSimplyCarousel from "react-simply-carousel";

// const MainContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//     gap:"110px",
//     [theme.breakpoints.down("sm")]: {
//       gap: "40px",
//     height: "100%",
//     alignItems: "center",
//     flexDirection: "column",
//     marginTop: "4rem",
//   },
// }));

const Headding = styled(Typography)(({ theme }) => ({
  margin: "110px 0px 110px 0px",
  fontSize: "48px",
  fontWeight: 600,
  color: "#8ED6FF",
}));

const TestimonialCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  width: "399px",
  padding: "16px",
  background: "#1A1D1F",
  borderRadius: "12px",
  gap: "16px",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    border: "1px solid #8ED6FF",
  },
}));

const ProfileImg = styled("img")(({ theme }) => ({
  height: "44px",
  width: "44px",
  borderRadius: "44px",
}));

const InnerCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "14px",
  [theme.breakpoints.down("sm")]: {
    gap: "12px",
  },
}));

const HeadCard = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "4px",
}));

const HeadText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  //   lineHeight: "30px",
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));

const SubText = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: 600,
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));
const SubTextText = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  fontWeight: 500,
  color: "#FFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    fontWeight: 500,
  },
}));

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonialData = [
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
    {
      img: "/images/kristen.svg",
      name: "Daavide Costa",
      occup: "Excorp Ltd.",
      body: `
              l designer; I'm your friendly neighborhood creative enthusiast.
              When I'm not pushing pixch. l designer; I'm your friendly
              neighborhood creative enthusiast. When I'm not pushing pixch.l
              designer; I'm your friendly neighborhood creative enthusiast. When
              I'm not pushing pixch.l designer; I'm your friendly neighborhood
              creative enthusiast. When I'm not pushing pixch.
          `,
    },
  ];

  //   const settings = {
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     variableWidth: true,
  //     centerMode: true,
  //     focusOnSelect: true,
  //     };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true,
  };

  return (
    <React.Fragment>
      <Headding>Testimonials</Headding>
      <ReactSimplyCarousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between",
            userSelect: "none",
          },
        }}
        preventScrollOnSwipe
        swipeTreshold={60}
        activeSlideIndex={activeSlide}
        // activeSlideProps={{
        //   style: {
        //     background: "blue",
        //   },
        // }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        backwardBtnProps={{
          style: {
            display: "none",
          },
        }}
        // dotsNav={{
        //   show: true,
        //   itemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       borderRadius: "50%",
        //       border: 0,
        //     },
        //   },
        //   activeItemBtnProps: {
        //     style: {
        //       height: 16,
        //       width: 16,
        //       borderRadius: "50%",
        //       border: 0,
        //       background: "black",
        //     },
        //   },
        // }}
        itemsToShow={2}
        speed={400}
        centerMode
      >
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <ProfileImg src={testimonial.img} />
            <InnerCard>
              <HeadCard>
                <HeadText>{testimonial.name}</HeadText>
                <SubText>{testimonial.occup}</SubText>
              </HeadCard>
              <SubText sx={{ lineHeight: "30px" }}>{testimonial.body}</SubText>
            </InnerCard>
          </TestimonialCard>
        ))}
      </ReactSimplyCarousel>
      {/* </Slider>npm install react-simply-carousel --save */}
    </React.Fragment>
  );
};
export default Testimonials;
