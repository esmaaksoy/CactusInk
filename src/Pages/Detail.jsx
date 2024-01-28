import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Comments from "../components/Comments";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useBlogCalls from "../service/useBlogCalls";
import { MdDelete } from "react-icons/md";
import CreateComment from "../components/CreateComment";
import Modal from "../components/Modal";
import { FaRegEdit } from "react-icons/fa";
import { toastSuccessNotify } from "../helpers/ToastNotify";
import { CalendarComp, UserProfile } from "../components/MyComponent";
const Detail = () => {
  const { id } = useParams();
  const { detail } = useSelector((state) => state.blog);
  const { getDetail, deleteBlogs } = useBlogCalls();
  useEffect(() => {
    getDetail(id);
  }, []);
  const {
    content,
    title,
    comments,
    image,
    userId,
    createdAt,
    categoryId,
    _id,
  } = detail;
  const date = new Date(createdAt).toLocaleDateString("en-US");
  const { user } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleButtonClick = () => {
    deleteBlogs(_id);
    navigate("/profile");
    toastSuccessNotify("Blog deleted");
  };
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 m-2 sm:my-6 sm:mx-12 min-h-screen justify-center">
      <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg p-4 sm:p-9">
        <div className="flex flex-col items-end border-b-1 border-gray-100 border-t-1">
          {user?._id === userId?._id && (
            <div className="flex gap-2">
              <FaRegEdit
                onClick={() => setOpen(true)}
                className="text-3xl text-white cursor-pointer"
              />
              <MdDelete
                onClick={handleButtonClick}
                className="text-3xl text-white cursor-pointer"
              />
            </div>
          )}
        </div>
        <div>
          <img
            src={image}
            alt="image"
            className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
          />
        </div>
        <div className="mb-6">
          <h1 className="pb-3 text-2xl font-bold tracking-[0.2rem] break-all">
            {title}
          </h1>
          <p
            dangerouslySetInnerHTML={{ __html: content }}
            className="break-all"
          ></p>
        </div>
        <div className="flex sm:justify-end">
          <p className="font-great text-xl sm:text-5xl mt-1 tracking-[0.3rem]">
            {userId?.firstName} {userId?.lastName}
          </p>
        </div>
        <div className="flex sm:justify-end border-b-2 items-end border-white">
          <div className="flex justify-center items-center ">
            <div className="h-10 w-10 sm:h-20 sm:w-20 rounded-full bg-[#4B7755] mr-3 flex justify-center items-center">
              <p className="text-xl sm:text-4xl text-white font-bold">
                {userId?.firstName.charAt(0)}
              </p>
            </div>
            <div>
              <div>
                <h5 className="text-md sm:text-2xl tracking-wide">{date}</h5>
              </div>
              <div className="flex gap-3 pt-3">
                <FaFacebookF className="cursor-pointer hover:opacity-50" />
                <FaInstagram className="cursor-pointer hover:opacity-50" />
                <FaTwitter className="cursor-pointer hover:opacity-50" />
                <FaPinterestP className="cursor-pointer hover:opacity-50" />
                <FaHeart className="cursor-pointer hover:opacity-50" />
                <IoMdMail className="cursor-pointer hover:opacity-50" />
              </div>
            </div>
          </div>
          <Modal
            open={open}
            setOpen={setOpen}
            title={title}
            content={content}
            image={image}
            categoryId={categoryId}
            id={_id}
          />
        </div>
        <div className="sm:p-8">
          <CreateComment id={_id} />
        </div>
        <div className="sm:p-8">
          {comments?.map((item) => (
            <Comments item={item} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block lg:w-[30%] px-6 bg-[#AED1B2] rounded-lg">
        <UserProfile />
        <CalendarComp />
      </div>
    </div>
  );
};

export default Detail;
