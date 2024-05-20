import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/ContextProvider'

const Authors = () => {
    const {data,setAuthor} = useContext(context)
    const [authorArr , setAuthorArr]=useState([])
    const {SetSelectedTab} = useContext(context)

// eslint-disable-next-line
    useEffect(()=>{
        const arr = data?.map((item,i)=>(item?.author))
        setAuthorArr(arr)
    },[data])

  return (
    <>
    <div className='text-slate-600 pt-3 px-[10%] font-semibold'>Browse Authors</div>
    <div className="flex justify-center  text-xs flex-wrap gap-8 md:gap-24 text-slate-600 px-[10%] py-6">
             
              <div className='flex flex-wrap gap-3 md:gap-5'>
                {authorArr?.length>0 &&  authorArr?.sort().map((item,i)=>(
                    (item!==authorArr[i+1])&&
                     <li onClick={()=>{setAuthor(item?.toLowerCase())
                        SetSelectedTab(-1)
                     }} className='w-[150px] text-nowrap overflow-hidden text-ellipsis' key={i}>
                   { (item?.includes('By'))?item?.slice(3,item?.length)
                    :item?item:"No"}
                    </li>
                    
                ))}

              </div>
            </div>
    </>
  )
}

export default Authors