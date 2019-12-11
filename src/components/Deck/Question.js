//Specific Question
import React, { useState, useEffect } from "react";
import "./Deck.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardContent } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({}));

const Question = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="md" style={{ marginBottom: "5vh" }}>
      <Card>
        <CardContent>{props.question}</CardContent>
      </Card>
    </Container>
  );
};

export default Question;
