import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar, Wrapper } from "./tomaks-ui";
import { Drawer, Home, CV, Projects, NotFound } from "./containers";
import { screens } from "./constants";

const App = () => {
  return (
    <Router>
      <NavBar sideDrawerContent={Drawer} />
      <Wrapper>
        <Switch>
          <Route path={screens.HOME} exact component={Home} />
          <Route path={screens.CV} component={CV} />
          <Route path={screens.PROJECTS} component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
