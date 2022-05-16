import React, { useEffect } from "react";

import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Inner = styled.div`
  position: relative;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  min-width: 260px;
  max-width: 100%;
`;

const Close = styled.button`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border: none;
  border-radius: 0.25rem;
  padding: 0.25rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 20px;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s linear;

  &:hover {
    background-color: #f22007;
    color: #ffffff;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const defaultButtons = [
  {
    type: "secondary",
    label: "Cancel",
    action: "close",
  },
];

const Dialog = ({
  open = false,
  setIsOpen,
  children = "Hello there, Obi-wan Kenobi",
  buttons = defaultButtons,
}) => {
  const handleClick = (action) => {
    switch (action) {
      case "close":
        setIsOpen(false);
        break;

      default:
        setIsOpen(false);
        break;
    }
  };

  const handleKeyPress  = (e) => {
    if (e.key === 'Escape') {
        setIsOpen(false);
      }
  }

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [open])

  if (open) {
    return (
      <Overlay>
        <Inner>
          <Close onClick={() => setIsOpen(false)}>
            <IoMdClose />
          </Close>

          {children}

          <Actions>
            {buttons.map((button, i) => (
              <Button
                key={`button-${i}`}
                type={button.type}
                onClick={() => handleClick(button.action)}
              >
                {button.label}
              </Button>
            ))}
          </Actions>
        </Inner>
      </Overlay>
    );
  }
};

export default Dialog;
