import { NAVIGATION } from "./actionTypes";

const initialState = {
  shownPage: "home",
};

const reducer = (state = initialState, action) => {
  const updatedState = { ...state };

  switch (action.type) {
    case NAVIGATION:
      updatedState.shownPage = action.to;
      return updatedState;

    default:
      return updatedState;
  }
};
export default reducer;
