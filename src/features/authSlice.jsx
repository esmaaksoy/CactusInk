import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: "",
  loading: "",
  error: false,

};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess:(state, {payload}) =>{
      state.loading = false  
    },
    fetchFail: (state) => {
        state.loading = false
        state.error = true
      },
  },
});
export const {fetchStart, fetchFail, loginSuccess} = authSlice.actions;
export default authSlice.reducer