import ink from "../assets/ink.webp";
import { useNavigate } from "react-router-dom";
import UserIcon from "./UserIcon";
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
  rows
 
}) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString("en-US");
  return (
    <div className="px-4 py-3 bg-[#AED1B2] rounded-lg">
      <div className="sm:text-center">
        <h5 className="text-white text-sm ">{date}</h5>
        <div className="flex border-b-2 border-white sm:justify-center items-center ">
          <h1 className="text-lg sm:text-2xl font-pacifico tracking-widest break-words line-clamp-1">
            {title.toUpperCase()}
          </h1>
          <img src={ink} alt="ink image" className="hidden sm:block w-[80px]" />
        </div>
      </div>
      <div className="pb-2">
        <img
          src={image}
          alt={title}
          className="pt-3 sm:w-full h-[200px] lg:h-[400px] object-cover"
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
        <UserIcon
          likes={likes}
          comments={comments}
          countOfVisitors={countOfVisitors}
          id={_id}
          first={first} rows={rows}
        />
      </div>
    </div>
  );
};

export default Card;
