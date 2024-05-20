import React, { createContext, useEffect, useState } from 'react';
import useFetchApi from "../hooks/useFetchApi";


const context = createContext();

const ContextProvider = ({ children }) => {
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const [author, setAuthor] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  const [sourceSearch, setSourceSearch] = useState("");
  const [query, setQuery] = useState("");
  const [selectedTab, SetSelectedTab] = useState(-1)
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [showXmark, setShowXmark] = useState(false);
  

  const { data,setData,loading ,setLoading} = useFetchApi(query,category,source,date);
  // eslint-disable-next-line 
  useEffect(()=>{
   if(author){
    const arr = data?.filter((item,_)=>(
      item?.author?.toLowerCase()?.includes(author)
    ))
    console.log(arr,author);

    setData(arr)
   }
   if(categorySearch){
    const cateArr = data?.filter((item,_)=>(
      item?.sectionName?.includes(categorySearch)
    ))
    setData(cateArr)
   }
   if(sourceSearch){
    const sourArr = data?.filter((item,_)=>(
      item?.source?.includes(sourceSearch)
    ))
    console.log(sourArr,sourceSearch);

    setData(sourArr)
   }
    // eslint-disable-next-line 
  },[author,categorySearch,sourceSearch])
  

  return (
    <context.Provider value={{date,categorySearch,setCategorySearch,sourceSearch,setSourceSearch,setDate,showXmark, setShowXmark,search, setSearch,selectedTab, SetSelectedTab,data,category,setCategory,query, setQuery,loading, setLoading,source, setSource,author, setAuthor}}>
      {children}
    </context.Provider>
  );
};

export { context, ContextProvider };
