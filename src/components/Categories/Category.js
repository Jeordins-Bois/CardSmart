//Specific Category Card
import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import Container from "@material-ui/core/Container";

const Category = props => {
  return (
    //   Link goes to "Topics" page of corresponding category
    // <Link to={`/category/${props.id}`}>
    <Container maxWidth="md" color="primary">
      <div className="category-box">
        <h1 className="category-box-text">{props.category.name}</h1>
      </div>
    </Container>
    // </Link>
  );
};

export default Category;
