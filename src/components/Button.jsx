import React from "react";
import styled from "styled-components";

const setDynamicBackground = (type) => {
  switch (type) {
    case "primary":
      return {
        background: "#EF6024",
        color: "#FFFFFF",
      };
    case "secondary":
      return {
        background: "#F0941F",
        color: "#000000",
      };
    case "tertiary":
      return {
        background: "##90A19D",
        color: "#FFFFFF",
      };
    case "success":
      return {
        background: "#F22007",
        color: "#FFFFFF",
      };
    case "danger":
      return {
        background: "#F22007",
        color: "#FFFFFF",
      };

    default:
      return {
        background: "#363432",
        color: "#FFFFFF",
      };
  }
};

const Btn = styled.button`
  background-color: ${(props) => setDynamicBackground(props.type).background};
  color: ${(props) => setDynamicBackground(props.type).color};
  padding: 1rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
`;

const Button = ({ children, type, onClick }) => {
  return (
    <Btn onClick={onClick} type={type}>
      {children}
    </Btn>
  );
};

export default Button;
