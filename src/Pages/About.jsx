import logo from "../assets/logo.png";
import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const About = () => {
  return (
    <div className="min-h-screen bg-[#4B7755] flex items-center p-5">
      <div className="flex backdrop-blur-sm bg-[#aed1b2a1] sm:w-[80%] m-auto">
        <div className="w-[100%] lg:w-[50%] p-4 sm:p-10">
          <h1 className="text-[#4B7755] font-great font-bold tracking-[0.3rem] text-4xl border-b-[3px] border-b-[#4B7755]">
            About Us
          </h1>
          <p className="pt-[1rem]">
            <p className="text-[#4B7755] font-bold text-xl pb-1">
              CactusInk Blog | Culture, Art, Literature Blog
            </p>
            CactusInk is a blog that started in January 2024, focusing on
            culture, art, and literature. The blog covers a wide range of
            topics, including poetry, sculpture, painting, stories, philosophy,
            sociology, media, and anthropology. CactusInk aims to bring together
            readers and writers of all ages and groups who share a passion for
            intellectual knowledge and a love for art. Anyone interested can
            become a part of this community by submitting their writings.
            Knowing that expressing the truth requires resilience and endurance
            in the face of everything and everyone, we chose to use a cactus in
            our logo. Thus, our blog is named "cactusink," combining the words
            cactus and ink. We extend our gratitude to all writers and readers
            who support our voice on this journey to freely express the truth.
            <p className="text-[#4B7755] font-bold font-pacifico text-xl tracking-widest">
              CactusInk
            </p>
          </p>
          <div className="flex gap-3 items-center pt-8">
        <FaFacebookF className="cursor-pointer text-xl hover:text-gray-500"/>
        <FaInstagram className="cursor-pointer text-xl hover:text-gray-500"/>
        <FaTwitter className="cursor-pointer text-xl hover:text-gray-500"/>
        <FaPinterestP className="cursor-pointer text-xl hover:text-gray-500"/>
        <FaHeart className="cursor-pointer text-xl hover:text-gray-500"/>
        <IoMdMail className="cursor-pointer text-xl hover:text-gray-500"/>
      </div>
        </div>
        <div className="w-[50%] hidden md:flex items-end">
          {" "}
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
