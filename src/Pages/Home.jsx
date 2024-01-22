import Card from "../components/Card";
import RightSide from "../components/RightSide";
import pen from "../assets/pen.webp"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCalls from "../service/useBlogCalls";
const Home = () => {
  const {blog} = useSelector((state)=>state.blog)
  const {getBlogs} = useBlogCalls()
  useEffect(() => {
  getBlogs()
  }, [])
  
  return (
    <div className="px-8 py-5 shadow-sm">
      <div className="p-5 bg-[#4b7755] mb-5 rounded-lg hidden sm:flex sm:justify-between">
        <div className="flex flex-col justify-center">
          <p className="font-great text-white text-5xl tracking-wider">
            Great writers are resilient in all conditions, just like
            <span className="text-[#AED1B2]"> cactus</span>.
          </p>
        </div>
        <div>
          <img
            src={pen}
            alt=""
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg">
          {blog.map((item)=> <Card {...item}/>)}
        
      
        </div>
        <RightSide/>
      </div>
    </div>
  );
};

export default Home;
