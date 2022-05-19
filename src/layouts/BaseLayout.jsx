import { NavLink, Outlet } from "react-router-dom";

import Container from "../components/Container";
import ROUTES from "../routes";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  background: #f6f6f6;
  padding: 1rem;
  justify-content: space-around;

  a {
    color: #111111;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }
`;

const LINKS = [
  {
    path: ROUTES.BASE,
    name: "Home",
  },
  {
    path: ROUTES.MODAL,
    name: "Modal",
  },
  {
    path: ROUTES.DROPDOWN,
    name: "Dropdown",
  },
];

const BaseLayout = () => {
  return (
    <>
      <Nav>
        {LINKS.map((link) => (
          <NavLink
            style={({isActive}) => {
              return { color: isActive ? "#0800ff" : "#000" };
            }}
            key={link.path}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
      </Nav>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
