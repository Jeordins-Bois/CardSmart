import React from "react";
import { Switch, Route } from "react-router-dom";

//! import components here
import Categories from "./components/Categories/Categories";
import comprehendDelete from "./comprehendDelete/Comprehend";

export default (
  <Switch>
    <Route exact path="/" component={Categories} />
    <Route exact path="/comprehend" component={comprehendDelete} />
  </Switch>
);

// /category/:id - Topics

// /category/:id/:id - Deck

// /user/profile -- profile

// /user/cards -- created cards
