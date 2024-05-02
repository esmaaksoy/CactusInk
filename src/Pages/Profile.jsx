import { useSelector } from "react-redux";
import useBlogCalls from "../service/useBlogCalls";
import { useEffect } from "react";
import Card from "../components/Card";
import { Header, NoData, UserProfile } from "../components/MyComponent";
import NotFound from "./NotFound";
import { ProgressSpinner } from "primereact/progressspinner";
import { Helmet } from 'react-helmet';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const { getProfile } = useBlogCalls();
  const { userBlog, loading, error } = useSelector((state) => state.blog);

  useEffect(() => {
    getProfile(user?._id);
  }, []);


  return (
    <>
     <Helmet>
        <title>Your Profile | CactusInk Blog</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <div className="m-2 sm:m-[3.5rem] min-h-screen">
        {error && <NotFound />}
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
          {userBlog.length === 0 && (
            <div>
              <NoData title={"You have no articles."} />
            </div>
          )}
          <div className="grid grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {userBlog.map((item, index) => (
              <div key={index} className="border">
                <p
                  className={`p-5 text-xl font-bold ${
                    item.isPublish ? "text-[#4B7755]" : "text-white"
                  }`}
                >
                  {item.isPublish ? "Publish" : "Draft"}
                </p>
                <Card key={index} {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
