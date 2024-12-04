import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const[isNewUser,setIsNewUser]=useState(true);
      const dispatch=useDispatch();
      const navigate=useNavigate();
    const handleLogin=async()=>{
        const login=await axios.post(BASE_URL+"/user/v1/signup",{
            userName,password
        },{withCredentials:true});
        // console.log(login.data);
        dispatch(addUser(login.data))
        navigate("/laterList")
    }

    const handleSignin=async()=>{
        const signin=await axios.post(BASE_URL+"/user/v1/signin",{
            userName,password
        },{withCredentials:true});
        dispatch(addUser(signin.data));
        navigate("/laterList")
    }
    return(
        <div className=" h-screen flex items-center justify-center ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3  ">
            {isNewUser ? <h3 className="text-center text-xl font-mono  ">Create a new account</h3> :  <h3 className="text-center text-xl font-mono  ">Signin !</h3>}
              <div className="my-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded mb-4"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                className="w-full p-2 border rounded mb-4"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            { isNewUser ?  <button onClick={handleLogin} className="p-2 border bg-blue-500 text-white rounded-lg w-1/2 mx-24 hover:scale-95">Login</button>:<button onClick={handleSignin} className="p-2 border bg-blue-500 text-white rounded-lg w-1/2 mx-24 hover:scale-95">SignIn</button>}
               <h5 onClick={()=>setIsNewUser(false)} className="text-center font-mono text-blue-600 cursor-pointer ">already have an account?click here</h5>
              </div>
            </div>
        </div>
    )
}

export default Login;