import React from "react";
import { Paper, Typography } from "@material-ui/core";

const EmptyHeader = props => {
  const [colorCards, setColors] = React.useState([
    {
      positionY: "-60px",
      rotate: "8deg",
      id: "orange",
      color: "#ff9800",
      elevation: 0
    },
    {
      positionY: "-50px",
      rotate: "5deg",
      id: "yellow",
      color: "#ffeb3b",
      elevation: 1
    },
    {
      positionY: "-40px",
      rotate: "3deg",
      id: "green",
      color: "#4caf50",
      elevation: 2
    },
    {
      positionY: "-30px",
      rotate: "2deg",
      id: "blue",
      color: "#2196f3",
      elevation: 3
    },
    {
      positionY: "-20px",
      rotate: "1deg",
      id: "purple",
      color: "#9c27b0",
      elevation: 4
    },
    {
      positionY: "-10px",
      rotate: "1deg",
      id: "red",
      color: "#f44336",
      elevation: 5
    },
    {
      positionX: "0px",
      positionY: "0px",
      rotate: "0deg",
      id: "white",
      color: "white",
      elevation: 6,
      content: (
        <Typography variant="h5" align="center" style={{ marginTop: "20px" }}>
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
            elevation={e.elevation}
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
    </div>
  );
};

export default EmptyHeader;
