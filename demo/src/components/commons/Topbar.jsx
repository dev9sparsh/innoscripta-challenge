import React, { useContext, useState } from "react";
import Search from "./Search";
import {ChevronDownIcon,ChevronUpIcon, MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import Category from "../categories/Category";
import Source from "../categories/Source";
import Authors from "../categories/Authors";
import { context } from "../../context/ContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Topbar = () => {
  const location = useLocation()
  const tabs = ['Categories','Sources','Authors']
  const [showSearchSm , setShowSearchSm] = useState(false)
  const {setCategorySearch, setSourceSearch, selectedTab, SetSelectedTab,setCategory,setAuthor,setSource} = useContext(context)
  const navigate = useNavigate()
  const handleClick = ()=>{
    setCategory('')
    setAuthor('')
    setSource('')
    setCategorySearch('')
    setSourceSearch('')
    navigate('/')
}

  return (
    <>
    <div className=" sticky top-0  border-b border-border z-10 bg-white flex justify-between md:px-8 px-3 pr-6 text-[#8F98A1] gap-10  items-center w-full h-[68px] md:h-[75px] ">
      <div onClick={()=>handleClick()} className="flex items-center cursor-pointer">
        <img
          className="md:h-11 md:w-11 w-8 h-8 ml-2 md:ml-0 rounded-full "
          src="news-logo.png"
          alt="news"
        />
        <h1 className="text-lg md:text-3xl font-semibold ml-2 pl-2 text-primary border-l-2 border-primary">
          News
        </h1>
      </div>
      {location.pathname!=='/search'&&<div  className="hidden md:flex  items-center gap-2 md:gap-4  text-xs md:text-sm font-semibold md:font-medium text-slate-600">
        {tabs.map((item,i)=><div onMouseEnter={()=>SetSelectedTab(i)} onMouseLeave={()=>SetSelectedTab(-1)} className={`cursor-pointer flex items-center  py-7 ${selectedTab === i &&'text-primary'}`} key={i}>
        {item} {selectedTab===i?<ChevronUpIcon className="text-slate-600 w-6 h-6 p-1" />:<ChevronDownIcon className="text-slate-600 w-6 h-6 p-1" />}
        {
         selectedTab===i&&   <div className="absolute left-0 top-[68px] md:top-[75px] border shadow w-full min-h-64 bg-white">
            {i===0&&<Category/>}
            {i===1&&<Source/>}
            {i===2&&<Authors/>}
        </div>
        }
        </div>)}
      </div>}
      <MagnifyingGlassIcon 
        onClick={()=>{
        navigate('/search')
        setShowSearchSm(!showSearchSm)}} 
        className=" w-6 h-6 p-1 text-slate-600 md:hidden block" />
      <Search/>
    
    </div>
    {location.pathname!=='/search'&&<div  className="sticky top-[40px] h-[25px] min md:hidden flex justify-center border bg-white z-[9] items-center gap-2 md:gap-4  text-xs md:text-sm font-semibold md:font-medium text-slate-600">
        {tabs.map((item,i)=><div onMouseEnter={()=>SetSelectedTab(i)} onMouseLeave={()=>SetSelectedTab(-1)} className={`cursor-pointer flex items-center ${selectedTab === i &&'text-primary'}`} key={i}>
        {item} {selectedTab===i?<ChevronUpIcon className="text-slate-600 w-6 h-6 p-1" />:<ChevronDownIcon className="text-slate-600 w-6 h-6 p-1" />}
        {
         selectedTab===i&&   <div className=" absolute left-0 top-[24px] md:top-[75px] border shadow w-full min-h-64 bg-white">
            {i===0&&<Category/>}
            {i===1&&<Source/>}
            {i===2&&<Authors/>}
        </div>
        }
        </div>)}
      </div>}
      {location.pathname==='/search'&&showSearchSm&&<div  className="sticky top-[0px] max-h-fit min md:hidden flex justify-center border bg-white z-[9] items-center gap-2 md:gap-4  text-xs md:text-sm font-semibold md:font-medium text-slate-600">
        <Search smScreen={'flex'}/>
      </div>}
    </>
  );
};

export default Topbar;