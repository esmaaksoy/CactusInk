import ink from "../assets/ink.webp";
import { useNavigate } from "react-router-dom";
import { heart, eye, commentIcon } from "../helpers/icon";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helpers/ToastNotify";
const Card = ({
  content,
  createdAt,
  image,
  likes,
  comments,
  title,
  countOfVisitors,
  _id,
  first,
  rows,
  search
}) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString("en-US");
  const { postLike } = useBlogCalls();
  const { user } = useSelector((state) => state.auth);
  const icons = [
    {
      icon: heart,
      number: likes?.length,
      onClick: () => (user ? postLike(_id,`/blogs?page=${first / rows + 1}&limit=3&search[title]=${search}`) : toastWarnNotify("You must login")),
      style: `cursor-pointer text-gray-500 hover:text-red-500 ${
        likes?.includes(user._id) && "text-red-500"
      }`,
    },
    { icon: commentIcon, number: comments?.length, style:"text-gray-500"},
    { icon: eye, number: countOfVisitors, style: "text-gray-500" },
  ];
  return (
    <div className="px-4 py-3 bg-[#AED1B2] rounded-lg">
      <div className="sm:text-center">
        <h5 className="text-white text-sm ">{date}</h5>
        <div className="flex border-b-2 border-white sm:justify-center items-center ">
          <h1 className="text-lg sm:text-2xl font-pacifico tracking-widest break-words line-clamp-1">
            {title}
          </h1>
          <img src={ink} alt="ink image" className="hidden sm:block w-[80px]" />
        </div>
      </div>
      <div className="pb-2">
        <img
          src={image}
          alt={title}
          className="pt-3 w-full h-[200px] lg:h-[400px] object-cover"
        />
      </div>
      <div>
        <p className="break-all line-clamp-5" dangerouslySetInnerHTML={{ __html: content }}></p>
        <button
          className="bg-transparent border border-transparent text-capitalize text-white font-bold text-[1rem] cursor-pointer pl-1"
          onClick={() => navigate(`/detail/${_id}/`)}
        >
          SEE MORE
        </button>
      </div>
      <div className="pb-2 flex sm:justify-end mt-3">
      <div className="flex gap-2 items-end">
      {icons.map(({ icon, number, onClick, style }, index) => (
        <div key={index} className="relative w-10 h-10 flex items-end">
          <span className={style} onClick={onClick}>
            {icon}
          </span>
          <span className="absolute bottom-4 right-0 z-10 bg-black w-7 h-7 text-white rounded-full flex justify-center items-center">
            {number}
          </span>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Card;
