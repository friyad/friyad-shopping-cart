import { combineReducers } from "redux";
import globalReducer from "./globals/reducer";
import productReducer from "./products/reducer";

const rootReducer = combineReducers({
  globals: globalReducer,
  products: productReducer,
});

export default rootReducer;
