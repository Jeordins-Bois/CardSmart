import React from "react";

const AddDeck = props => {
  return (
    <section>
      <div>
        Write your title here -->
        <input
          placeholder="Title"
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
