//Full Deck of cards
import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import OwnedQuestion from "./OwnedQuestion";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "25vh",
    backgroundColor: `${theme.palette.secondary["A100"]}`
  }
}));

const OwnedDeck = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    cards: [],
    userId: null
  });

  useEffect(() => {
    axios
      .get(`/api/cards/${props.match.params.deckId}`)
      .then(res => {
        // console.log(res.data);
        setState({ ...state, cards: res.data });
      })
      .catch(err => console.log("getCards error: " + err));
    axios
      .get("/api/user")
      .then(res => setState({ ...state, userId: res.data.user_id }))
      .catch(err => console.log(err));
  }, []);

  //! Will have to check if the current user logged in is the creator of the deck... cards[0].deck_id === userId

  return (
    <>
      <Paper className={classes.root}></Paper>
      <section className="container">
        {state.cards.map(card => {
          return (
            <OwnedQuestion key={`questionkey${card.question}`} card={card} />
          );
        })}
      </section>
    </>
  );
};

export default OwnedDeck;
