import axios from "axios"

const useAxios = () => {
  const axiosPublic = axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}`,
  })
  return {axiosPublic}
}

export default useAxios