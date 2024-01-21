import React from "react";
import Card from "../components/Card";
import { Header, UserProfile } from "../components/MyComponent";
import logo from "../assets/logo.png";
const Home = () => {
  return (
    <div className="px-8 py-5 shadow-sm">
      <div className="p-5 flex justify-between bg-[#4B7755] mb-5 rounded-lg">
        <div className="flex flex-col justify-center">
          <p className="font-great text-white text-5xl tracking-wider">
            Great writers are resilient in all conditions, just like<span className="text-[#AED1B2]"> cactus</span>.
          </p>
          {/* <p className=" text-white text-3xl tracking-wider">
            The Blog of Those Who Write Despite Everyone.
          </p>
          <p className=" text-white text-xl tracking-wider">
            Discover stories, thinking, and expertise from writers on any topic.
          </p> */}
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/04/01/09/22/abstract-1299326_640.png"
            alt=""
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-[30%] px-6 bg-[#AED1B2] rounded-lg">
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
          <Header title={"instagram"} />
          <Header title={"popular post"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
