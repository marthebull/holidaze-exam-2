import React from "react";
import { HeroContainer, HeroLogo, TextHero } from "./styles";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroImg =
    "https://github.com/marthebull/holidaze-exam2023/blob/main/images/photo-1414510451013-d0a41fea512e.jpg?raw=true";

  return (
    <>
      <HeroContainer>
        <TextHero
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
            backgroundColor: `black`,
          }}
        >
          <HeroLogo src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/4b3a318062f86afad9dd2ab8306d9e39eee1ffe7/images/logo-holidaze-white.svg"></HeroLogo>
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
