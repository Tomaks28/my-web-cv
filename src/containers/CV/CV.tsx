import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Knowledges, Portfolio, Contact } from "..";
import { Navigation } from "../../components";
import { screens } from "../../constants";

const CV = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path={screens.CV_KNOWLEDGES} exact component={Knowledges} />
        <Route path={screens.CV_PORTFOLIO} exact component={Portfolio} />
        <Route path={screens.CV_CONTACT} exact component={Contact} />
        {/* <Route path={screens.CV_TRAVELS} exact component={CV} /> */}
      </Switch>
    </Router>
  );
};

export default CV;
