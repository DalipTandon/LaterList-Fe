import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [userName,setUserName]=useState("Dalip singh");
    const[password,setPassword]=useState("Dalip@123");
    const[isNewUser,setIsNewUser]=useState(true);
    const[errorMessage,setErrorMessage]=useState("");
    const[error,setshowError]=useState(true);
    const[signupError,setSignupError]=useState("");
      const dispatch=useDispatch();
      const navigate=useNavigate();
    const handleLogin=async()=>{
        try{
        const login=await axios.post(BASE_URL+"/user/v1/signup",{
            userName,password
        },{withCredentials:true});
        // console.log(login.data);
        dispatch(addUser(login.data))
        navigate("/laterList")
    }catch(error:any){
        //console.log(error.response.data.message);
        setshowError(true)
        setTimeout(() => {
            setshowError(false)
        }, 1000);
        setErrorMessage(error.response.data.message);
    }
    }

    const handleSignin=async()=>{
        try{
        const signin=await axios.post(BASE_URL+"/user/v1/signin",{
            userName,password
        },{withCredentials:true});
        dispatch(addUser(signin.data));
        navigate("/laterList")
    }catch(error:any){
        //console.log(error.response.data);
        setshowError(true)
        setTimeout(() => {
            setshowError(false)
        }, 1000);
        setSignupError(error.response.data)
    }
    }
    return(
        <div className=" h-screen flex items-center justify-center ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3  ">
            {isNewUser ?  <h3 className="text-center text-xl font-mono  ">Signin !</h3>:<h3 className="text-center text-xl font-mono  ">Create a new account</h3> }
              <div className="my-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded "
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
              />
             { error && <h6 className="text-sm text-red-500 ">{errorMessage}</h6>}
              <input
                type="password"
                placeholder="password"
                className="w-full p-2 border rounded mt-4"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              { error && <h6 className="text-sm text-red-500 text-center ">{signupError}</h6>}
            { isNewUser ? <button onClick={handleSignin} className="mt-4 p-2 border bg-blue-500 text-white rounded-lg w-1/2 mx-24 hover:scale-95">SignIn</button>: <button onClick={handleLogin} className="mt-4 p-2 border bg-blue-500 text-white rounded-lg w-1/2 mx-24 hover:scale-95">Login</button>}
               <h5 onClick={()=>setIsNewUser(false)} className="text-center font-mono text-blue-600 cursor-pointer ">New User?click here</h5>
              </div>
            </div>
        </div>
    )
}

export default Login;