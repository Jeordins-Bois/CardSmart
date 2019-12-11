//Full list of categories
import React, { useState, useEffect } from "react";
import Category from "./Category";
import "./Categories.css";


const Categories = () => {
  //state for storing categories list, to be able to map them
  const [state, setState] = useState({
    categories: [
      { name: "dummy data", id: 1 },
      { name: "category 2", id: 2 },
      { name: "anotherone.djkhaled.mp3", id: 3 }
    ]
  });

  //is called once on render, and every time state.categories changes ;)
  useEffect(() => {
    //endpoint to get categories
    //setState should be called here to change state.categories
  }, [state.categories]);

  return (
    <section className="categories-container">
      {/* mapping over categories on state, passing info received from the axios request down as props*/}
      {state.categories.map(category => {
        return (
          <Category key={`categorykey${category.name}`} category={category} />
        );
      })}
    </section>
  );
};

export default Categories;
