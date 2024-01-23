import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getBlogSuccess,
  getLikeSuccess,
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
  const postLike = async (id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/blogs/${id}/postLike/`);
      dispatch(getLikeSuccess());
      getBlogs();
      console.log("ess")
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getBlogs, postLike };
};

export default useBlogCalls;
