import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";

const NewBlog = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const { postBlogs, getCategories } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  const [data, setData] = useState({
    categoryId: "",
    title: "",
    content: text,
    image: "",
    isPublish: true,
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEditorChange = (e) => {
    setText(e.htmlValue);
    setData((prevData) => ({ ...prevData, content: e.htmlValue }));
  };
  const handleSubmit = (isPublish) => {
    postBlogs({ ...data, isPublish });
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log(data);
  return (
    <div className=" mx-20 my-10 bg-[#AED1B2] p-10">
      <div className="card flex mb-5">
        <InputText
          name="title"
          value={data.title || ""}
          onChange={handleChange}
          className="w-full p-5"
          placeholder="Enter a title"
        />
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-[100%]">
          <input
            type="url"
            name="image"
            value={data.image || ""}
            onChange={handleChange}
            id="image"
            placeholder="Enter image url"
            autoComplete="address-level2"
            className="w-[100%] rounded-md border-0 p-5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
        {/* <div className="flex justify-center rounded-lg border border-dashed border-white w-[50%]">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="flex text-md leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-semibold text-indigo-700 focus-within:outline-none hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="image"
                  value={data.image}
                  onChange={handleChange}
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div> */}
      </div>

      <div className="p-2 bg-white my-4 rounded-lg">
        <select
          name="categoryId"
          value={data.categoryId || ""}
          onChange={handleChange}
          id="HeadlineAct"
          className="w-full text-gray-700 sm:text-sm p-4 outline-none"
        >
          <option value="">Please select</option>
          {categories.map((item) => (
            <option value={item._id}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className="card">
        <Editor
          name="content"
          // value={data.content}
          // onChange={handleChange}
          value={text}
          onTextChange={handleEditorChange}
          style={{ height: "320px" }}
        />
      </div>

      <div className="w-[100%] flex gap-3 mt-10 items-end justify-end">
        <button
          onClick={() => handleSubmit(false)}
          className="w-[10%] bg-[#4B7755] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full"
        >
          Save as Draft
        </button>
        <button
          onClick={() => handleSubmit(true)}
          className="w-[10%] tracking-widest bg-[#85B486] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full"
        >
          Publish
        </button>
      </div>
    </div>
  );
};
export default NewBlog;
