

const ContentCard=({feed}:any)=>{
    const{title,tags,createdAt,link,type}=feed
    // console.log(title);
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
            <span className="text-lg ">{title}<i className="ri-share-line mx-1"><i className="ri-delete-bin-6-line mx-1"></i></i></span>
           {type==="video" && <div className="my-6 h-fit "><iframe height="188px" className="object-contain rounded-md" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>}
           {type==="article" && <div className="my-6 h-56"><blockquote className="twitter-tweet object-cover ">
         <a href={link.replace("x.com","twitter.com")}></a> 
       </blockquote></div>}
            <span className="block my-4">Added on  {formattedDate}</span>
            <span className="mt-2 bg-[#EDF1FE]">{renderHashtags(tags)}</span>
        </div>
        </>
    )
}

//EDF1FE
export default ContentCard;