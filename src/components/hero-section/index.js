import React from "react";
import { HeroContainer, HeroLogo, TextHero } from "./styles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <TextHero
          style={{
            backgroundImage: `url(images/hero-bg-home.jpg)`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundColor: `black`,
          }}
        >
          <HeroLogo src="images/logo-holidaze-white.svg"></HeroLogo>
          <h1 className="white h4">
            discover, book and enjoy the most exquisite venues.
          </h1>
          <p className="white">
            <Link to="/sign-in" className="link-white">
              sign in
            </Link>
            &nbsp; or &nbsp;
            <Link to="/venues" className="link-white">
              browse
            </Link>
          </p>
        </TextHero>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
