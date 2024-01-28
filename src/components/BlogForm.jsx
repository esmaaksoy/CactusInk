import {useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
const BlogForm = ({
  title: prevTitle,
  content: prevContent,
  image: prevImage,
  categoryId: prevCategoryID,
  id,
}) => {
  const [text, setText] = useState("");
  const { postBlogs, getCategories, putBlogs } = useBlogCalls();
  const { categories } = useSelector((state) => state.blog);
  const [data, setData] = useState({
    categoryId: prevCategoryID || "",
    title: prevTitle || "",
    content: prevContent || "",
    image: prevImage || "",
    isPublish: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleEditorChange = (e) => {
    setText(e.htmlValue);
    setData((prevData) => ({ ...prevData, content: e.htmlValue }));
  };
  const handleSubmit = (isPublish) => {
    if (id) {
      putBlogs(id, { ...data, isPublish });
    } else {
      postBlogs({ ...data, isPublish });
    }
  };
  useEffect(() => {
   getCategories()
  }, [])
  console.log("hello")
  return (
    <div>
      <div className="card flex mb-5">
        <input
          type="text"
          name="title"
          value={data.title || ""}
          onChange={handleChange}
          placeholder="Enter a title"
          autoComplete="off"
          className="w-[100%] rounded-md border-0 p-5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex items-center gap-4 mb-3 ">
        <div className="w-full">
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
          {categories.map((item, index) => (
            <option key={index} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="card">
        <Editor
          name="content"
          value={text || data.content || ""}
          onTextChange={handleEditorChange}
          style={{ height: "320px" }}
        />
      </div>
      <div className="w-[100%] flex gap-3 mt-10 items-end justify-end">
        <button
          onClick={() => handleSubmit(false)}
          className="flex-1 bg-[#4B7755] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full"
        >
          Save as Draft
        </button>
        <button
          onClick={() => handleSubmit(true)}
          className="flex-1 tracking-widest bg-[#85B486] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default BlogForm;
