import { heart, eye, comment } from "../helpers/icon";
import ink from "../assets/ink.webp";
import { useNavigate } from "react-router-dom";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import {toastWarnNotify} from "../helpers/ToastNotify"
const Card = ({
  content,
  likes,
  createdAt,
  comments,
  image,
  title,
  countOfVisitors,
  _id,
}) => {
  const navigate = useNavigate();
  const date = new Date(createdAt).toLocaleDateString("tr-TR");
  const {postLike} =useBlogCalls()
  const id = 5555;
  const {user} = useSelector((state)=>state.auth)
  const icons = [
    { icon: heart, number: likes.length, onClick:  postLike, style:`cursor-pointer hover:text-white ${likes.includes(user._id) && 'text-red-500'}`  },
    { icon: comment, number: comments.length, onClick: toastWarnNotify("You must Login"), style: "cursor-pointer" },
    { icon: eye, number: countOfVisitors, onClick:"", style: "" },
  ];
  
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
        <div className="flex gap-3 items-end">
          {icons.map(({ icon, number, onClick, style }) => (
            <div className="relative w-10 h-10 flex items-end">
              <span className={style} onClick={()=> user ? onClick(_id) : toastWarnNotify("You must Login")  }>{icon}</span>
              <span className="absolute bottom-3 right-0 z-10 bg-black w-5 h-5 text-white rounded-full flex justify-center items-center">
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
