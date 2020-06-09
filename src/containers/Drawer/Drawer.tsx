import React from "react";
import { useHistory } from "react-router-dom";
import { screens, images } from "../../constants";
import { ListItem } from "../../tomaks-ui";
import { Widgets, Work } from "@material-ui/icons";

interface Props {
  handleBackdropClose: () => void;
}

const Drawer = ({ handleBackdropClose }: Props) => {
  const history = useHistory();
  const handleClick = (to: string) => {
    history.push(to);
    handleBackdropClose();
  };

  return (
    <div className="drawerContent">
      <ListItem
        icon={<Work />}
        text="Web CV"
        onClick={() => handleClick(screens.CV)}
      />
      <ListItem
        icon={<Widgets />}
        text="Projets"
        onClick={() => handleClick(screens.PROJECTS)}
      />
      <div className="divider" />
      <ListItem
        icon={<img src={images.NODE} alt="nodeJS" />}
        text="NodeJS"
        onClick={() => handleClick(screens.NODE)}
      />
      <ListItem
        icon={<img src={images.REACT} alt="reactJS" />}
        text="ReactJS"
        onClick={() => handleClick(screens.REACT)}
      />
      <ListItem
        icon={<img src={images.REACT_NATIVE} alt="React-Native" />}
        text="React-Native"
        onClick={() => handleClick(screens.REACT_NATIVE)}
      />
    </div>
  );
};

export default Drawer;
