import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const { axiosPublic } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return {login}
};

export default useAuthCalls;
