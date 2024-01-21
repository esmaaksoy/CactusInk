import logo from "../assets/logo.png"
import {line} from "../helpers/icon"
const NotFound = () => {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="flex items-end">
        <img src={logo} alt="" className="w-[80px] mr-3" />
      <h1 className="uppercase tracking-widest text-gray-500 font-bold">
        404 | Not Found
      </h1>
      </div>
     
    </div>
  );
};

export default NotFound;
