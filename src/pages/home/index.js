import React from "react";
import HeroSection from "../../components/hero-section";
import ListCard from "../../components/cards/list";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "../../styles/GlobalStyles";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <h1>Hello</h1>
      </Container>
    </>
  );
};

export default Home;
