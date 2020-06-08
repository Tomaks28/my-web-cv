import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { screens } from "../../constants";
import { BurgerMenu, SideDrawer } from "../index";

interface Props {
  sideDrawerContent: any; //TODO change to React.JSX element
}

const NavBar = ({ sideDrawerContent }: Props) => {
  const history = useHistory();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerVisible((prevState) => !prevState);
  };

  const handleBackdropClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <SideDrawer show={isDrawerVisible} onBackdropClick={handleBackdropClose}>
        {sideDrawerContent({ handleBackdropClose })}
      </SideDrawer>
      <header className="navbar">
        <nav className="nav">
          <BurgerMenu onClick={handleDrawerToggle} />
          <div className="logo">
            <button onClick={() => history.push(screens.HOME)}>
              Thomas AKSOGUT
            </button>
          </div>
          <div className="items">
            <ul>
              <li>
                <button onClick={() => alert("items1")}>Items 1</button>
              </li>
              <li>
                <button onClick={() => alert("items2")}>Items 2</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
