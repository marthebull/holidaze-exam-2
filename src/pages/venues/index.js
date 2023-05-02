import React from "react";
import ListVenuesGrid from "../../components/grids/ListVenuesGrid";
import { Container } from "../../styles/GlobalStyles";
import Searchbar from "../../components/search-filter/Searchbar";

const Venues = () => {
  return (
    <>
      <Container className="flex flex-col gap-6 my-6">
        <Searchbar />
        <ListVenuesGrid />
      </Container>
    </>
  );
};

export default Venues;
