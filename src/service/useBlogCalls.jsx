import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getAllBlogSuccess,
  getLikeSuccess,
  getDetailSuccess,
  getCategorySuccess,
  getProfileSuccess,
} from "../features/blogSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken} = useAxios();

  const getBlogs = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic(url);
      const apiData = data.data;
      const pagination = data.details;
      dispatch(getBlogSuccess({ apiData, pagination }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getAllBlogs = async () => {
    try {
      const { data } = await axiosPublic("/blogs/");
      dispatch(getAllBlogSuccess(data.data));
    } catch (error) {
    }
  };
  
  const postBlogs = async (blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", blogInfo);
      toastSuccessNotify("The blog has been successfully created");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Oops, an error occurred.");
    }
  };

  const putBlogs = async (id, blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/blogs/${id}`, blogInfo);
      getDetail(id);
      toastSuccessNotify("Blog updated.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Update failed.");
    }
  };

  const postLike = async (id,url) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${id}/postLike`);
      dispatch(getLikeSuccess());
      getBlogs(url);
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

  const getCategories = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("/categories");
      dispatch(getCategorySuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const getProfile = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/blogs?author=${id}&limit=10000`);
      dispatch(getProfileSuccess(data.data));
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
  
  const deleteBlogs = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/blogs/${id}`);
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getBlogs,
    getAllBlogs,
    postLike,
    getDetail,
    postComment,
    postBlogs,
    getCategories,
    getProfile,
    putBlogs,
    deleteBlogs,
  };
};
export default useBlogCalls;
