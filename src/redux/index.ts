import { combineReducers } from "@reduxjs/toolkit";
import photoSlice from "./slices/photoSlice";

const rootReducer = combineReducers({
  photo: photoSlice,
});

export default rootReducer;
