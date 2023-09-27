"use client";
import SimpleBottomNavigation from "@/components/BottomNavigation/SimpleBottomNavigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer/Footer";
import Products from "@/components/Products/Products";
import SimpleSlider from "@/components/Slider/Slider";
import SliderCard from "@/components/Slider/SliderCard";
import SliderCardForMobile from "@/components/Slider/SliderCardForMobile";
import TestamonialSection from "@/components/testamonial/TestamonialSection";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container style={{}}>
        <SliderCardForMobile
          data={{
            img: "/banner-1.jpg",
          }}
        />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <SimpleSlider />
        </Box>
      </Container>
      <Container style={{}}>
        <Products />{" "}
      </Container>
      <Container style={{}}>
        <TestamonialSection />
      </Container>
      <Footer />
      <Box
        sx={{
          position: "fixed",
          zIndex: "9999",
          width: "100%",
          bottom: 0,
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <SimpleBottomNavigation />
      </Box>
    </div>
  );
};

export default Home;
