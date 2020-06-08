import React from "react";
import "./burger.css";

interface Props {
  onClick: () => void;
}

const BurgerMenu = ({ onClick }: Props) => {
  return (
    <button className="cui-burger" onClick={onClick}>
      <div className="cui-burger__line" />
      <div className="cui-burger__line" />
      <div className="cui-burger__line" />
    </button>
  );
};

export default BurgerMenu;
