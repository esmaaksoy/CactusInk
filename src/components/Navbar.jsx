import { line, notification, write } from "../helpers/icon";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
      <header className="bg-[#AED1B2] px-12 py-2">
        <div className="max-w-screen-xl flex justify-between">
          <div className="flex justify-center items-center">
            <ul className="flex gap-2 sm:gap-4">
              <li className="hover:text-white cursor-pointer text-xl">Home</li>
              {line}
              <li className="hover:text-white cursor-pointer text-xl">About</li>
            </ul>
          </div>
          <div className="hidden sm:flex sm:items-end sm:justify-center ">
            <img src={logo} alt="" className="w-[80px]" />
            <h1 className="tracking-widest font-great text-5xl font-bold text-[#4B7755]">
              Cactus<span className="text-black">Ink</span>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="#"
                className="block shrink-0 rounded-full bg-white p-2.5 text-[#4B7755] shadow-sm hover:bg-[#AED1B2] hover:text-white"
              >
                {write}
              </a>
              {line}
              <a
                href="#"
                className="block shrink-0 rounded-full bg-white p-2.5 text-[#4B7755] shadow-sm hover:bg-[#AED1B2] hover:text-white"
              >
                {notification}
              </a>
              {line}
            </div>

            <a href="#" className="block shrink-0">
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
