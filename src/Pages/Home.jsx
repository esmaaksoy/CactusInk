import Card from "../components/Card";
import RightSide from "../components/RightSide";
import pen from "../assets/pen.webp";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCalls from "../service/useBlogCalls";
import React, { useState } from "react";
import { Paginator } from "primereact/paginator";
import { ProgressSpinner } from "primereact/progressspinner";
import NotFound from "./NotFound";
const Home = ({ showButton }) => {
  const { blog, totalRecords, loading, error } = useSelector(
    (state) => state.blog
  );
  const { getBlogs } = useBlogCalls();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(3);
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
  useEffect(() => {
    getBlogs(`${first / rows + 1}`);
  }, [first, rows]);
  return (
    <>
      {error && <NotFound />}
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <ProgressSpinner />
        </div>
      )}
      {!error && !loading && (
        <div className="p-2 sm:px-8 sm:py-5 shadow-sm min-h-screen">
          <div className="p-5 bg-[#4b7755] mb-5 rounded-lg hidden sm:flex sm:justify-between">
            <div className="flex flex-col justify-center">
              <p className="font-great text-white text-5xl tracking-wider">
                Great writers are resilient in all conditions, just like
                <span className="text-[#AED1B2]"> cactus</span>.
              </p>
            </div>
            <div>
              <img src={pen} alt="pen" className="w-[100px]" />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-[100%] lg:w-[70%] flex flex-col gap-10">
              {blog?.map((item, index) => (
                <Card key={index} {...item} first={first} rows={rows}/>
              ))}
            </div>
            <RightSide />
          </div>
          <div className="card ">
            <Paginator
              first={first}
              rows={rows}
              totalRecords={totalRecords}
              onPageChange={onPageChange}
              className="bg-[#AED1B2] mt-4"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
