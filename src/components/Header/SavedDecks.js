import React, { useState, useEffect } from "react";

//Material UI stuff
import { Paper, Typography, Card, Avatar, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  paperRoot: {
    marginTop: "2vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary[700],
    backgroundColor: "#f5f5f5",
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
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" },
      // { deck_id: 1, deck_name: "a" }
    ]
  });

  useEffect(() => {
    if (props.user) {
      axios
        .get(`/api/topic/${props.user.user_id}`)
        .then(res => setState({ decks: res.data }))
        .catch(err => console.log("get saved decks error: " + err));
    } else {
      setState({
        decks: []
      });
    }
  }, []);

  return (
    <>
      <Paper classes={{ root: classes.paperRoot }} square>
        <Link to="/user" onClick={props.toggleDrawer}>
          <Avatar
            style={{ minHeight: "75px", minWidth: "75px" }}
            src={props.user.profile_img}
          />
        </Link>
        <Typography style={{ width: "100%" }} align="center" variant="h5">
          {props.user.username}
        </Typography>
      </Paper>
      {/* <Typography
        style={{
          margin: "10px 0",
          alignSelf: "flex-start",
          position: "sticky",
          top: 0,
          textAlign: "center",
          width: "100%",
          color: "#f5f5f5"
        }}
      >
        SAVED DECKS
      </Typography> */}
      <Paper
        square
        classes={{ root: classes.paperRoot }}
        className={classes.decksPaper}
      >
        {props.user ? (
          <List classes={{ root: classes.list }}>
            {state.decks.map((e, i) => {
              return (
                <Link to={`/saved/${e.deck_id}`}>
                  <Card
                    classes={{ root: classes.savedDeck }}
                    key={`deckID${e.deck_id}`}
                  >
                    <Typography>{e.deck_name}</Typography>
                    <Avatar src={e.deck_img} />
                  </Card>
                </Link>
              );
            })}{" "}
          </List>
        ) : null}
      </Paper>
    </>
  );
};

export default SavedDecks;
