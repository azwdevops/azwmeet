import { combineReducers } from "redux";

import auth from "./auth";
import shared from "./shared";
import meeting from "./meeting";

export default combineReducers({
  auth,
  shared,
  meeting,
});
