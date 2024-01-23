import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import RightSide from "../components/RightSide";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useBlogCalls from "../service/useBlogCalls";
import avatar from "../assets/avatar.webp"
import UserIcon from "../components/UserIcon";
import CreateComment from "../components/CreateComment";
const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
  const { getDetail } = useBlogCalls();
  useEffect(() => {
    getDetail(id);
  }, []);
  const { content, title, comments, image, userId, likes, countOfVisitors,createdAt,_id } =
    detail;
    const date = new Date(createdAt).toLocaleDateString("en-US");

  return (
    <div className="flex gap-5 my-6 mx-12">
      <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg p-9">
        <div className="">
          <img
            src={image}
            alt=""
            className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
          />
        </div>
        <div className="mb-6">
          <h1 className="pb-3 text-2xl font-bold tracking-[0.2rem]">{title}</h1>
          <p>{content}</p>
        </div>
        <div className="flex justify-between border-b-2 border-white pb-6">
          <div className="">
            <h5 className="font-great text-2xl">{date}</h5>
            <div className="flex gap-3 pt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaPinterestP />
              <FaHeart />
              <IoMdMail />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              alt="avatar"
              src={avatar}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-5">
              {" "}
              <p className="font-great text-3xl">{userId?.username}</p>
              <p className="font-great text-2xl mt-1">{userId?.firstName} {userId?.lastName}</p>
            </div>
          </div>
        </div>
        <UserIcon
          likes={likes}
          comments={comments}
          countOfVisitors={countOfVisitors}
        />
        <CreateComment id={_id}/>
        {comments?.map((item) => (
          <Comments item={item} />
        ))}
      </div>
      <RightSide />
    </div>
  );
};

export default Detail;
