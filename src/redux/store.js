import { createStore } from "redux";
import itemReducer from "./reducer/itemReducer";

const store=createStore(itemReducer);
export default store;