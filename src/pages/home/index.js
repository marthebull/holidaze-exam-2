import React from "react";
import { ButtonSolidDark, Container } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";
import ListVenuesGrid from "../../components/grids/ListVenuesGrid";
import HeroHome from "../../components/hero-section/HeroHome";

const Home = () => {
  return (
    <>
      <HeroHome />
      <Container className="flex flex-col gap-6">
        <h2 className="h2 my-8">Don't snooze on these</h2>
        <ListVenuesGrid />
        <Link to="/venues">
          <ButtonSolidDark>see all venues</ButtonSolidDark>
        </Link>
      </Container>
    </>
  );
};

export default Home;
