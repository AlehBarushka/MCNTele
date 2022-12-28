import { createSlice } from "@reduxjs/toolkit";
import { IPostDataState } from "./types";

const initialState: IPostDataState = {
  posts: [],
  error: null,
};

const postsSlice = createSlice({
  name: "postsData",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
