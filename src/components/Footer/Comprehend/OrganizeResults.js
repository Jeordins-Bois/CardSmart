import React, { useState } from "react";
import CreateCards from "./CreateCards";

const OrganizeResults = ({ entities, keyPhrases, textLength }) => {
  console.log("%centities", "color:red;", entities);
  console.log("%cKeyPhrases", "color:blue;", keyPhrases);

  const organized = [];

  let PERSON = entities.filter(entity => entity.Type === "PERSON");
  let DATE = entities.filter(entity => entity.Type === "DATE");
  let EVENT = entities.filter(entity => entity.Type === "EVENT");
  let LOCATION = entities.filter(entity => entity.Type === "LOCATION");
  let ORGANIZATION = entities.filter(entity => entity.Type === "ORGANIZATION");
  let QUANTITY = entities.filter(entity => entity.Type === "QUANTITY");
  let TITLE = entities.filter(entity => entity.Type === "TITLE");
  let OTHER = entities.filter(entity => entity.Type === "OTHER");

  console.log(textLength);

  console.log({
    PERSON,
    DATE,
    EVENT,
    LOCATION,
    ORGANIZATION,
    QUANTITY,
    TITLE,
    OTHER
  });

  const entityObj = {
    PERSON,
    DATE,
    EVENT,
    LOCATION,
    ORGANIZATION,
    QUANTITY,
    TITLE,
    OTHER
  };

  const removeDupOrgRes = arr => {
    let arrCopy = [...arr];
    for (let i = 0; i < arrCopy.length; i++) {
      for (let j = arrCopy.length - 1; j >= 0; j--) {
        if (
          arrCopy[i].Text.toLowerCase() === arrCopy[j].Text.toLowerCase() &&
          i !== j
        ) {
          arrCopy.splice(i, 1);
        }
      }
    }
    return arrCopy.filter(element => element.Score >= 0.8);
  };

  //map over entity obj passing into removeDupOrgRes
  for (let key in entityObj) {
    entityObj[key] = removeDupOrgRes(entityObj[key]);
  }

  for (let key in entityObj) {
    let holder = entityObj[key].map(e => flashCardCreator(e, key));
    if (holder.length !== 0) {
      organized.push(holder);
    }
  }

  function flashCardCreator(entity, type) {
    console.log("ey", entity, type);
    const dropdown = {
      person: ["Who is", "Who was", "Why is this person important:"],
      date: ["What Happened on", "What is significant about "],
      event: ["What happened during", "What is significant about"],
      location: ["Where is ", "What country is this location located in:"],
      organization: [
        "What is the significance of",
        "What is important about",
        "Who founded"
      ],
      quantity: ["What is this number associated with"],
      title: [
        "What is this about:",
        "What is the purpose of",
        "What is the main idea of"
      ],
      other: ["What is"]
    };

    const typeDetermine = type => {
      for (const key in dropdown) {
        if (key === type.toLowerCase()) {
          return dropdown[key];
        }
      }
    };
    //*Entity .TEXT will be the basis of the flash card creator

    //?---------------------------------USING keyPhrases
    //if any key phrases match.. ignore them
    //check score > .75
    //if begin/end Offset is within 10% of text length (if less than 200 chars include all of the text)
    //?---------------------------------

    return {
      dropdown: typeDetermine(type),
      subject: entity.Text
      // answer: object
    };
  }

  //map over each non null array and run flash card creator
  //pass result to next component to display

  return (
    <div>
      {organized.map(subject => {
        {
          return (
            <div>
              {subject.map((card, i2) => {
                return <CreateCards card={card} key={`Card ${i2}`} />;
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default OrganizeResults;
