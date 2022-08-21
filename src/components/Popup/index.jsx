import React from "react";
import { Background, Container } from "./styles";

const Popup = ({ isOpen, handleDelete }) => {
  return (
    <Background onClick={() => isOpen(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h3>Are you sure you want to delete this?</h3>
        <div>
          <button className="remove-button" onClick={() => handleDelete()}>
            Delete
          </button>
          <button className="back-button" onClick={() => isOpen(false)}>
            Return
          </button>
        </div>
      </Container>
    </Background>
  );
};

export default Popup;
