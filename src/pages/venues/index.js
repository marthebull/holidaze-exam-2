import { Container } from "@mui/material";
import React from "react";
import ListVenuesGrid from "../../components/grids/ListVenuesGrid";

const Venues = () => {
  return (
    <>
      <Container className="flex flex-col gap-6">
        <ListVenuesGrid />
      </Container>
    </>
  );
};

export default Venues;
