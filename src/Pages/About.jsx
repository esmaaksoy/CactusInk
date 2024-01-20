import cactus from "../assets/cactus.png";
const About = () => {
  return (
    <>
    <div className=" min-h-screen">
      <div className="absolute bottom-0 w-[100%]">
        <img src={cactus} alt="" className="w-[100%]" />
      </div>
      <div className="flex backdrop-blur-sm bg-[#aed1b2a1] w-[90%] h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[50%] hidden md:block">
        </div>
        <div className="w-[100%] lg:w-[50%] p-4 sm:p-10">
          <h1 className="text-[#4B7755] text-4xl font-pacifico font-bold pt-[7rem] border-b-[3px] border-b-[#4B7755]">
            About Us
          </h1>
          <h5 className="pt-[2rem]">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus explicabo, eligendi ullam magni iste sapiente possimus excepturi atque officia quae incidunt aut cupiditate reiciendis, veritatis odio omnis consequatur architecto pariatur cum, inventore tempore quis minus quidem officiis. Laborum, quis autem.
          </h5>
        </div>
        <div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
