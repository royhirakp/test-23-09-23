"use client";
import SimpleBottomNavigation from "@/components/BottomNavigation/SimpleBottomNavigation";
import Container from "@/components/Container";
import Products from "@/components/Products/Products";
import SimpleSlider from "@/components/Slider/Slider";
import TestamonialSection from "@/components/testamonial/TestamonialSection";
import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container style={{}}>
        {" "}
        <SimpleSlider />
      </Container>
      <Container style={{}}>
        {" "}
        <Products />{" "}
      </Container>
      <Container style={{}}>
        <TestamonialSection />
      </Container>
      <Container style={{}}>
        <Box
          className="navigatinbarhirta"
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
      </Container>
    </div>
  );
};

export default Home;
