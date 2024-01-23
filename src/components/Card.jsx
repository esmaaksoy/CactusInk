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
}) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString("en-US");
  return (
    <div className="px-4 py-3">
      <div className="text-center">
        <h5 className="text-white text-sm ">{date}</h5>
        <div className="flex border-b-2 border-white justify-center items-center">
          <h1 className="text-lg sm:text-2xl font-pacifico tracking-widest">
            {title}
          </h1>
          <img src={ink} alt="" className="hidden sm:block w-[80px]" />
        </div>
      </div>
      <div className="pb-2">
        <img
          src={image}
          alt={title}
          className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
        />
      </div>
      <div className="pb-5">
        <p className="line-clamp-5">{content}</p>
        <button
          className="bg-transparent border border-transparent text-capitalize text-white font-bold text-[1rem] cursor-pointer pl-1"
          onClick={() => navigate(`/detail/${_id}/`)}
        >
          SEE MORE
        </button>
      </div>
      <div className="border-b-2 border-white pb-2 flex justify-end ">
        {/* <p className="font-pacifico text-[#4B7755]">cyrano de bergerac</p>
        <p className="font-pacifico text-[#4B7755] hidden sm:block">
          no comments
        </p> */}
        <UserIcon
          likes={likes}
          comments={comments}
          countOfVisitors={countOfVisitors}
          id={_id}
        />
      </div>
    </div>
  );
};

export default Card;
