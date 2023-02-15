import { NAVIGATION } from "./actionTypes";

export const handleNavigation = (to) => {
  return {
    type: NAVIGATION,
    to: to,
  };
};
