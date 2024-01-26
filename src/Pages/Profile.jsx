import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";
import Card from "../components/Card";
import { UserProfile } from "../components/MyComponent";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { getProfile } = useBlogCalls();
  const { userBlog } = useSelector((state) => state.blog);
  useEffect(() => {
    getProfile(user?._id);
  }, []);

  return (
    <div className="m-[3.5rem] min-h-screen">
      <div className="bg-[#AED1B2] mb-5">
        <UserProfile />
      </div>
      <div className="bg-[#AED1B2] p-10 grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {userBlog.map((item, index) => (
          <div className="">
             <Card key={index} {...item} />
          </div>
            
        
         
        ))}
      </div>
    </div>
  );
};

export default Profile;
