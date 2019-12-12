//Specific Question
import React, { useState, useEffect } from "react";
import "./Deck.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardContent } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    overflow: "visible"
  }
}));

const Question = props => {
  const [state, setState] = useState({
    side: "question"
  });
  const classes = useStyles();

  const handleFlip = () => {
    state.side === "question"
      ? setState({ ...state, side: "answer" })
      : setState({ ...state, side: "question" });
  };

  return (
    <Container maxWidth="lg" style={{ marginBottom: "5vh" }}>
      {state.side === "question" ? (
        <Card
          onClick={() => {
            handleFlip();
          }}
          classes={{ root: classes.root }}
          className="card"
          raised={true}
        >
          <CardContent>{props.card.question}</CardContent>
        </Card>
      ) : (
        <Card
          onClick={() => {
            handleFlip();
          }}
          classes={{ root: classes.root }}
          className="card"
          raised={false}
        >
          {" "}
          <CardContent>{props.card.answer}</CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Question;
