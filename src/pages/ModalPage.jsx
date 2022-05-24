import React, { useState } from "react";

import Button from "../components/Button";
import Container from "../components/Container";
import Dialog from "../components/Dialog";
import styled from 'styled-components';
import useModal from "../hooks/useModal";

const Row = styled.div`
  display: flex;
  gap: 0.5rem;
`

const DeleteContent = ({ handleClick }) => {
  return (
    <>
      <strong>Delete</strong>
      <p>Are you sure you want to delete the item?</p>
      <Button type="danger" onClick={handleClick}>
        Delete
      </Button>
    </>
  );
};

const SaveContent = ({ handleClick }) => {
  return (
    <>
      <strong>Save</strong>
      <p>You are about to safe this item.</p>
      <Button type="success" onClick={() => handleClick()}>
        Save
      </Button>
    </>
  );
};

const InfoContent = () => {
  return (
    <>
      <strong>Info</strong>
      <p>This is some random information.</p>
    </>
  );
};

const ModalPage = () => {
  const [isOpen, setIsOpen, dialogContent, handleOpen] = useModal();

  return (
    <>
      <Container>
        <h1>Oefening Modal</h1>

        <Row>
          <Button
            type="success"
            onClick={() =>
              handleOpen('<SaveContent handleClick={() => setIsOpen(false)} />')
            }
          >
            Save
          </Button>

          <Button
            type="danger"
            onClick={() =>
              handleOpen(<DeleteContent handleClick={() => setIsOpen(false)} />)
            }
          >
            Delete
          </Button>

          <Button
            onClick={() =>
              handleOpen(<InfoContent />)
            }
          >
            Info
          </Button>
        </Row>
      </Container>

      <Dialog setIsOpen={setIsOpen} open={isOpen}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default ModalPage;
