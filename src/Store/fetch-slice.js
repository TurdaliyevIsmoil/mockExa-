import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    categories: [],
  },
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const fetchAction = fetchSlice.actions;
