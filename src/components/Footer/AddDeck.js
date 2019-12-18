import React from "react";
import { TextField } from "@material-ui/core";

const AddDeck = props => {
  return (
    <section>
      <div>
        Write your title here -->
        <TextField
          label="Title of Deck"
          name="title"
          value={props.cardSetUp.title}
          onChange={e =>
            props.setCard({
              category: props.cardSetUp.category,
              title: e.target.value,
              color: props.cardSetUp.color
            })
          }
        />
      </div>
    </section>
  );
};

export default AddDeck;
