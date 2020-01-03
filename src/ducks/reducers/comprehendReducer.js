//import action types needed
import axios from "axios";

const initialState = {
  organizedCards: []
};

const SETQUESTIONS = "SETQUESTIONS";

//functions here
export const setQuestions = cards => {
  return {
    type: SETQUESTIONS,
    payload: cards
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SETQUESTIONS:
      return { organizedCards: [...payload] };
    default:
      return state;
  }
}
