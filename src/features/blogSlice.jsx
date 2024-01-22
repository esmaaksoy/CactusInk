import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userData: {},
  loading: "",
  error: false,
  token: "",
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const {fetchStart, fetchFail} = blogSlice.actions;
export default blogSlice.reducer;
