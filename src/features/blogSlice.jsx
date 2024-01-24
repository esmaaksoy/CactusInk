import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blog: [],
  detail:{},
  categories:[],
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
    getBlogSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.blog = payload;
    },
    getLikeSuccess: (state) => {
      state.loading = false;
      state.error = false;
    },
    getDetailSuccess:(state, {payload})=>{
      state.loading = false;
      state.error = false;
      state.detail = payload
    },
    getCategorySuccess:(state,{payload})=>{
      state.loading = false;
      state.error = false;
      state.categories = payload
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchStart, fetchFail, getBlogSuccess, getLikeSuccess,getDetailSuccess,getCategorySuccess } =
  blogSlice.actions;
export default blogSlice.reducer;
