import React, { useState } from "react";

import Button from "../components/Button";
import Container from "../components/Container";
import Dialog from "../components/Dialog";

const DeleteContent = () => {
  return (
    <>
      <strong>Delete</strong>
      <p>Are you sure you want to delete the item?</p>
    </>
  )
}

const SaveContent = () => {
  return (
    <>
      <strong>Save</strong>
      <p>You are about to safe this item.'</p>
    </>
  )
}

const Delete = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState();

  const handleOpen = (content, open = true) => {
    setDialogContent(content);
    setIsOpen(open);
  }

  return (
    <>
      <Container>
        <h1>Oefening Modal</h1>

        <Button type="danger" onClick={() => handleOpen(<DeleteContent/>)}>
          Delete
        </Button>

        <Button type="succes" onClick={() => handleOpen(<SaveContent/>)}>
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
