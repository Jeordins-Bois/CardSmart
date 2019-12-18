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
          color: props.cardSetUp.color
        });
      }}
    >
      {props.category.title}
    </h1>
  );
};

export default FooterCategory;
