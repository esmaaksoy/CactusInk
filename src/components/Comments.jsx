import avatar from "../assets/avatar.webp"
const Comments = ({item}) => {
 const {createdAt, userId,comment} = item
  return (
    <div>
    <div className="flex">
      <img
        alt="Man"
        src={avatar}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <p className="font-great text-xl">{userId.username}</p>
        <h5 className="font-great text-lg ml-2 text-gray-500">{new Date(createdAt).toLocaleDateString("en-US")}</h5>
      </div>
    </div>
    <p>{comment}</p>
  </div>
  )
}
export default Comments