import Card from "../components/Card";
import RightSide from "../components/RightSide";
import pen from "../assets/pen.webp"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCalls from "../service/useBlogCalls";
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
const Home = ({showButton}) => {
  const {blog, totalRecords} = useSelector((state)=>state.blog)
  const {getBlogs} = useBlogCalls()
  
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);

  const onPageChange = (event) => {
      setFirst(event.first);
      setRows(event.rows);
  };
  useEffect(() => {
    getBlogs(`${first / rows + 1}`)
    }, [first,rows])
    console.log(blog)
  return (
    <div className="p-2 sm:px-8 sm:py-5 shadow-sm min-h-screen">
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
            alt="pen"
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="flex gap-5">
        <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 rounded-lg">
          {blog?.map((item, index)=> <Card key={index} {...item}/>)}
        </div>
        <RightSide/>
      </div>
      <div className="card">
            <Paginator first={first} rows={rows} totalRecords={totalRecords} onPageChange={onPageChange} />
        </div>
    </div>
  );
};

export default Home;
