import React from "react";

const Login = () => {
  return (
    <div className="">
      <div className="relative top-0 left-0 w-full overflow-hidden line-height-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[169%] h-[500px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#AED1B2]"
          ></path>
        </svg>
       
      </div>
      <h1 className="tracking-widest font-pacifico text-6xl font-bold text-white absolute top-[30%] left-[10%] z-10">
        CactusInk
      </h1>
      <div className="w-[50%] flex flex-col gap-5 absolute bottom-[5%] left-[30%]">
        <button className="w-[100%] bg-[#4B7755] hover:bg-[#AED1B2] text-black font-bold py-2 px-4 rounded-full ">
          sign up
        </button>
        <button className="w-[100%] bg-[#E1E4DD] hover:bg-[#AED1B2] text-black font-bold py-2 px-4 rounded-full ">
          login
        </button>
      </div>
    </div>
  );
};

export default Login;
