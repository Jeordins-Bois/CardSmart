import { SET_CATEGORY, SET_TOPIC } from "../actionTypes";
import axios from "axios";

const initialState = {
  category: " ",
  topic: " "
};

export const setCategory = name => {
  const category = axios
    .put(`/api/category/${name}`)
    .then(res => res.data)
    .catch(err => console.log("setCategory error: " + err));
  return {
    type: SET_CATEGORY,
    payload: category
  };
};

export const getCategory = () => {
  const topic = axios
    .get("/api/category")
    .then(res => res.data)
    .catch(err => console.log("getCategory error: " + err));
  return {
    type: SET_CATEGORY,
    payload: topic
  }
  };

export const setTopic = name => {
  const topic = axios
    .put(`/api/topic/${name}`)
    .then(res => res.data)
    .catch(err => console.log("setTopic error: " + err));
  return {
    type: SET_TOPIC,
    payload: topic
  };
};

export const getTopic = () => {
  const topic = axios
  .get(`/api/topic/`)
  .then(res => res.data)
  .catch(err => console.log("getTopic error: " + err));
return {
  type: SET_TOPIC,
  payload: topic
};
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORY + "_FULFILLED":
      return { ...state, category: payload };
    case SET_TOPIC + "_FULFILLED":
      return { ...state, topic: payload };

    default:
      return state;
  }
}
