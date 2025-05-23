import { createSlice } from "@reduxjs/toolkit";

const savedProduct = localStorage.getItem("talentsDetails");

const initialState = {
  talentsDetails: savedProduct ? JSON.parse(savedProduct) : null,
};

const talentsSlice = createSlice({
  name: "talents",
  initialState,
  reducers: {
    setTalentsDetails: (state, action) => {
      state.talentsDetails = action.payload;
      localStorage.setItem("talentsDetails", JSON.stringify(action.payload));
    },
  },
});

export const { setTalentsDetails } = talentsSlice.actions;
export default talentsSlice.reducer;
