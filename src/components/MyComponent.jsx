import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import pen from "../assets/pen.webp";
export const Header = ({ title }) => {
  return (
    <div className="border-b-2 border-white flex justify-center items-center">
      <p className="text-[#4B7755] font-bold uppercase tracking-[0.3rem]">
        {title}
      </p>
      <img src={pen} alt="" className="w-[50px] " />
    </div>
  );
};

export const UserProfile = ({ user}) => {

  return (
    <div className="p-4">
      <div className="flex justify-center items-center pb-4">
        <img
          alt="avatar"
          // src={}
          className="h-[150px] w-[150px] rounded-full object-cover"
        />
      </div>
      {/* <p className="text-center">{}</p> */}
      <div className="flex gap-3 justify-center items-center pt-8">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaPinterestP />
        <FaHeart />
        <IoMdMail />
      </div>
    </div>
  );
};

export const CalendarComp = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="card flex justify-center mt-5 bg-white rounded-lg py-5">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        inline
        showWeek
      />
    </div>
  );
};

export const PostCard = () => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-4 mb-4">
      <img
        alt="Office"
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <time datetTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          10th Oct 2022{" "}
        </time>

        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium
          dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
          soluta, voluptates neque explicabo tempora nisi culpa eius atque
          dignissimos. Molestias explicabo corporis voluptatem?
        </p>
      </div>
    </article>
  );
};

//   return (
//     <div>
//       <div className="flex">
//         <img
//           alt="Man"
//           src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//           className="h-10 w-10 rounded-full object-cover"
//         />
//         <div>
//           <p className="font-great text-xl">Cyrano de Bergerac</p>
//           <h5 className="font-great text-lg ml-2 text-gray-500">12/05/2016</h5>
//         </div>
//       </div>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatem quas saepe nisi nesciunt explicabo fugit illum voluptas, hic inventore!</p>
      
//     </div>
//   );
// };
