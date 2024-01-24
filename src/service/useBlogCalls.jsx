import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getLikeSuccess,
  getDetailSuccess,
  getCategorySuccess,
} from "../features/blogSlice";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();
  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic("/blogs/");
      dispatch(getBlogSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const postBlogs = async (blogInfo) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post("/blogs/", blogInfo);
    } catch (error) {
      dispatch(fetchFail());
    }
  };
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
  }
  return { getBlogs, postLike, getDetail, postComment, postBlogs,getCategories };
};

export default useBlogCalls;
