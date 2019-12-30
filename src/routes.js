import React from "react";
import { Switch, Route } from "react-router-dom";

//! import components here
import Categories from "./components/Categories/Categories";
import Topics from "./components/Topics/Topics";
import Deck from "./components/Deck/Deck";
import User from "./components/User/Profile";
import OwnedDeck from "./components/OwnedDeck/OwnedDeck";
// import comprehendDelete from "./comprehendDelete/Comprehend";

export default (
  <Switch>
    <Route exact path="/" component={Categories} />
    <Route exact path="/category/:topicId" component={Topics} />
    <Route exact path="/category/:topicId/:deckId" component={Deck} />
    <Route path="/user" component={User} />
    <Route path="/saved/:deckId/" component={OwnedDeck} />
    {/* <Route exact path="/comprehend" component={comprehendDelete} /> */}
  </Switch>
);

// /category/:id - Topics

// /category/:id/:id - Deck

// /user/profile -- profile

// /user/cards -- created cards
