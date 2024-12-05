import axios from "axios";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { removeContent } from "../utils/contentSlice";


const ContentCard=({feed}:any)=>{
  const dispatch=useDispatch();
    const{title,tags,createdAt,link,type,_id}=feed
    //console.log(_id);

   const removeFeedContent=async(contentId:string)=>{
    const res=await axios.delete(BASE_URL+"/content/v1/content/"+contentId,{withCredentials:true});
    dispatch(removeContent(contentId));
   }


    const renderHashtags = (tags: string[] | undefined) => {
        return tags?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-800 text-sm py-1 px-3 mr-2 mb-2 rounded-lg shadow-sm"
          >
            #{tag}
          </span>
        ));
      };    const formatDate = (timestamp: string | undefined) => {
        if (!timestamp) return "N/A";
    
        const date = new Date(parseInt(timestamp));
    
        // Manually format the date as dd/mm/yy
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = String(date.getFullYear()).slice(2); // Get last two digits of the year
    
        return `${day}/${month}/${year}`;
      };
    
      const formattedDate = formatDate(createdAt);
    return (
        <>
        <div className=" shadow-lg w-80 h-96 my-6 p-2 mx-5 border border-gray-200 hover:scale-105 rounded-lg">
            <span className="text-lg ">{title}<i className="ri-share-line mx-1"><i onClick={()=>removeFeedContent(_id)} className="ri-delete-bin-6-line p-2 mx-1 hover:bg-red-500"></i></i></span>
           {type==="video" && <div className="my-6 h-fit "><iframe height="188px" className="object-contain rounded-md" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>}
           {type==="article" && <div className="my-6 h-56"><blockquote className="twitter-tweet object-cover ">
         <a href={link.replace("x.com","twitter.com")}></a> 
       </blockquote></div>}
            <span className="block my-4">Added on  {formattedDate}</span>
            <span className="mt-2 ">{renderHashtags(tags)}</span>
        </div>
        </>
    )
}

//EDF1FE
export default ContentCard;