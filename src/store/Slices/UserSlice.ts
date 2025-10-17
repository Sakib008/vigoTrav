import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
}

const initialState: UserState = {
  name: "",
};

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        setUserName(state: UserState, action: PayloadAction<string>) {
            state.name = action.payload;
        }
    }
})

export const {setUserName} = userSlice.actions;
export default userSlice.reducer;