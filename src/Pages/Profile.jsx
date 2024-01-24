import { useSelector } from "react-redux"
import useBlogCalls from "../service/useBlogCalls"
import { useEffect } from "react"
import Card from "../components/Card"


const Profile = () => {
    const {user} = useSelector((state)=>state.auth)
    const {getProfile} = useBlogCalls()
    const {userBlog} = useSelector(state=>state.blog)
    useEffect(() => {
     getProfile(user?._id)
    }, [])
    
  console.log(userBlog)
  return (
    <div className="m-10 flex flex-col gap-5">
        {userBlog.map((item)=>(<Card {...item}/>))}
    </div>
  )
}

export default Profile