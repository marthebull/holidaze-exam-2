import React from "react";
import { FilterWrapper } from "./styles";

const Filters = () => {
  return (
    <>
      <FilterWrapper>
        <div className="flex flex-col justify-center gap-1">
          <img
            src="/images/coffe-cup-icon.svg"
            className="medium-icon mx-auto"
            alt="Breakfast icon"
          ></img>
          <small className="mx-auto text-center">breakfast</small>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <img
            src="/images/car-icon.svg"
            className="medium-icon mx-auto"
            alt="Car icon"
          ></img>
          <small className="mx-auto text-center">parking</small>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <img
            src="/images/wifi-icon.svg"
            className="medium-icon mx-auto"
            alt="Wifi icon"
          ></img>
          <small className="mx-auto text-center">wifi</small>
        </div>

        <div className="flex flex-col justify-center gap-1">
          <img
            src="/images/paw-icon.svg"
            className="medium-icon mx-auto"
            alt="Pets icon"
          ></img>
          <small className="mx-auto text-center">pets</small>
        </div>
      </FilterWrapper>
    </>
  );
};

export default Filters;
