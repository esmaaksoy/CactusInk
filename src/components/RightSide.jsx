import { useSelector } from "react-redux";
import {
  CalendarComp,
  Header,
  UserProfile,
  PostCard,
} from "../components/MyComponent";
import useBlogCalls from "../service/useBlogCalls";
const RightSide = ({ search, setSearch, first, rows }) => {
  const { user } = useSelector((state) => state.auth);
  const { getBlogs} = useBlogCalls();
  const {blog} = useSelector((state) => state.blog);
  const handleSearch = () => {
    getBlogs(`/blogs?page=${first / rows + 1}&limit=3&search[title]=${search}`);
    setSearch("");
  };
  return (
    <div className="hidden lg:block lg:w-[30%] px-6 bg-[#AED1B2] rounded-lg">
      {user && <UserProfile />}
      <Header title={"search the blog"} />
      <div className="pt-3 flex flex-wrap gap-2 justify-center ">
        <input
          type="text"
          className="border border-[#E1E4DD] p-2 rounded-md w-[75%]"
          value={search|| ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-[#4B7755] text-[#E1E4DD] p-2  rounded-md"
        >
          SEARCH{" "}
        </button>
      </div>
      <CalendarComp />
      <Header title={"popular post"} />
      {blog.slice(-3).map((item, index) => (
        <PostCard key={index} {...item} />
      ))}
    </div>
  );
};

export default RightSide;
