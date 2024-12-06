import axios from "axios";
import ContentCard from "./ContentCard";
import { BASE_URL } from "../utils/config";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Content=()=>{
    const feedData=useSelector((store:any)=>store.content)||[];
    const[content,setContent]=useState(feedData);
   // console.log(feedData);
    
    const contentData=async()=>{
        try {
            const res = await axios.get(BASE_URL+"/content/v1/content", { withCredentials: true });
            if (res.data && res.data.data) {
                setContent(res.data.data);
            }
        } catch (error) {
            console.error("Failed to fetch content:", error);
        }
    }
    useEffect(() => {
        
            contentData();
        
    }, [feedData]); 
    


    return(
        content.length===0?(
            <h1 className="text-center my-36 text-2xl  ">No Watch later links available</h1>
        ):
        (<div className="flex gap-2 flex-wrap">
            {content.map((feedData:any)=> <ContentCard feed={feedData} key={feedData._id}/>)}
        </div>)
    )
}

export default Content;