import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from "../features/authSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
  const { axiosPublic, axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login/", userInfo);
      dispatch(loginSuccess(data));
      navigate(-1)
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const logout = async () =>{
    dispatch(fetchStart())
    try {
      await axiosWithToken("/auth/logout/")
      dispatch(logoutSuccess())
      navigate(-1)
    } catch (error) {
        dispatch(fetchFail())
    }
  }
  return {login, logout}
};

export default useAuthCalls;
