import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: false,
  logIn: false,
  product: false,
  menu: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, { payload }) => {
      if (payload === "signUp") {
        state.signUp = true;
        state.logIn = false;
        state.product = false;
        state.menu = false
      } else if (payload === "logIn") {
        state.logIn = true;
        state.signUp = false;
        state.product = false;
        state.menu = false
      } else if (payload === "product") {
        state.product = true;
        state.logIn = false;
        state.signUp = false;
        state.menu = false
      } else if (payload === "menu") {
        state.menu = true
        state.product = false;
        state.logIn = false;
        state.signUp = false;
      }
    },
    modalClose: (state) => {
      state.signUp = false;
      state.logIn = false;
      state.product = false;
    },
  },
});

export const { modalClose, modalOpen,  } = ModalSlice.actions;
export default ModalSlice.reducer;
