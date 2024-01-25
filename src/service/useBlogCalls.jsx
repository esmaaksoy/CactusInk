import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getLikeSuccess,
  getDetailSuccess,
  getCategorySuccess,
  getProfileSuccess,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();
  const getBlogs = async (page) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(`/blogs?page=${page}&limit=5`);
      dispatch(getBlogSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postBlogs = async (blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", blogInfo);
      toastSuccessNotify("The blog has been successfully created")
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Oops, an error occurred.")
    }
  };
  const putBlogs = async(id,blogInfo)=>{
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/blogs/${id}`, blogInfo);
      getDetail(id)
    } catch (error) {
      dispatch(fetchFail());
    }
  }
  const postLike = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${id}/postLike/`);
      dispatch(getLikeSuccess());
      getBlogs();
      console.log("ess");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getDetail = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs/${id}`);
      dispatch(getDetailSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postComment = async (commentInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/comments/", commentInfo);
      getDetail(commentInfo.blogId);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getCategories = async()=>{
    dispatch(fetchStart());
    try {
      const {data} = await axiosWithToken("/categories/");
      dispatch(getCategorySuccess(data.data))
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const getProfile = async(id)=>{
    dispatch(fetchStart());
    try {
      const {data} = await axiosWithToken(`/blogs?author=${id}&limit=10000`);
      dispatch(getProfileSuccess(data.data))
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const deleteBlogs = async(id)=>{
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${id}`)
    } catch (error) {
      dispatch(fetchFail());
    }
  }
  return { getBlogs, postLike, getDetail, postComment, postBlogs,getCategories, getProfile, putBlogs,deleteBlogs };
};

export default useBlogCalls;
