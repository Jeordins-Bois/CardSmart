//Full list of categories
import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";
import "./Categories.css";

const Categories = () => {
  //state for storing categories list, to be able to map them
  const [state, setState] = useState({
    categories: [
      // {
      //   title: "dummy thicc data",
      //   description: "I'm trying to code, but the clap of this card's etc.",
      //   id: 1
      // },
      // { title: "category 2", description: "The boring one", id: 2 },
      // { title: "djkhaled", description: "another one", id: 3 }
    ]
  });

  //is called once on render
  useEffect(() => {
    axios.get("/api/categories").then(res => {
      setState({ ...state, categories: res.data });
      console.log(state);
    });
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
