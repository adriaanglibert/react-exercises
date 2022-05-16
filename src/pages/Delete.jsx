import React, { useState } from "react";

import Button from "../components/Button";
import Container from "../components/Container";
import Dialog from "../components/Dialog";
import useModal from '../hooks/useModal';

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
      <p>You are about to safe this item.'</p>
      <Button type="success" onClick={() => handleClick()}>
        Save
      </Button>
    </>
  );
};

const Delete = () => {
  const [isOpen, setIsOpen, dialogContent, handleOpen] = useModal();

  return (
    <>
      <Container>
        <h1>Oefening Modal</h1>

        <Button
          type="danger"
          onClick={() =>
            handleOpen(<DeleteContent handleClick={() => setIsOpen(false)} />)
          }
        >
          Delete
        </Button>

        <Button
          type="success"
          onClick={() =>
            handleOpen(<SaveContent handleClick={() => setIsOpen(false)} />)
          }
        >
          Save
        </Button>
      </Container>

      <Dialog setIsOpen={setIsOpen} open={isOpen}>
        {dialogContent}
      </Dialog>
    </>
  );
};

export default Delete;
