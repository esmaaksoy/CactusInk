import { FaPinterestP } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import RightSide from "../components/RightSide";

const Detail = () => {
  return (
    <div className="flex gap-5 my-6 mx-12">
      <div className="w-[100%] lg:w-[70%] flex flex-col gap-5 bg-[#AED1B2] rounded-lg p-9">
       
        <div className="">
          <img
            src="https://media.istockphoto.com/id/1428256028/tr/foto%C4%9Fraf/fountain-pen-on-written-page.jpg?s=612x612&w=0&k=20&c=QAzt1tCaKde9X60whVEKMzKPBi2xFI1FAYgzb6LaLKc="
            alt=""
            className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
          />
        </div>
       
        <div className="mb-6">
          <h1 className="pb-3 text-2xl font-bold tracking-[0.2rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            facilis?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            impedit quae, dolorum maxime quibusdam provident illum magnam, quia
            voluptatibus in voluptatum officiis harum at repellendus error
            pariatur. Officia neque laudantium illo quam ad blanditiis modi
            illum soluta aliquid voluptatum error quibusdam porro adipisci
            corrupti totam, impedit at, explicabo iste ex corporis non autem
            repellendus atque. Corrupti amet dolore nesciunt odit. Nulla error
            obcaecati necessitatibus illo neque ea nemo unde! Tempore assumenda
            laboriosam sapiente quae animi optio aut doloribus officia,
            provident ratione aliquid dolorum, accusamus tenetur molestias,
            incidunt harum. Aspernatur, dolorum blanditiis mollitia quo cum
            voluptatem ex error consequuntur veniam voluptate ipsa aliquid
            cupiditate et velit esse maxime modi. Culpa non dolor quo placeat
            odit quidem doloremque velit mollitia neque minus natus saepe,
            laborum, delectus tenetur eveniet quas autem consectetur distinctio,
            illum at architecto porro? Quidem consectetur deleniti, fugiat quae
            impedit, deserunt sapiente voluptatum illo optio, officiis velit
            omnis ut. Tenetur aliquid et ipsam esse, similique deserunt veniam
            vero eum perferendis dicta sapiente, eveniet ex laboriosam
            distinctio labore eaque laudantium error temporibus. Exercitationem
            a ratione ex pariatur voluptatem deleniti officiis temporibus
            doloribus perspiciatis accusantium numquam dolor, recusandae odit ad
            reprehenderit nisi iure corrupti vitae doloremque nobis, eum
            molestias. Unde, incidunt praesentium.
          </p>
        </div>
       
        <div className="flex justify-between border-t-2 border-white pt-6">
          <div className="">
            {" "}
            <h5 className="font-great text-2xl">12/05/2016</h5>
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
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-20 w-20 rounded-full object-cover"
            />
            <div className="ml-5">
              {" "}
              <p className="font-great text-3xl">Cyrano de Bergerac</p>
              <p className="font-great text-2xl mt-1">Fransa</p>
            </div>
          </div>
        </div>
      </div>
      <RightSide />
    </div>
  );
};

export default Detail;
