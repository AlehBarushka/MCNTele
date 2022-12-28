import { combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./slices/postsSlice";

const rootReducer = combineReducers({
  posts: postsSlice,
});

export default rootReducer;
