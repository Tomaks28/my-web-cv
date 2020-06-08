import React from "react";
import "./sidedrawer.css";
import { BackDrop } from "../index";

interface Props {
  children: React.ReactChildren;
  backdropOpacity?: number;
  onBackdropClick: () => void;
  show: boolean;
}

const SideDrawer = ({
  children,
  backdropOpacity = 0.3,
  onBackdropClick,
  show,
}: Props) => {
  return (
    <>
      <nav className={show ? "cui-side-drawer open" : "cui-side-drawer"}>
        {children}
      </nav>
      {show && <BackDrop opacity={backdropOpacity} onClick={onBackdropClick} />}
    </>
  );
};

export default SideDrawer;
