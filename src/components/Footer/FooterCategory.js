import React from "react";

const FooterCategory = props => {
    console.log(props)
  return (
    <h1>
      {props.category.title}
    </h1>
  );
};

export default FooterCategory;
