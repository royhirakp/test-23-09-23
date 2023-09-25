"use client";
import Container from "@/components/Container";
import Products from "@/components/Products/Products";
import SimpleSlider from "@/components/Slider/Slider";
import TestamonialSection from "@/components/testamonial/TestamonialSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Container style={{}}>{/* <SimpleSlider /> */}</Container>
      <Container style={{}}>{/* <Products /> */}</Container>
      <Container style={{}}>
        <TestamonialSection />
      </Container>
    </div>
  );
};

export default Home;
