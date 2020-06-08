import React from "react";

interface Props {
  icon?: React.ReactElement;
  text: string;
  onClick?: () => void;
}

const ListItem = ({ icon, text, onClick }: Props) => {
  return (
    <button className="list-item" onClick={onClick}>
      <div className="listIcon">{icon}</div>
      <div className="listText">{text}</div>
    </button>
  );
};

export default ListItem;
