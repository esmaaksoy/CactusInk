import { heart, eye, commentIcon } from "../helpers/icon";
import useBlogCalls from "../service/useBlogCalls";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helpers/ToastNotify";
const UserIcon = ({ countOfVisitors, id, comments, likes }) => {
  const { postLike } = useBlogCalls();
  const { user } = useSelector((state) => state.auth);
  const icons = [
    {
      icon: heart,
      number: likes?.length,
      onClick: () => (user ? postLike(id) : toastWarnNotify("You must login")),
      style: `cursor-pointer text-gray-500 hover:text-red-500 ${
        likes?.includes(user._id) && "text-red-500"
      }`,
    },
    { icon: commentIcon, number: comments?.length, style:"text-gray-500" },
    { icon: eye, number: countOfVisitors, style: "text-gray-500" },
  ];
  return (
    <div className="flex gap-2 items-end">
      {icons.map(({ icon, number, onClick, style }) => (
        <div className="relative w-10 h-10 flex items-end">
          <span className={style} onClick={onClick}>
            {icon}
          </span>
          <span className="absolute bottom-4 right-0 z-10 bg-black w-7 h-7 text-white rounded-full flex justify-center items-center">
            {number}
          </span>
        </div>
      ))}
    </div>
  );
};

export default UserIcon;
