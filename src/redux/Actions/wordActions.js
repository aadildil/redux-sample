import { ADD_WORD, INCREMENT } from "./ActionTypes";

export const addWord =(text) => {
  return {
    type: ADD_WORD,
    payload: text,
  };
};

export const increment =(data) => {
  return {
    type: INCREMENT,
    payload: data,
  };
};
