//Full Deck of cards
import React, { useState, useEffect } from "react";
import { Paper, CircularProgress } from "@material-ui/core";
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
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([0]);
  const [userId, setId] = useState(null);

  //First axios request gets the cards with the given deck id, second one gets user info off of session.  the if statement checks if the user that is logged in is the same as the user who created the deck.  If they are different the page redirects to the home page
  useEffect(() => {
    axios
      .get(`/api/cards/${props.match.params.deckId}`)
      .then(res => {
        console.log(res.data);
        setCards([...res.data]);
        setLoading(false);
      })
      .catch(err => console.log("getCards error: " + err));
    axios
      .get("/api/user")
      .then(res => {
        setId(res.data.user_id);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : cards[0].user_id === userId ? (
        <>
          <Paper className={classes.root}></Paper>
          <section className="container">
            {cards.map(card => {
              return (
                <OwnedQuestion
                  key={`questionkey${card.question}`}
                  card={card}
                />
              );
            })}
          </section>
        </>
      ) : (
        (window.location.href = "http://localhost:3069/api/login")
      )}
    </>
  );
};

export default OwnedDeck;
