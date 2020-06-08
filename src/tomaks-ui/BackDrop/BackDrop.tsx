import React from "react";
import "./backdrop.css";

interface Props {
  opacity: number;
  onClick: () => void;
}

const BackDrop = ({ opacity, onClick }: Props) => (
  <div
    className="cui-backdrop"
    style={{ background: `rgba(0, 0, 0, ${opacity})` }}
    onClick={onClick}
  />
);

export default BackDrop;
