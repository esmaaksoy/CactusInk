import { heart, eye, comment } from "../helpers/icon";
import ink from "../assets/ink.webp"
const Card = () => {
    const navigate = useNavigate()
    const id = 5555
  return (
    <div className="px-4 py-3">
      <div className="text-center">
        <h5 className="text-white text-sm ">THUSDAY, JUNE 1, 2017</h5>
        <div className="flex border-b-2 border-white justify-center items-center">
            <h1 className="text-lg sm:text-2xl font-pacifico tracking-widest">
          MONTLY FAVOURITES
        </h1> 
        <img src={ink} alt="" className="hidden sm:block w-[80px]"/>
        </div>
       
      </div>
      <div className="pb-2">
        <img
          src="https://media.istockphoto.com/id/1428256028/tr/foto%C4%9Fraf/fountain-pen-on-written-page.jpg?s=612x612&w=0&k=20&c=QAzt1tCaKde9X60whVEKMzKPBi2xFI1FAYgzb6LaLKc="
          alt=""
          className="pt-3 w-[100%] h-[200px] sm:h-[400px]"
        />
      </div>
      <div className="pb-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          aspernatur quibusdam consequuntur illo odit perferendis magni voluptas
          sed neque. Error dolores atque maxime voluptatibus quidem repellat
          dolorem esse, fugiat aliquid et obcaecati dolorum ab ex labore quos ad
          hic magnam eaque eveniet vel quisquam iure! Est nihil voluptatum
          molestias praesentium!
          <button className="bg-transparent border border-transparent text-capitalize text-white font-bold text-[1rem] cursor-pointer pl-1" onClick={()=> navigate(`/detail/${id}`)}>
            SEE MORE
          </button>
        </p>
      </div>
      <div className="border-b-2 border-white pb-2 flex justify-between ">
        <p className="font-pacifico text-[#4B7755]">cyrano de bergerac</p>
        <p className="font-pacifico text-[#4B7755] hidden sm:block">no comments</p>
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
