import React from "react";
import { adjustColor } from '../helper';
import styled from "styled-components";

const setDynamicStyles = (type) => {
  switch (type) {
    case "primary":
      return {
        background: "#1446A0",
        color: "#FFFFFF",
      };
    case "secondary":
      return {
        background: "#F5D547",
        color: "#000000",
      };
    case "tertiary":
      return {
        background: "##90A19D",
        color: "#FFFFFF",
      };
    case "success":
      return {
        background: "#EBEBD3",
        color: "#363432",
      };
    case "danger":
      return {
        background: "#DB3069",
        color: "#FFFFFF",
      };

    default:
      return {
        background: "#3C3C3B",
        color: "#FFFFFF",
      };
  }
};

const Btn = styled.button`
  background-color: ${(props) => setDynamicStyles(props.type).background};
  color: ${(props) => setDynamicStyles(props.type).color};
  padding: 1rem 2rem;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  font-family: 'Metropolis';
  font-weight: 400;
  transition: background-color .25s linear;

  &:hover {
    background-color: ${(props) => adjustColor(setDynamicStyles(props.type).background, -25)};
  }
`;

const Button = ({ children, type, onClick }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

export default Button;
