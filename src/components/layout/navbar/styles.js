import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 10px 0;

  @media screen and (max-width: 900px) {
    flex-flow: column;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    min-width: 200px;
    padding-top: 10vh;
    justify-content: start;
  }
`;
