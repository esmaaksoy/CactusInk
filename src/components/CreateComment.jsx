import { useState } from "react";
import pen from "../assets/pen.webp";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helpers/ToastNotify";
const CreateComment = ({ id }) => {
  const { postComment } = useBlogCalls();
  const [value, setValue] = useState("");
  const commentInfo = {
    "blogId": id ,
    "comment":value,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(commentInfo);
   setValue("")
  };
  const {user} = useSelector((state)=>state.auth)
  return (
    <div className="p-8">
      <div className="flex justify-start items-end mb-5">
        <img src={pen} alt="" className="w-[50px]" />
        <p className=" text-[#4B7755]  font-bold uppercase tracking-[0.3rem]">
          Enter a comment
        </p>
      </div>
      <form className="overflow-hidden">
        <textarea
          id="comment"
          className="w-full resize-none align-top p-4"
          rows="4"
          placeholder="Enter any additional order notes..."
          value={value}
          name="comment"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
        <div className="flex justify-center items-end mt-5">
          <button
            type="submit"
            className={`bg-[#4B7755] text-white py-2 px-4 rounded-full text-lg font-medium w-[50%] ${
                !user ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#85B486]' 
              }`}
              onClick={handleSubmit}
            disabled={!user}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
