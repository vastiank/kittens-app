import React from "react";
import "./style.scss";

const Modal = ({ children, showModal, closeModal, className }) => {
  return showModal ? (
    <div
      onClick={() => closeModal()}
      className={`modal__container ${className}`}
    >
      <div className="modal__content">{children}</div>
    </div>
  ) : null;
};
export default Modal;
