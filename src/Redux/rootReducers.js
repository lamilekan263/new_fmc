import { combineReducers } from "redux";

import AuthReducer from "./auth/authReducer";
import profileReducer from './profileReducer';


export default combineReducers({
  auth: AuthReducer,
  profile: profileReducer,
});
