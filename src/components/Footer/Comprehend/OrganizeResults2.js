import React, { useState } from "react";
import CreateCards from "./CreateCards";
import { connect } from "react-redux";
import { setQuestions } from "../../../ducks/reducers/comprehendReducer";

import Button from "@material-ui/core/Button";

const OrganizeResults2 = props => {
  let [reRender, initializeRender] = useState(0);

  const deleteItem = (categoryIndex, questionIndex) => {
    console.log("hit", categoryIndex, questionIndex);
    props.organized[categoryIndex].splice(questionIndex, 1);
    initializeRender(reRender + 1);
    console.log(props.organized);
  };

  console.log(props.reduxState.comprehendReducer);
  return (
    <div>
      {props.organized.map((subject, categoryIndex) => {
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
      <Button onClick={() => props.setQuestions(props.organized)}>Save</Button>
    </div>
  );
};

const mapReduxStateToProps = reduxState => {
  return {
    reduxState
  };
};

export default connect(mapReduxStateToProps, { setQuestions })(
  OrganizeResults2
);
