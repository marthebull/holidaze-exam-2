import React from "react";
import { HeroContainer, TextHero } from "./styles";
import {
  ButtonOutlineWhite,
  ButtonSolidWhite,
} from "../../styles/GlobalStyles";

const HeroVenue = () => {
  return (
    <>
      <HeroContainer className="relative">
        <TextHero
          style={{
            backgroundImage: `url(images/hero-bg-home.jpg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundColor: `#424242`,
          }}
          className="z-20"
        ></TextHero>
      </HeroContainer>
    </>
  );
};

export default HeroVenue;
