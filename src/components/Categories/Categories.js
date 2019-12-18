//Full list of categories
import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import "./Categories.css";

const Categories = () => {
  //state for storing categories list, to be able to map them
  const [state, setState] = useState({
    categories: []
  });

  //is called once on render
  useEffect(() => {
    axios
      .get("/api/categories")
      .then(res => {
        setState({ ...state, categories: res.data });
      })
      .catch(err => "getCategories error: " + err);
  }, []);

  return (
    <>
      <div style={{ height: "15vh", backgroundColor: "#f5f5f5" }}></div>
      <section className="container">
        {/* mapping over categories on state, passing info received from the axios request down as props*/}
        {state.categories.map(category => {
          return (
            <Category
              key={`categorykey${category.category_name}`}
              category={category}
            />
          );
        })}
      </section>
    </>
  );
};

export default Categories;
