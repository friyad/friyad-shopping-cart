import { combineReducers } from "redux";
import globalReducer from "./globals/reducer";

const rootReducer = combineReducers({
  globals: globalReducer,
});

export default rootReducer;
