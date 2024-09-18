//"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice"; // Import the user reducer
import shopReducer from "./features/shopSlice"; // Import the shop reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
