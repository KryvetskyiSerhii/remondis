import { configureStore, combineReducers } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";
import inspectorsSlice from "./inspectorsSlice";
import caseSlice from "./caseSlice";

const rootReducer = combineReducers({
  generalSlice,
  inspectorsSlice,
  caseSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
