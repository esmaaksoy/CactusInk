import { heart, eye, comment } from "../helpers/icon";
import ink from "../assets/ink.webp";
import { useNavigate } from "react-router-dom";
const Card = ({ content, likes, createdAt, comments, image, title }) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString("tr-TR")
  const id = 5555;
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

          <p className="line-clamp-5"> {content}</p>
          <button
            className="bg-transparent border border-transparent text-capitalize text-white font-bold text-[1rem] cursor-pointer pl-1"
            onClick={() => navigate(`/detail/${id}`)}
          >
            SEE MORE
          </button>
        
      </div>
      <div className="border-b-2 border-white pb-2 flex justify-between ">
        <p className="font-pacifico text-[#4B7755]">cyrano de bergerac</p>
        <p className="font-pacifico text-[#4B7755] hidden sm:block">
          no comments
        </p>
        <div className="flex gap-1">
          <span className="cursor-pointer hover:text-white">{heart}</span>
          <span className="cursor-pointer hover:text-white">{comment}</span>
          <span className="cursor-pointer hover:text-white">{eye}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
