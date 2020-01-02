import React from "react";

const FooterCategory = props => {
  console.log(props);
  return (
    <h1
      onClick={function() {
        props.setCompleted(true);
        props.setCard({
          category: props.category,
          title: props.cardSetUp.title,
          color: props.cardSetUp.color,
          notes: props.cardSetUp.notes
        });
      }}
    >
      {props.category.category_name}
    </h1>
  );
};

export default FooterCategory;
