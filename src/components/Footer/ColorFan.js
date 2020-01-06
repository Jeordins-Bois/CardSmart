import React from "react";
import "./ColorFan.css";

const clearSelect = () => {
  const selected = document.querySelectorAll(".selected");
  selected.forEach(e => {
    e.classList.remove("selected");
  });
};

const ColorFan = props => {
  const [selected, setSelected] = React.useState("");
  clearSelect();
  if (selected) document.getElementById(selected).classList.add("selected");
  return (
    <section id="color-fan-holder">
      <div
        id="orange"
        className="circle"
        style={{ backgroundColor: "#f56942" }}
        onClick={() => {
          setSelected("orange");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f56942",
            notes: props.cardSetUp.notes
          });
        }}
      />
      <div
        id="yellow"
        className="circle"
        style={{ backgroundColor: "#f5f542" }}
        onClick={() => {
          setSelected("yellow");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f5f542",
            notes: props.cardSetUp.notes
          });
        }}
      />
      <div
        id="green"
        className="circle"
        style={{ backgroundColor: "#42f56c" }}
        onClick={() => {
          setSelected("green");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#42f56c",
            notes: props.cardSetUp.notes
          });
        }}
      />
      <div
        id="blue"
        className="circle"
        style={{ backgroundColor: "#428df5" }}
        onClick={() => {
          setSelected("blue");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#428df5",
            notes: props.cardSetUp.notes
          });
        }}
      />
      <div
        id="purple"
        className="circle"
        style={{ backgroundColor: "#e042f5" }}
        onClick={() => {
          setSelected("purple");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#e042f5",
            notes: props.cardSetUp.notes
          });
        }}
      />
      <div
        id="red"
        className="circle"
        style={{ backgroundColor: "#f54266" }}
        onClick={() => {
          setSelected("red");
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: "#f54266",
            notes: props.cardSetUp.notes
          });
        }}
      />
    </section>
  );
};

export default ColorFan;
