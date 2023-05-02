import React from "react";
import { ButtonSolidDark, CenterContainer } from "../../styles/GlobalStyles";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <CenterContainer>
        <img
          src="images/broken-heart-icon.svg"
          className="big-icon"
          alt="Broken heart icon"
        ></img>
        <p>Sorry! We could not find the page you’re trying to find. </p>
        <p>Please go back and try again. </p>
        <Link to="/" className="link">
          <ButtonSolidDark>home</ButtonSolidDark>
        </Link>
      </CenterContainer>
    </>
  );
};

export default NotFound;
