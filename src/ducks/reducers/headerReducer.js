import { GET_CATEGORY, GET_TOPIC } from "../actionTypes";

const initialState = {
  category: "",
  topic: ""
};

//NOT FULLY WORKING YET, I'LL NEED TO SETUP SOME ENDPOINTS FIRST TO FIGURE IT OUT
export const getCategory = category => {
  console.log(category);
  return {
    type: GET_CATEGORY,
    payload: category
  };
};

export const getTopic = topic => {
  return {
    type: GET_TOPIC,
    payload: topic
  };
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORY + "_PENDING":
      return { ...state };
    case GET_CATEGORY + "_FULFILLED":
      return { ...state, category: payload };
    case GET_TOPIC + "_PENDING":
      return { ...state };
    case GET_TOPIC + "FULFILLED":
      return { ...state, topic: payload };
    default:
      return state;
  }
}
