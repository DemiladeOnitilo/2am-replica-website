import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setCategory } = jobsSlice.actions;
export default jobsSlice.reducer;