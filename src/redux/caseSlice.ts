import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  cases: [],
};

const caseSlice = createSlice({
  name: "cases",
  initialState,
  reducers: {},
});

export const {} = caseSlice.actions;

export default caseSlice.reducer;
