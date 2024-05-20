import React, { useContext, useEffect, useState } from "react";
import Card from "../components/commons/Card";
import { context } from "../context/ContextProvider";

function SearchPage({data}) {
  const { loading,query,date,setDate,categorySearch,setCategorySearch,sourceSearch,setSourceSearch} = useContext(context);
  const [categoryArr , setCategoryArr] =  useState([])
  const [sourceArr , setSourceArr] =  useState([])
  let arrSource = []
  const getCurrentDateFormatted = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  };


// eslint-disable-next-line
  useEffect(()=>{
    const arr = data?.map((item,_)=>{
      arrSource.push(item?.source)
      return item?.sectionName
    })
    setSourceArr(arrSource)
    setCategoryArr(arr)
 // eslint-disable-next-line 
},[data])
  

  return (
    <>
    <div className="max-h-fit w-full text-lg font-medium px-5 md:px-8 flex items-center text-slate-600">
    
    {query&& <><span>search result for &nbsp;</span><span>"{query}"</span></>}

      </div>
      {loading&&
        <div className="fixed z-50 top-0 min-w-full min-h-screen text-white bg-[#00000090] flex items-center justify-center">
         <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-11 w-11 border-t-4 border-secondary-dark border-solid"></div>
        </div>
        </div>
      }
      
      <div className="w-full h-fit px-5 md:px-8  flex flex-wrap mt-4 gap-4 items-center justify-center" >
        
        <div>
            <div className="text-xs font-semibold text-slate-600 pb-1">Date</div>
            <input type="date" max={getCurrentDateFormatted()} value={date} 
            onChange={(e)=>{
            setDate(e.target.value)
            setCategorySearch('')
            setSourceSearch('')}} 
            className="input-primary border rounded text-sm placeholder:text-sm "/>
        </div>
        <div>
        <div className="text-xs font-semibold text-slate-600 pb-1">Category</div>
        <select  className="input-primary text-slate-600 border rounded px-3 py-2 h-[41px]" value={categorySearch} onChange={(event)=>setCategorySearch(event.target.value)}>
            <option  value="">Select</option>
            {categoryArr?.sort().map((item,i)=>(
                    (item && item!==categoryArr[i+1])&&
                    <option key={i}>
                    {item}
                    </option>
                ))}
       </select>
        </div>
        <div>
        <div className="text-xs font-semibold text-slate-600 pb-1">Source</div>
        <select  className="input-primary text-slate-600 border rounded px-3 py-2 h-[41px]" value={sourceSearch} onChange={(event)=>setSourceSearch(event.target.value)}>
        <option  value="">Select</option>
        {sourceArr?.sort().map((item,i)=>(
                    (item && item!==sourceArr[i+1])&&
                    <option key={i}>
                    {item}
                    </option>
                ))}
       </select>
       
        </div>
       
      </div>

      <div className="mt-6  flex justify-center flex-wrap md:gap-4 ">
        <div className="text-lg font-semibold text-slate-600  w-full px-5 md:px-10">
        {data?.length<1?"No Data Found":"All Stories"}
          
        </div>

        {data?.map((item, ind) => (
          <div key={ind} className=" flex justify-center flex-wrap">
            <Card
              title={item?.webTitle}
              url={item?.webUrl}
              description={item?.description}
              date={item?.webPublicationDate}
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

export default SearchPage;
