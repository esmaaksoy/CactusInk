const Comments = ({ item }) => {
  const { createdAt, userId, comment } = item;
  return (
    <div>
      <div className="flex">
        <div className="h-10 w-10 rounded-full bg-[#4B7755] mr-3 flex justify-center items-center">
          <p className="text-xl text-white font-bold">
            {userId?.firstName.charAt(0)}
          </p>
        </div>
        <div>
          <p className="font-great text-xl">{userId?.firstName}</p>
          <h5 className="text-lg text-gray-500">
            {new Date(createdAt).toLocaleDateString("en-US")}
          </h5>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default Comments;
