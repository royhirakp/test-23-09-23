import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "./SliderCard";
import { Box } from "@mui/material";
const data = [
  {
    img: "/banner-1.jpg",
  },
  {
    img: "/banner-2.jpg",
  },
  {
    img: "/banner-3.jpg",
  },
];

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <Box sx={{ width: "100%", borderRadius: "20%" }}>
      <Slider {...settings}>
        {data.map((item, i) => {
          return (
            <div key={i * 0.02}>
              <SliderCard data={item} />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
}
