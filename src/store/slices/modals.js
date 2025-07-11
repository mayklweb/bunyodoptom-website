import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signUp: false,
  logIn: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, { payload }) => {
      if (payload === "signUp") {
        state.signUp = true;
        state.logIn = false;
        
      } else if (payload === "logIn") {
        state.logIn = true;
        state.signUp = false;
      }
    },
    modalClose: (state) => {
      state.signUp = false;
      state.logIn = false;
    },
  },
});

export const { modalClose, modalOpen } = ModalSlice.actions;
export default ModalSlice.reducer;
