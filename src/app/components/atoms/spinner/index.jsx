import React from "react";
import "./style.scss";

const Spinner = () => {
  return (
    <>
      <div className="loading__container">
        <div className="loading-spinner"></div>
        <h4 className="loading__title">LOADING</h4>
      </div>
    </>
  );
};
export default Spinner;
