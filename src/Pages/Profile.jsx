import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";
import Card from "../components/Card";
import { Header, UserProfile } from "../components/MyComponent";
import NotFound from "./NotFound";
import { ProgressSpinner } from "primereact/progressspinner";
const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { getProfile } = useBlogCalls();
  const { userBlog,loading,error } = useSelector((state) => state.blog);
  useEffect(() => {
    getProfile(user?._id);
  }, []);
  return (
    <div className="m-2 sm:m-[3.5rem] min-h-screen">
      {error && <NotFound/>}
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <ProgressSpinner />
        </div>
      )}
      <div className="bg-[#AED1B2] mb-5">
        <UserProfile />
      </div>
      <div className="bg-[#AED1B2] p-2 sm:p-10">
        <div className="mb-5">
          <Header title={"my articles"} />
        </div>
        <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {" "}
          {userBlog.map((item, index) => (
            <div className="border">
              <p className="p-5 text-[#4B7755]">
                {item.isPublish ? "Publish" : "You published as a draft."}
              </p>
              <Card key={index} {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
