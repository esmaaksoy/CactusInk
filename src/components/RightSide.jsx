import{
    CalendarComp,
    Header,
    UserProfile,
    PostCard,
  } from "../components/MyComponent";

const RightSide = () => {
  return (
    <div className="hidden lg:block lg:w-[30%] px-6 bg-[#AED1B2] rounded-lg">
    <UserProfile
      bio={
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit laboriosam blanditiis alias nam? Accusantium consectetur dicta voluptatibus ea corrupti, eaque quam aliquid rem distinctio, incidunt dignissimos ipsum. Deserunt, accusamus nemo."
      }
      img={
        "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      }
    />
    <Header title={"search the blog"} />
    {/* ..............search............... */}
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