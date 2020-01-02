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
            color: "#f56942",
            notes: props.cardSetUp.notes
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
            color: "#f5f542",
            notes: props.cardSetUp.notes
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
            color: "#42f56c",
            notes: props.cardSetUp.notes
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
            color: "#428df5",
            notes: props.cardSetUp.notes
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
            color: "#e042f5",
            notes: props.cardSetUp.notes
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
            color: "#f54266",
            notes: props.cardSetUp.notes
          })
        }
      />
    </section>
  );
};

export default ColorFan;
