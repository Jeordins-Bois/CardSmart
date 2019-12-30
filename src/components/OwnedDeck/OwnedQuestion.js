import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardContent, Button } from "@material-ui/core";
import "./OwnedCards.css";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  cardContent: {
    position: "relative",
    width: "90%",
    height: "100%"
  }
}));

const OwnedQuestion = props => {
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
        marginBottom: "5vh",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <div className="button-holder">
        <Button>EDIT</Button>
        <Button>DELETE</Button>
      </div>
      {state.side === "question" ? (
        <Card
          onMouseOver
          onClick={() => {
            handleFlip();
          }}
          classes={{ root: classes.root }}
          className="owned-card"
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

export default OwnedQuestion;
