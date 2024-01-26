import { useSelector } from "react-redux";
import {
  CalendarComp,
  Header,
  UserProfile,
  PostCard,
} from "../components/MyComponent";
import { useEffect, useState } from "react";
import useBlogCalls from "../service/useBlogCalls";

const RightSide = () => {
  const { user } = useSelector((state) => state.auth);
  const { getNews } = useBlogCalls();
  const { news } = useSelector((state) => state.blog);
  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="hidden lg:block lg:w-[30%] px-6 bg-[#AED1B2] rounded-lg">
      {user && <UserProfile />}

      <Header title={"search the blog"} />

      <div className="pt-3 flex flex-wrap gap-2 justify-center">
        <input
          type="text"
          className="border border-[#E1E4DD] p-2 rounded-md"
        />
        <button className="bg-[#4B7755] text-[#E1E4DD] p-2  rounded-md">
          SEARCH{" "}
        </button>
      </div>
      <CalendarComp />
      <Header title={"popular post"} />
      {news.map((item, index) => (
        <PostCard key={index} {...item} />
      ))}

      {/* <PostCard />
    <PostCard /> */}
    </div>
  );
};

export default RightSide;
