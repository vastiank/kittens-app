import { useState } from "react";

import ModalKitten from "../modal_kitten";
import "./style.scss";

const Card = ({ item }) => {
  const [openKitten, setOpenKitten] = useState(false);
  const handleClick = () => {
    setOpenKitten(true);
  };
  return (
    <>
      <div onClick={() => handleClick()} className="card">
        <div className="card-view">
          <h4>{item.name}</h4>
          <img className="img_kitten" src={item.imageFileName} alt="" />
        </div>
      </div>
      <ModalKitten
        kitten={item}
        showModal={openKitten}
        closeModal={() => setOpenKitten(false)}
      />
    </>
  );
};
export default Card;
