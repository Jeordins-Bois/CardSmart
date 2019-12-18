import React from "react";
import "./ColorFan.css";

const ColorFan = props => {
  return (
    <section id="color-fan-holder">
      <div
        className="circle"
        style={{ backgroundColor: "#f56942" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f56942"
          })
        }
      />
      <div
        className="circle"
        style={{ backgroundColor: "#f5f542" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f5f542"
          })
        }
      />
      <div
        className="circle"
        style={{ backgroundColor: "#42f56c" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#42f56c"
          })
        }
      />
      <div
        className="circle"
        style={{ backgroundColor: "#428df5" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#428df5"
          })
        }
      />
      <div
        className="circle"
        style={{ backgroundColor: "#e042f5" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#e042f5"
          })
        }
      />
      <div
        className="circle"
        style={{ backgroundColor: "#f54266" }}
        onClick={() =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f54266"
          })
        }
      />
    </section>
  );
};

export default ColorFan;
