import { ADD_WORD, INCREMENT } from "../Actions/ActionTypes";

let initialState = [];

const itemReducer = (state = initialState, action) => {


  switch (action.type) {

    case ADD_WORD: {
      let newArr = state.filter((item) => item.name !== action.payload);
      let obj = {
        name: action.payload,
        likes: 0,
      };
      return [...newArr, obj];
    };
    case INCREMENT: {
        return state.map((item) => {
          if (item.name === action.payload) {
            return { ...item, likes: item.likes + 1 };
          }
          return item;
        });
      }
      
    default:
      return state;
  }
};
export default itemReducer;
