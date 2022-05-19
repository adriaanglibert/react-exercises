import React, { useLayoutEffect, useRef, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { adjustColor } from "../helper";
import styled from "styled-components";

const Label = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #222;
  color: #fff;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border: none;
  width: 200px;
  text-align: left;

  &:hover {
    background: ${adjustColor("#222222", 25)};
    color: #fff;
  }
`;

const Item = styled(Label)`
  color: #555;
  background: #2222;
`;

const List = styled.ul`
  overflow: hidden;
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  list-style: none;
  transition: all 0.75s ease;
  height: 100%;
  max-height: 0;
  max-width: 200px;
`;

const HiddenLabel = styled.label`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
`;

const Icon = styled.div`
  transition: transform 0.25s ease;
`;

const Dropdown = ({ name = label, label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  const handleSelect = (option) => {
    setIsOpen(false);
    setSelected(option.label);
    onChange(option.value);
  };

  return (
    <>
      {value && (
        <HiddenLabel>
          {label}
          <input name={name} type="text" value={value} readOnly />
        </HiddenLabel>
      )}

      <Label onClick={() => setIsOpen(!isOpen)}>
        {selected ? selected : label}
        <Icon
          as={IoIosArrowDown}
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
        />
      </Label>

      <List
        style={{
          maxHeight: isOpen ? 500 : 0,
        }}
      >
        {options.map((option) => (
          <li key={option.value}>
            {
              option.href ?
              <Item as="a" href={option.href} tabIndex={isOpen ? 0 : -1}>
                   {option.label}
              </Item> :
              <Item
                tabIndex={isOpen ? 0 : -1}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </Item>
            }
          </li>
        ))}
      </List>
    </>
  );
};

export default Dropdown;
