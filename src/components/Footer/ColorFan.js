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
  const [colors, setColors] = React.useState([
    { id: "orange", color: "#ff9800" },
    { id: "yellow", color: "#ffeb3b" },
    { id: "green", color: "#4caf50" },
    { id: "blue", color: "#2196f3" },
    { id: "purple", color: "#9c27b0" },
    { id: "red", color: "#f44336" },
  ]);

  clearSelect();
  if (selected) document.getElementById(selected).classList.add("selected");

  return (
    <section id="color-fan-holder">
      {colors.map(e => {
        return <div id={e.id} className='circle' style={{backgroundColor: e.color}} onClick={() => {
          setSelected(e.id);
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: e.color,
            notes: props.cardSetUp.notes
          });
        }}/>
      })}
      
    </section>
  );
};

export default ColorFan;
