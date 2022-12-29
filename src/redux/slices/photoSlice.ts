import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IPhotoDataState } from "./types";

import { getPhotos } from "../../api/rest/getPhotos";

const initialState: IPhotoDataState = {
  photos: [],
  isLoading: false,
  total: null,
  error: null,
};

export const getPhoto = createAsyncThunk(
  "photo/getPhoto",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPhotos();

      return response;
    } catch (error) {
      const err = error as TypeError;

      return rejectWithValue(err.message);
    }
  }
);

const postsSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhoto.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhoto.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.total = payload.total_results;
        state.photos = [...state.photos, ...payload.photos];
        state.error = null;
      })
      .addCase(getPhoto.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default postsSlice.reducer;
