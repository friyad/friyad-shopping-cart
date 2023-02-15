import { NAVIGATION } from "./actionTypes";

const initialState = {
  shownPage: "home",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATION:
      break;

    default:
      return state;
  }
};
export default reducer;
