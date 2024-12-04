import AddContent from "./AddContent";

const MainTop=()=>{
    return(
        <div className=" w-full h-20 p-4  flex justify-between">
           <div className="text-3xl font-mono mx-3 p-2">All Links</div>
           <div className="">
            <button className="mx-3 p-2 border bg-[#E0E7FF] rounded-lg cursor-pointer hover:scale-95"> <i className="ri-share-line mx-2"></i>Share Content</button>
           <AddContent/>
           </div>
        </div>
    )
}

export default MainTop;

