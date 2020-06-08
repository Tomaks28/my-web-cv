import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Wrapper } from "./tomaks-ui";
import { Home, CV, Projects, Drawer } from "./containers";
import { screens } from "./constants";

const App = () => {
  return (
    <Router>
      <NavBar sideDrawerContent={Drawer} />
      <Switch>
        <Wrapper>
          <Route path={screens.HOME} exact component={Home} />
          <Route path={screens.CV} exact component={CV} />
          <Route path={screens.PROJECTS} exact component={Projects} />
        </Wrapper>
      </Switch>
    </Router>
  );
};

export default App;
