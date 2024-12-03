import axios from "axios";
import ContentCard from "./ContentCard";
import { BASE_URL } from "../utils/config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addContent } from "../utils/contentSlice";
import { useSelector } from "react-redux";


const Content=()=>{
    const dispatch=useDispatch();
    //@ts-ignore
    const Feedcontent=useSelector((store)=>store.content)
    const contentData=async()=>{
        const res=await axios.get(BASE_URL+"/content/v1/content",{withCredentials:true})
        //@ts-ignore
        const data=res.data.data;
        dispatch(addContent(res.data.data));
        // console.log(data);
    }

    useEffect(()=>{
        contentData();
    },[])
    return(
        Feedcontent&&
        (<div className="flex gap-2 flex-wrap">
            {Feedcontent.map((feedData:any)=> <ContentCard feed={feedData} key={feedData._id}/>)}
        </div>)
    )
}

export default Content;