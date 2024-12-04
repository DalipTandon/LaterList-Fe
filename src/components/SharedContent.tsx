import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentCard from "./ContentCard";


const SharedContent=()=>{
    const[contentData,setContentData]=useState([])
    const [username, setUsername] = useState<string>(""); 

    const {shareLink}=useParams();
    const sharecontent=async()=>{
        const res=await axios.get(BASE_URL+`/brain/v1/read/${shareLink}`,{withCredentials:true})
        console.log(res.data);
        
        setContentData(res.data.content);
        setUsername(res.data.username || "Unkbown User")
    }
    //@ts-ignore
    useEffect(()=>{
        sharecontent();
    },[shareLink])
    if (!contentData || contentData.length === 0) {
        return <h2>No content available for this link</h2>;
      }
    return(
       
        <div className="p-6">
        <h3 className="text-xl font-semibold text-center mb-4">
          Content shared by <span className="text-blue-500">{username}</span>
        </h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {contentData.map((data: any) => (
            <ContentCard feed={data} key={data._id} />
          ))}
        </div>
      </div>
    )
};


export default SharedContent;