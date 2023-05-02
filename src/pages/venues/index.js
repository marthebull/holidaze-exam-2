import React from "react";
import ListVenuesGrid from "../../components/grids/ListVenuesGrid";
import { Container } from "../../styles/GlobalStyles";

const Venues = () => {
  return (
    <>
      <Container className="flex flex-col gap-6 my-6">
        <ListVenuesGrid />
      </Container>
    </>
  );
};

export default Venues;
