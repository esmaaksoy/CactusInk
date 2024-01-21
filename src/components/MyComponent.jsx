import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export const Header = ({title}) => {
  return (
    <div className="pt-10 text-center border-b-2 border-gray-300">
    <p className="pb-3 text-[#4B7755] font-pacifico uppercase tracking-widest">{title}</p> 
  </div>
  )
}

export const UserProfile = ({bio, img}) => {
  return (
    <div className="p-4">
          <div className="flex justify-center items-center pb-4">
            <img
              alt="avatar"
              src={img}
              className="h-[150px] w-[150px] rounded-full object-cover"
            />
          </div>
          <p className="text-center">
         {bio}
   
          </p>
          <div className="flex gap-3 justify-center items-center pt-8">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaPinterestP />
            <FaHeart />
            <IoMdMail />
          </div>
        </div>
  )
}

