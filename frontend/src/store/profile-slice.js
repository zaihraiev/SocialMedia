import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  isLoading: false,
  error: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileRequest: (state) => {
      state.isLoading = true;
    },
    profileSuccess: (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    },
    profileError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
