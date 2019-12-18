import React from "react";

const SavedDecks = props => (
  <h1 style={{ width: "100%", textAlign: "center" }}>
    {props.user ? props.user.username : "Log in to see saved decks"}
  </h1>
);

export default SavedDecks;
