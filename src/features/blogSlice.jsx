import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blog: [],
  detail:{},
  categories:[],
  userBlog:[],
  pagination:{},
  news:[],
  loading: false,
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
      state.blog = payload.apiData;
      state.pagination =payload.pagination
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
    getProfileSuccess:(state,{payload})=>{
      state.loading = false;
      state.error = false;
      state.userBlog =payload;
    },
    getNewsSuccess:(state,{payload})=>{
      state.loading = false;
      state.error = false;
      state.news = payload
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const { fetchStart, fetchFail, getBlogSuccess, getLikeSuccess,getDetailSuccess,getCategorySuccess,getProfileSuccess, getNewsSuccess } =
  blogSlice.actions;
export default blogSlice.reducer;
