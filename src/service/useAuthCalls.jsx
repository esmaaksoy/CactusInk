import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import useAxios from "./useAxios";
import { useDispatch } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

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
      toastSuccessNotify("Login successful.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login attempt failed.");
    }
  };
  const logout = async () =>{
    dispatch(fetchStart())
    try {
      await axiosWithToken("/auth/logout/")
      dispatch(logoutSuccess())
      toastSuccessNotify("Logout successful.");
      navigate("/")
    } catch (error) {
        dispatch(fetchFail())
        toastErrorNotify("Logout attempt failed.");
    }
  }
  const register = async (userInfo)=>{
    dispatch(fetchStart());
    try {
      const {data} = await axiosPublic.post("/users/", userInfo)
      dispatch(registerSuccess(data))
      toastSuccessNotify("Registration successful.");
      navigate(-1)
    } catch (error) {
      dispatch(fetchFail())
      toastErrorNotify("Registration unsuccessful.");
    }
  }

  return {login, logout, register}
};

export default useAuthCalls;
