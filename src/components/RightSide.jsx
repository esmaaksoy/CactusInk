import { useSelector } from "react-redux";
import{
    CalendarComp,
    Header,
    UserProfile,
    PostCard,
  } from "../components/MyComponent";

const RightSide = () => {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="hidden lg:block lg:w-[30%] px-6 bg-[#AED1B2] rounded-lg">
      {user && <UserProfile /> }
   
    <Header title={"search the blog"} />

    <div className="pt-3 flex gap-2">
      <input
        type="text"
        className="border border-[#E1E4DD] p-2 w-[80%] rounded-md"
      />
      <button className="bg-[#4B7755] text-[#E1E4DD] p-2 w-[20%] rounded-md">
        SEARCH{" "}
      </button>
    </div>
    <CalendarComp />
    <Header title={"popular post"} />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
  )
}

export default RightSide