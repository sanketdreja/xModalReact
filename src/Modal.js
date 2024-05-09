import React, { useState } from "react";
import "./Modal.css";
import FormComponent from "./FormComponent";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <h1 className="btn-modal">User Details Modal</h1>
      <button onClick={toggleModal} className="btn-modal">
        Open Form
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <FormComponent closeModal={toggleModal} />
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
