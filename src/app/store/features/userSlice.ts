import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the user state interface
interface UserState {
  loggedIn: boolean;
  name: string;
  email: string;
}

// Define the initial state
const initialState: UserState = {
  loggedIn: false,
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
