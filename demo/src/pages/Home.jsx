import React, { useContext, useEffect } from "react";
import Card from "../components/commons/Card";
import Carousel from "../components/home/Carousel";
import { context } from "../context/ContextProvider";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";

function Home({data}) {
  const location = useLocation()
  const { loading,category,source ,author,query,setQuery,setSearch,setShowXmark,setDate} = useContext(context);
  // eslint-disable-next-line
  useEffect(()=>{
    setQuery('')
    setSearch('')
    setDate('')
    setShowXmark(false)
     // eslint-disable-next-line 
  },[location?.pathname])
  return (
    <>
    <div className="max-h-fit w-full text-xs font-normal px-5 md:px-8 flex items-center text-slate-500">
    {category&& <><span>category</span> <ChevronRightIcon className="w-3 h-3"/> <span>{category}</span></>}
    {source&& <><ChevronRightIcon className="w-3 h-3"/><span>source</span> <ChevronRightIcon className="w-3 h-3"/> <span>{source}</span></>}
    {author&& <><ChevronRightIcon className="w-3 h-3"/><span>author</span> <ChevronRightIcon className="w-3 h-3"/> <span>{author}</span></>}
    {query&& <><span>search</span> <ChevronRightIcon className="w-3 h-3"/> <span>{query}</span></>}

      </div>
      {loading&&
        <div className="fixed z-50 top-0 min-w-full min-h-screen text-white bg-[#00000090] flex items-center justify-center">
         <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-11 w-11 border-t-4 border-secondary-dark border-solid"></div>
        </div>
        </div>
      }
      

      {!category && !source && !author && <div className=" bg-white  w-full flex justify-between px-5 mt-4">
        <div
          onClick={() => window.open(data[0]?.webUrl, "_blank")}
          className="flex-1 md:px-8"
        >
          <div className="text-lg font-semibold text-slate-600 pb-2">
            Top Stories
          </div>
          <img
            src={(data && data[0]?.imageUrl) ?? "https://buffer.com/library/content/images/2023/10/free-images.jpg"}
            className="w-[98%] rounded-sm"
            alt={data && data[0]?.webTitle}
            onError={
              (e) => (e.target.src = "https://img.freepik.com/free-photo/fresh-yellow-daisy-single-flower-close-up-beauty-generated-by-ai_188544-15543.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714521600&semt=ais")}
          />
          <p className="text-xs font-medium text-slate-600 mt-1">
            {data
              ? data[0]?.webTitle
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea saepe nobis ipsum officia iure minima numquam laboriosam voluptatibus itaque ex alias blanditiis fuga esse quos, cupiditate vitae rerum repellat"}
          </p>
        </div>
        <Carousel data={data} />
      </div>}

      <div className="mt-8 md:mt-16 flex justify-center flex-wrap md:gap-4 ">
        <div className="text-lg font-semibold text-slate-600  w-full px-5 md:px-10">
        {data?.length<1?"No Data Found":"All Stories"}
          
        </div>

        {data?.map((item, ind) => (
          <div key={ind} className=" flex justify-center flex-wrap">
            <Card
              title={item?.webTitle}
              url={item?.webUrl}
              description={item?.description}
              img={
                item?.imageUrl ??
                "https://buffer.com/library/content/images/2023/10/free-images.jpg"
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
