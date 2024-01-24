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
import { useEffect, useState } from "react";
import useBlogCalls from "../service/useBlogCalls";
import { MdDelete } from "react-icons/md";
import UserIcon from "../components/UserIcon";
import CreateComment from "../components/CreateComment";
import Modal from "../components/Modal";
import { FaRegEdit } from "react-icons/fa";
import { LuMoreVertical } from "react-icons/lu";
const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
  const { getDetail } = useBlogCalls();
  useEffect(() => {
    getDetail(id);
  }, []);
  const {
    content,
    title,
    comments,
    image,
    userId,
    likes,
    countOfVisitors,
    createdAt,
    _id,
  } = detail;
  const date = new Date(createdAt).toLocaleDateString("en-US");
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  
  return (
    <div className="flex gap-5 my-6 mx-12 min-h-screen">
      
      <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg p-9">
      <div className="flex flex-col items-end border-b-1 border-gray-100 border-t-1">
        <div className="flex items-end">
              <UserIcon
            likes={likes}
            comments={comments}
            countOfVisitors={countOfVisitors}
          />
            <LuMoreVertical className="text-4xl text-gray-500"/>
          </div>
        
          {user?._id === userId?._id && (
          <div className="flex gap-2">
            <FaRegEdit className="text-3xl text-white"/>
            <MdDelete className="text-3xl text-white"  onClick={() => setOpen(true)}/>
          
          </div>
        )}
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
          />
        </div>
        <div className="mb-6">
          <h1 className="pb-3 text-2xl font-bold tracking-[0.2rem]">{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
       
        <div className="flex justify-end">
          <p className="font-great text-5xl mt-1 tracking-[0.3rem]">
            {userId?.firstName} {userId?.lastName}
          </p>
        </div>
        <div className="flex justify-end border-b-2 items-end border-white">
          {/* <div>
              <UserIcon
            likes={likes}
            comments={comments}
            countOfVisitors={countOfVisitors}
          />
          </div> */}
          <div className="flex justify-center items-center ">
            <div className="h-20 w-20 rounded-full bg-[#4B7755] mr-3 flex justify-center items-center">
              <p className="text-4xl text-white font-bold">{userId.username.charAt(0)}</p>
            </div>
            
            <div>
              <div>
                <h5 className="text-2xl tracking-wide">{date}</h5>
              </div>
              <div className="flex gap-3 pt-3">
                <FaFacebookF className="cursor-pointer hover:opacity-50"/>
                <FaInstagram className="cursor-pointer hover:opacity-50"/>
                <FaTwitter className="cursor-pointer hover:opacity-50"/>
                <FaPinterestP className="cursor-pointer hover:opacity-50"/>
                <FaHeart className="cursor-pointer hover:opacity-50"/>
                <IoMdMail className="cursor-pointer hover:opacity-50"/>
              </div>
            </div>

            
          </div>

          <Modal open={open} setOpen={setOpen} title={title} />
        </div>
        {user?._id === userId?._id && (
          <div className="flex gap-5">
            <button className="bg-black text-white">DELETE</button>
            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white"
            >
              Update
            </button>
          </div>
        )}
        <CreateComment id={_id} />
        {comments?.map((item) => (
          <Comments item={item} />
        ))}
      </div>
      <RightSide />
    </div>
  );
};

export default Detail;
