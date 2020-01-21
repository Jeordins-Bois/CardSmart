import React from "react";
import { Paper, Typography } from "@material-ui/core";

const EmptyHeader = props => {
  const [colorCards, setColors] = React.useState([
    {
      positionY: "-30px",
      rotate: "3deg",
      id: "orange",
      color: "#ff9800"
    },
    {
      positionY: "-25px",
      rotate: "2.5deg",
      id: "yellow",
      color: "#ffeb3b"
    },
    {
      positionY: "-20px",
      rotate: "2deg",
      id: "green",
      color: "#4caf50"
    },
    {
      positionY: "-15px",
      rotate: "1.5deg",
      id: "blue",
      color: "#2196f3"
    },
    {
      positionY: "-10px",
      rotate: "1deg",
      id: "purple",
      color: "#9c27b0"
    },
    {
      positionY: "-5px",
      rotate: ".5deg",
      id: "red",
      color: "#f44336"
    },
    {
      positionX: "0px",
      positionY: "0px",
      rotate: "0deg",
      id: "white",
      color: "white",
      content: (
        <Typography variant="h4" align="center">
          {"Log in or create an account to see your saved decks!"}
        </Typography>
      )
    }
  ]);
  return (
    <div
      className="paper-holder"
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        top: "25%"
      }}
    >
      {colorCards.map(e => {
        return (
          <Paper
            className={props.classes.spaceHolder}
            style={{
              backgroundColor: e.color,
              position: "absolute",
              transform: `translateY(${e.positionY}) rotate(${e.rotate})`
            }}
          >
            {e.content ? e.content : null}
          </Paper>
        );
      })}
      {/* <Paper className={props.classes.spaceHolder}>
        <Typography variant="h4" align="center">
          {"Log in or create an account to see your saved decks!"}
        </Typography>
      </Paper> */}
    </div>
  );
};

export default EmptyHeader;
