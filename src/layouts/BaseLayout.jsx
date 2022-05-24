import { NavLink, Outlet } from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";

import Button from '../components/Button';
import Container from "../components/Container";
import ROUTES from "../routes";
import {gsap} from "gsap";
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
  const timer = useRef();
  const buttonEl = useRef();
  const parentEl = useRef();
  const childrenEl = gsap.utils.selector(parentEl);
  const inputEl = useRef();
  const [time, setTime] = useState(0);
  const tl = useRef();

  useEffect(() => {
      timer.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
  }, []);

  useEffect(() => {
    console.log(buttonEl.current);
    gsap.to(buttonEl.current, {x: 50})
    inputEl.current.focus();
  }, []);

  useEffect(() => {
    tl.current = gsap.timeline()
    .from(childrenEl('.timer'), {opacity: 0, stagger: .2})
    .to(childrenEl('.title'), {y: 20, scale: 1.25, transformOrigin: '0 0'})
  }, [])

  console.log('Render app!');
  return (
    <>
      <div ref={parentEl}>
        <span className="timer">
          Timer: {time}
        </span>
        <span className="timer">
          Timer: {time}
        </span>
        <span className="timer">
          Timer: {time}
        </span>

        <div className="title">Yooooo</div>

      </div>

      <input ref={inputEl} type="text" name="firstName" />

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

      <Button ref={buttonEl}>
        Test
      </Button>

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
