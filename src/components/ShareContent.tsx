import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/config";



const ShareContent=()=>{
    const[isModelOpen,setIsModalOpen]=useState(false);
    const[link,setLink]=useState("");
    
    //@ts-ignore
    const shareLink=async(share)=>{
        const res=await axios.post(BASE_URL+"/brain/v1/share",{
            share
        },{withCredentials:true})
        console.log(res.data.hash);
        setLink(res.data.hash);
    }

    const handleAddContent=()=>{
        shareLink(true)
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
    return(
        <>
  <button onClick={handleAddContent} className="mx-3 p-2 border bg-[#E0E7FF] rounded-lg cursor-pointer hover:scale-95"> <i className="ri-share-line mx-2"></i>Share Content</button>
  {isModelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-mono mb-4">Sharable Link is</h2>
            <div >
              <input
                type="Text"
                placeholder="Link"
                className="w-full p-2 border rounded mb-4"
                value={link}
                readOnly
              />
              <div className="flex justify-center">
                <button
                  onClick={handleCloseModal}
                  type="button"
                  className="p-2 w-28 text-xl border bg-gray-300 rounded-lg mx-2"
                >
                  close
                </button>
               
              </div>
            </div>
          </div>
        </div>
      )}
        </>
    )
}

export default ShareContent;