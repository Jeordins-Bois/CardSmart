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
  },
  cardContent: {
    position: "relative",
    width: "90%",
    height: "100%"
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
    <Container
      maxWidth="lg"
      style={{
        marginBottom: "5vh"
      }}
    >
      {state.side === "question" ? (
        <Card
          onClick={() => {
            handleFlip();
          }}
          classes={{ root: classes.root }}
          className="card"
          raised={true}
        >
          <CardContent classes={{ root: classes.cardContent }}>
            <span
              style={{ position: "absolute", left: "16px", fontSize: "36px" }}
            >
              Q:
            </span>
            <div className="flexer">
              <p style={{ fontSize: "24px" }}>{props.card.question}</p>
            </div>
          </CardContent>
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
          <CardContent classes={{ root: classes.cardContent }}>
            <span
              style={{ position: "absolute", left: "16px", fontSize: "36px" }}
            >
              A:
            </span>
            <div className="flexer">
              <p style={{ fontSize: "24px" }}>{props.card.answer}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Question;
