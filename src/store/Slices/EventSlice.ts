// features/day/daySlice.ts
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

export interface Day {
  id: number;
  title: string;
  notes: string;
}

const initialState: Day = {
  id: 0,
  title: "",
  notes: "",
};

const daySlice = createSlice({
  name: "day",
  initialState,
  reducers: {
    setDay(state, action: PayloadAction<Day>) {
      return action.payload;
    },
    clearDay() {
      return initialState;
    },
  },
});

export const { setDay, clearDay } = daySlice.actions;
export default daySlice.reducer;
export const dayInitialState = initialState;
