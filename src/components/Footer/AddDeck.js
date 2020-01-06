import React from "react";
import { TextField } from "@material-ui/core";

const AddDeck = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <TextField
        style={{ width: "80%" }}
        label="Title of Deck"
        name="title"
        value={props.cardSetUp.title}
        onChange={e =>
          props.setCard({
            category: props.cardSetUp.category,
            title: e.target.value,
            color: props.cardSetUp.color,
            notes: props.cardSetUp.notes
          })
        }
      />
    </div>
  );
};

export default AddDeck;
