import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --dark-grey: #424242;
  --dark-grey-transparent: rgba(66,66,66,0.10);
  --white: #ffffff;
  --white-transparent: rgba(255,255,255,0.30);
  --light-grey: #d3d3d3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  color: var(--dark-grey);
  background-color: var(--white);
  letter-spacing: 0.03rem;
}

h1 {
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 120%;
}

h2 {
  font-size: 2rem;
  font-weight: 600;
  line-height: 130%;
}

h3 {
  font-size: 1.63rem;
  font-weight: 500;
  line-height: 130%;
}

h4 {
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 130%;
}

.link, button {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  color: var(--dark-grey);
  letter-spacing: 0.03rem;
}


h5, label, input {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 150%;
  display: block;
}

a {
  font-size: 1.13rem;
  font-weight: 500;
  line-height: 160%;
  text-decoration: underline;
  letter-spacing: 0;
}

p {
  font-size: 1.13rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0;

}

small {
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  letter-spacing: 0;
}

button {
  display: block;
  width: 240px;
  height: 50px;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}

.button-outline-dark {
  background-color: rgba(66,66,66,0.01);
  border: 2px solid var(--dark-grey);
  color: var(--dark-grey);
}

.button-outline-dark:hover {
  background-color: var(--dark-grey-transparent);
  border: 2px solid var(--dark-grey);
  color: var(--dark-grey);
}

.button-outline-white {
  background-color: rgba(255,255,255,0.01);
  border: 2px solid var(--white);
  color: var(--white);
}

.button-outline-white:hover {
  background-color: var(--white-transparent);
  border: 2px solid var(--white);
  color: var(--white);
}

.button-solid-dark {
  background-color: var(--dark-grey);
  border: 2px solid var(--dark-grey);
  color: var(--white);
}

.button-solid-dark:hover {
  background-color: var(--dark-grey-transparent);
  border: 2px solid var(--dark-grey);
  color: var(--dark-grey);
}

.button-solid-white {
  background-color: var(--white);
  border: 2px solid var(--white);
  color: var(--dark-grey);
}

.button-solid-dark:hover {
  background-color: var(--white-transparent);
  color: var(--white);
}

input, textarea {
  height: 50px;
  width: 100%;
  max-width: 500px;
  padding: 12px;
  border-radius: 2px;
  border: 2px solid var(--dark-grey);
  cursor: pointer;
}

input::placeholder {
  color: var(--light-grey);
  letter-spacing: 0.03rem;
}

input[type=checkbox] {
  width: 22px;
  height: 22px;
  margin-right: 10px;
}

.icon {
  height: auto;
  width: 22px;
  margin-right: 10px;
}

.flex-h {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex-v {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 900px){

  h1 {
    font-size: 2rem;
    line-height: 130%;
  }
  
  h2 {
    font-size: 1.63rem;
  }
  
  h3 {
    font-size: 1.4rem;
  }
  
  h4 {
    font-size: 1.25rem;
    line-height: 150%;
  }
  
  a {
    font-size: 1rem;
  }
  
  p {
    font-size: 1rem;
  
  }
  
  small {
    font-size: 0.88rem;
  }
  
}
`;

export const Logo = styled.img`
  height: 48px;
  width: auto;

  @media screen and (max-width: 900px) {
    height: 35px;
  }
`;

export const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export default GlobalStyles;
