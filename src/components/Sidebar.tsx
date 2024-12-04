import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.jpg"
import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Sidebar=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleLogout=async()=>{
         //@ts-ignore
        const res=await axios.post(BASE_URL+"/user/v1/logout",{},{withCredentials:true});
        dispatch(removeUser());
        navigate("/");
    }
  
    return(
        <div className=" fixed left-0 top-0 w-1/4 h-screen shadow-xl bg-white ">
            <div className=" h-20 w-full flex p-2 my-6">
            <img className="object-contain rounded-full mx-2" src={logo}/>
            <Link to={"/"} className="text-3xl mt-3 mx-2 font-mono">LaterList</Link>
            </div>
            <div className=" h-fit mt-14 p-4 mx-8">
                <button className="block my-4 text-xl p-2 cursor-pointer hover:bg-blue-100 rounded-lg"><i className="ri-twitter-line mx-2"></i>Tweet</button>
                <button className="block my-4 text-xl cursor-pointer p-2 hover:bg-blue-100 rounded-lg"><i className="ri-tv-2-line mx-2"></i>videos</button>
                <button className="block my-4 text-xl cursor-pointer p-2 hover:bg-blue-100 rounded-lg"><i className="ri-article-line mx-2"></i>Documents</button>
                <button className="block text-xl my-4 cursor-pointer p-2 hover:bg-blue-100 rounded-lg"><i className="ri-links-line mx-2"></i>Links</button>
                <button onClick={()=>handleLogout()} className="block text-xl mx-2 cursor-pointer p-2 hover:bg-blue-100 rounded-lg">Logout</button>
               
            </div>
        </div>
    )
}

export default Sidebar;