import React from "react";
import Modal from "../../atoms/modal";
import "./style.scss";

const ModalKitten = ({ kitten, showModal, closeModal }) => {
  return (
    <Modal
      closeModal={closeModal}
      showModal={showModal}
      className="modal__kitten__container"
    >
      <div className="modal__kitten__content">
        <div>
          <h1>{kitten.name}</h1>
          <p id="age" className="modal__kitten__info">
            {kitten.age}
          </p>
          <p id="gender" className="modal__kitten__info">
            {kitten.gender}
          </p>
          <img
            className="modal__kitten__img"
            src={kitten.imageFileName}
            alt="image_kitten"
          />
          <p id="description">{kitten.description}</p>
        </div>
      </div>
    </Modal>
  );
};
export default ModalKitten;
