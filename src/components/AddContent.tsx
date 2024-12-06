import axios from "axios";
import {  useState } from "react";
import { BASE_URL } from "../utils/config";
import { useDispatch } from "react-redux";
import { addContent } from "../utils/contentSlice";


const AddContent=()=>{
    const[isModelOpen,setIsModalOpen]=useState(false);
    const[type,setType]=useState("");
    const[link,setLink]=useState("");
    const[title,setTitle]=useState("");
    const[tags,setTas]=useState("");
    const dispatch=useDispatch();
    //@ts-ignore
    const contentData=async()=>{
        const res=await axios.post(BASE_URL+"/content/v1/content",{
            type,link,title,tags
        },{withCredentials:true})
        // console.log(res.data);
        dispatch(addContent(res.data))
        setIsModalOpen(false);
    }
    

    const handleAddContent=()=>{
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
    return(
        <>
        <button onClick={handleAddContent} className="mx-3 p-2 border bg-[#7e76f4] rounded-lg cursor-pointer hover:scale-95 "> <i className="ri-add-line mx-2"></i>Add Content</button>
        {isModelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-mono mb-4">Add New Content</h2>
            <div >
              <input
                type="text"
                placeholder="Title"
                className="w-full p-2 border rounded mb-4"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
              <input
                type="Text"
                placeholder="Type"
                className="w-full p-2 border rounded mb-4"
                value={type}
                onChange={(e)=>setType(e.target.value)}
              />
              <input
                type="url"
                placeholder="Link"
                className="w-full p-2 border rounded mb-4"
                value={link}
                onChange={(e)=>setLink(e.target.value)}
              />
              <input
                type="Text"
                placeholder="Tags"
                className="w-full p-2 border rounded mb-4"
                value={tags}
                onChange={(e)=>setTas(e.target.value)}
              />
              <div className="flex justify-end">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="p-2 border bg-gray-300 rounded-lg mx-2 hover:scale-90"
                >
                  Cancel
                </button>
                <button onClick={contentData} type="submit" className="p-2 border bg-blue-500 text-white rounded-lg hover:scale-90">
                  Submit
                 
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export default AddContent;