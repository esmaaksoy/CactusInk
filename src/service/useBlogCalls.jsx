import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getBlogSuccess } from "../features/blogSlice";
import useAxios from "./useAxios";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosPublic } = useAxios();
  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic("/blogs/");
      dispatch(getBlogSuccess(data.data));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { getBlogs };
};

export default useBlogCalls;
