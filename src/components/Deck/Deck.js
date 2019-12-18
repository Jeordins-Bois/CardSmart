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
    cards: [],
    side: "question"
  });

  useEffect(() => {
    axios
      .get(`/api/cards/${props.match.params.deckId}`)
      .then(res => {
        console.log(res.data);
        setState({ ...state, cards: res.data });
      })
      .catch(err => console.log("getCards error: " + err));
  }, []);

  const handleFlip = () => {
    state.side === "question"
      ? setState({ ...state, side: "answer" })
      : setState({ ...state, side: "question" });
  };
  return (
    <>
      <Paper className={classes.root}></Paper>
      <section className="container">
        {state.cards.map(card => {
          return (
            <Question
              side={state.side}
              handleFlip={handleFlip}
              key={`questionkey${card.question}`}
              card={card}
            />
          );
        })}
      </section>
    </>
  );
};

export default Deck;
