import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
interface UserState {
  user: {};
  value: {};
}

// Define the initial state using that type
const initialState: UserState = {
  user: { name: "jarda" },
  value: {},
};

export const userSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (user: RootState) => user.user.value;

export default userSlice.reducer;
