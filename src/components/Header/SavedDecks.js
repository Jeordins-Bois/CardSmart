import React, { useState, useEffect } from "react";

//Material UI stuff
import { Paper, Typography, Card, Fab, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  paperRoot: {
    backgroundColor: theme.palette.primary[700],
    color: "#f5f5f5"
  },
  savedDeck: {
    height: "7vh",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px"
  },
  decksPaper: {
    marginTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: "60%"
  }
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
    if (props.user) {
      axios
        .get(`/api/topic/${props.user.user_id}`)
        .then(res => setState({ decks: res.data }))
        .catch(err => console.log("get saved decks error: " + err));
    } else {
      setState({ decks: [] });
    }
  }, []);
  return (
    <>
      <Paper classes={{ root: classes.paperRoot }}>
        <Typography style={{ width: "100%", textAlign: "center" }}>
          {props.user ? props.user.username : "Log in to see saved decks"}
        </Typography>
      </Paper>
      {props.user ? (
        <Paper
          classes={{ root: classes.paperRoot }}
          className={classes.decksPaper}
        >
          <Typography style={{ textAlign: "center", width: "100%" }}>
            SAVED DECKS
          </Typography>
          {state.decks.map((e, i) => {
            return (
              <Card
                classes={{ root: classes.savedDeck }}
                key={`deckID${e.deck_id}`}
              >
                <Typography>{e.deck_name}</Typography>
                <Avatar src={e.deck_img} />
              </Card>
            );
          })}
        </Paper>
      ) : null}
    </>
  );
};

export default SavedDecks;
