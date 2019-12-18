import React, { useState, useEffect } from "react";

//Material UI stuff
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  savedDeck: {}
}));

const SavedDecks = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    decks: [
      //   { deck_id: 1, deck_name: "coles deck" },
      //   { deck_id: 2, deck_name: "jeordins deck" }
    ]
  });

  useEffect(() => {
    axios
      .get(`/api/topic/${props.user.user_id}`)
      .then(res => setState({ decks: res.data }))
      .catch(err => console.log("get saved decks error: " + err));
  }, []);
  return (
    <>
      <Paper>
        <Typography style={{ width: "100%", textAlign: "center" }}>
          {props.user ? props.user.username : "Log in to see saved decks"}
        </Typography>
      </Paper>
      {state.decks.map((e, i) => {
        return (
          <Paper key={`deckID${e.deck_id}`}>
            <Typography>{e.deck_name}</Typography>
          </Paper>
        );
      })}
    </>
  );
};

export default SavedDecks;
