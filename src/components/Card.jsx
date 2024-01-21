import { heart, eye, comment } from "../helpers/icon";

const Card = () => {
  return (
    <div className="shadow-md px-4">
      <div className="text-center">
        <h5 className="text-[#C6D4C2] text-sm">THUSDAY, JUNE 1, 2017</h5>
        <h1 className="text-2xl border-b-2 border-gray-300">
          MONTLY FAVOURITES
        </h1>
      </div>
      <div className="pb-2">
        <img
          src="https://i.pinimg.com/236x/be/cf/e5/becfe51e9472f6d7a11f46c81f8b8095.jpg"
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
          <button className="bg-transparent border border-transparent text-capitalize text-blue-500 text-[1rem] cursor-pointer pl-1">
            SEE MORE
          </button>
        </p>
      </div>
      <div className="border-b-2 border-gray-300 pb-2 flex justify-between ">
        <p className="font-pacifico text-[#C6D4C2]">cyrano de bergerac</p>
        <p className="font-pacifico text-[#C6D4C2] hidden sm:block">no comments</p>
        <div className="flex gap-1">
          <span>{heart}</span>
          <span>{comment}</span>
          <span>{eye}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
