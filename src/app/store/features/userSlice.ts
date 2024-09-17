import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

// Define the user state interface
interface UserState {
  loggedIn: boolean;
  id: string;
  name: string;
  email: string;
}

// Define the initial state
const initialState: UserState = {
  loggedIn: false,
  id: "",
  name: "",
  email: "",
};

// Create the user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.loggedIn = action.payload.loggedIn;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
    },
    updateUsername: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

// Export the actions
export const { setUser, clearUser, updateUsername, updateEmail } =
  userSlice.actions;

// Export the reducer
export default userSlice.reducer;
