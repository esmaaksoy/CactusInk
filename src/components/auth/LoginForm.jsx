import React from "react";

const LoginForm = () => {
  return (
    <div className="w-[50%] flex flex-col gap-3">
      <label
        htmlFor="UserEmail"
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#4B7755]"
      >
        <input
          type="email"
          id="UserEmail"
          placeholder="Email"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-base tracking-widest font-pacifico text-[#4B7755] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Email
        </span>
      </label>
      <label
        htmlFor="UserPassword"
        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-[#4B7755]"
      >
        <input
          type="password"
          id="UserPassword"
          placeholder="Password"
          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />

        <span className="absolute start-0 top-2 -translate-y-1/2 text-base tracking-widest font-pacifico text-[#4B7755]  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          Password
        </span>
      </label>
      <button className="w-[100%] font-pacifico bg-[#4B7755] hover:bg-[#AED1B2] text-white font-bold py-2 px-4 rounded-full ">
         Login
        </button>
    </div>
  );
};

export default LoginForm;
