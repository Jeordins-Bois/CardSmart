import React, { useState, useEffect } from "react";
import Question from "../Deck/Question";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "25vh",
    backgroundColor: `${theme.palette.secondary["A100"]}`
  }
}));

const SavedDeck = props => {
  const [state, setState] = useState({
    cards: [],
    side: "question"
  });

  useEffect(() => {
    axios
      .get(`/api/cards/${props.match.params.deckId}`)
      .then(res => {
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
      <div style={{ height: "15vh", backgroundColor: "#f5f5f5" }}></div>
      {state.cards.map(card => {
        return (
          <Question
            side={state.side}
            handleFlip={handleFlip}
            key={`questionkey${card.card_id}`}
            card={card}
          />
        );
      })}
    </>
  );
};

export default SavedDeck;
