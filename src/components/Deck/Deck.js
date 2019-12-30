//Full Deck of cards
import React, { useState, useEffect } from "react";
import "./Deck.css";
import { Paper } from "@material-ui/core";
import Question from "./Question";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "25vh",
    backgroundColor: `${theme.palette.secondary["A100"]}`
  }
}));

const Deck = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    cards: []
  });

  useEffect(() => {
    axios
      .get(`/api/cards/${props.match.params.deckId}`)
      .then(res => {
        // console.log(res.data);
        setState({ ...state, cards: res.data });
      })
      .catch(err => console.log("getCards error: " + err));
  }, []);

  return (
    <>
      <Paper className={classes.root}></Paper>
      <section className="container">
        {state.cards.map(card => {
          return <Question key={`questionkey${card.question}`} card={card} />;
        })}
      </section>
    </>
  );
};

export default Deck;
