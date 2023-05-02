import React from "react";
import { BrandInfo, FooterCont, FooterInner, FooterNav } from "./styles";
import { Logo } from "../../../styles/GlobalStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  const thisYear = new Date();

  return (
    <>
      <FooterCont>
        <FooterInner>
          <BrandInfo>
            <Link to="/" className="link">
              <Logo src="https://raw.githubusercontent.com/marthebull/holidaze-exam2023/187f416b0fd1cc2255c1e2d534bf8e89b5ee8657/images/logo-holidaze.svg"></Logo>
            </Link>
            <p>+47 234 54 000</p>
            <p>book@holidaze.co</p>
          </BrandInfo>
          <FooterNav>
            <Link to="/venues" className="link">
              venues
            </Link>
            <Link to="/dashboard" className="link">
              dashboard
            </Link>
          </FooterNav>
        </FooterInner>
        <small>
          holidaze © {thisYear.getFullYear()} | marthe bull pettersen{" "}
        </small>
      </FooterCont>
    </>
  );
};

export default Footer;
