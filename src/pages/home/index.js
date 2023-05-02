import React from "react";
import HeroSection from "../../components/hero-section";

import { Container } from "../../styles/GlobalStyles";
import ListCard from "../../components/cards/list";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container>
        <ListCard></ListCard>
      </Container>
    </>
  );
};

export default Home;
