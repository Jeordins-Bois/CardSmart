import React from "react";
import { Switch, Route } from "react-router-dom";

//! import components here
import Categories from "./components/Categories/Categories";
import Topics from "./components/Topics/Topics";
import Deck from './components/Deck/Deck'

export default (
  <Switch>
    <Route exact path="/" component={Categories} />
    <Route path="/category/:topicId" component={Topics} />
    <Route path='/category/:topicId/:deckId' component={Deck}/>
  </Switch>
);

// /category/:id - Topics

// /category/:id/:id - Deck

// /user/profile -- profile

// /user/cards -- created cards
