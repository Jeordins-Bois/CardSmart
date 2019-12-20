import React, { useState, useEffect } from "react";

//Material UI stuff
import { Paper, Typography, Card, Avatar, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  paperRoot: {
    marginTop: "2vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary[700],
    color: "#f5f5f5",
    height: "20%"
  },
  savedDeck: {
    marginTop: "2vh",
    minHeight: "7vh",
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px"
  },
  decksPaper: {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    height: "60%"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: 0,
    padding: 0,
    width: "100%"
  }
}));

const SavedDecks = props => {
  const classes = useStyles();
  const [state, setState] = useState({
    decks: [
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" },
      { deck_id: 1, deck_name: "a" }
    ]
  });

  // useEffect(() => {
  //   if (props.user) {
  //     axios
  //       .get(`/api/topic/${props.user.user_id}`)
  //       .then(res => setState({ decks: res.data }))
  //       .catch(err => console.log("get saved decks error: " + err));
  //   } else {
  //     setState({
  //       decks: [

  //       ]
  //     });
  //   }
  // }, []);

  return (
    <>
      <Paper classes={{ root: classes.paperRoot }}>
        {props.user ? (
          <Avatar
            style={{ minHeight: "75px", minWidth: "75px" }}
            src={props.user.profile_img}
          />
        ) : null}
        <Typography style={{ width: "100%" }} align="center" variant="h5">
          {props.user ? props.user.username : "log in to see your decks"}
        </Typography>
      </Paper>
      <Typography
              style={{
                alignSelf: "flex-start",
                position: "sticky",
                top: 0,
                textAlign: "center",
                width: "100%"
              }}
            >
              SAVED DECKS
            </Typography>
      <Paper
        classes={{ root: classes.paperRoot }}
        className={classes.decksPaper}
      >
        {props.user ? (
    
            <List classes={{ root: classes.list }}>
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
              })}{" "}
            </List>
        ) : null}
      </Paper>
    </>
  );
};

export default SavedDecks;
