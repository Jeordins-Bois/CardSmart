import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Card,
  CardContent,
  Button,
  TextField
} from "@material-ui/core";
import "./OwnedCards.css";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  ownedRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginBottom: 0
  },
  cardContent: {
    position: "relative",
    width: "90%",
    height: "100%"
  }
}));

const OwnedQuestion = props => {
  const [state, setState] = useState({
    side: "question",
    userId: null,
    question: props.card.question,
    answer: props.card.answer,
    edit: false
  });

  const classes = useStyles();

  const handleFlip = () => {
    return state.edit
      ? null
      : state.side === "question"
      ? setState({ ...state, side: "answer" })
      : setState({ ...state, side: "question" });
  };

  const setEdit = () => {
    setState({ ...state, edit: !state.edit });
    //!axios request here?
  };

  const handleChange = e => {
    console.log(state.side);
    console.log(e.target.value);
    setState({ ...state, [state.side]: e.target.value });
  };

  return (
    <>
      {
        <Container
          maxWidth="lg"
          style={{
            marginBottom: "5vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {state.side === "question" ? (
            <Card
              onClick={() => {
                handleFlip();
              }}
              classes={{ root: classes.ownedRoot }}
              className="owned-card"
              raised={true}
            >
              <CardContent classes={{ root: classes.cardContent }}>
                <span
                  style={{
                    position: "absolute",
                    left: "16px",
                    fontSize: "24px"
                  }}
                >
                  Q:
                </span>
                <div className="flexer">
                  {state.edit ? (
                    <TextField
                      onChange={e => handleChange(e)}
                      variant="filled"
                      multiline
                      value={state.question}
                    />
                  ) : (
                    <p style={{ fontSize: "18px" }}>{state.question}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card
              onClick={() => {
                handleFlip();
              }}
              classes={{ root: classes.ownedRoot }}
              className="owned-card"
              raised={false}
            >
              <CardContent classes={{ root: classes.cardContent }}>
                <span
                  style={{
                    position: "absolute",
                    left: "16px",
                    fontSize: "24px"
                  }}
                >
                  A:
                </span>
                <div className="flexer">
                  {state.edit ? (
                    <TextField
                      onChange={e => handleChange(e)}
                      variant="filled"
                      multiline
                      value={state.answer}
                    />
                  ) : (
                    <p style={{ fontSize: "18px" }}>{state.answer}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
          <div className="button-holder">
            <Button onClick={setEdit}>{state.edit ? "SAVE" : "EDIT"}</Button>
            <Button>DELETE</Button>
          </div>
        </Container>
      }
    </>
  );
};

export default OwnedQuestion;
