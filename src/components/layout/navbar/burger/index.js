import React, { useState } from "react";
import styled from "styled-components";

const BurgerMenu = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  align-items: end;

  div {
    width: 1.5rem;
    height: 0.15rem;
    background-color: #424242;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      width: 1rem;
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerMenu>
    </>
  );
};

export default Burger;
