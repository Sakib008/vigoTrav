// features/itinerary/itinerarySlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import dayReducer, { setDay, clearDay, dayInitialState,type Day } from "./EventSlice";

interface ItineraryState {
  id: number;
  name: string;
  day: Day;
}

const initialState: ItineraryState = {
  id: 1,
  name: "My Trip",
  day: dayInitialState,
};

const itinerarySlice = createSlice({
  name: "itinerary",
  initialState,
  reducers: {
    renameItinerary(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setDay, (state, action) => {
        // delegate to dayReducer
        state.day = dayReducer(state.day, action);
      })
      .addCase(clearDay, (state) => {
        state.day = dayInitialState;
      });
  },
});

export const { renameItinerary } = itinerarySlice.actions;
export default itinerarySlice.reducer;
