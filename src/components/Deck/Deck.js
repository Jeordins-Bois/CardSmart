//Full Deck of cards
import React, { useState, useEffect } from "react";
import "./Deck.css";
import { Paper } from "@material-ui/core";
import Question from "./Question";
import { makeStyles, useTheme } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "20vh",
    backgroundColor: `${theme.palette.secondary["A100"]}`
  }
}));

const Deck = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    cards: [
      {
        id: 1,
        question: "who was your mom?",
        answer: "I don't know but I'm sure she's a nice lady"
      },
      {
        id: 2,
        question: "where is Tavas",
        answer: "I don't know but I hope he's ok"
      },
      {
        id: 3,
        question: "what is the airspeed velocity of an unladen swallow?",
        answer: "African or European?"
      }
    ],
    side: "question"
  });

  const handleFlip = () => {
    state.side === "question"
      ? setState({ ...state, side: "answer" })
      : setState({ ...state, side: "question" });
  };
  return (
    <>
      <Paper className={classes.root}></Paper>
      <section className="deck-container">
        {state.cards.map(card => {
          return (
            <Question
              side={state.side}
              handleFlip={handleFlip}
              side={state.side}
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
