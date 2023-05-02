import React from "react";
import HeroSection from "../../components/hero-section";

import { ButtonSolidDark, Container } from "../../styles/GlobalStyles";
import ListCard from "../../components/cards/list";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Container className="pb-8">
        <h2 className="h2 my-8">Don't snooze on these</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
          <ListCard></ListCard>
        </div>
        <Link to="/venues">
          <ButtonSolidDark>see all venues</ButtonSolidDark>
        </Link>
      </Container>
    </>
  );
};

export default Home;
