import React, { useState } from "react";
import CreateCards from "./CreateCards";

const OrganizeResults2 = ({ organized }) => {
  let [reRender, initializeRender] = useState(0);

  const deleteItem = (categoryIndex, questionIndex) => {
    console.log("hit", categoryIndex, questionIndex);
    organized[categoryIndex].splice(questionIndex, 1);
    initializeRender(reRender + 1);
    console.log(organized);
  };

  return (
    <div>
      {organized.map((subject, categoryIndex) => {
        console.log(subject);
        {
          return (
            <div>
              {subject.map((card, i2) => {
                return (
                  <CreateCards
                    card={card}
                    categoryIndex={categoryIndex}
                    deleteItem={deleteItem}
                    questionIndex={i2}
                    key={`Card ${i2}`}
                  />
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default OrganizeResults2;
