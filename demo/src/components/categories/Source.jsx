import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../context/ContextProvider'

const Source = () => {
    const {data,setSource} = useContext(context)
    const [sourceArr , setSourceArr]=useState([])
    // eslint-disable-next-line
    useEffect(()=>{
        const arr = data?.map((item,_)=>(item?.source))
        setSourceArr(arr)
    },[data])

    
  return (
    <>
    <div className='text-slate-600 pt-3 px-[10%] font-semibold'>Browse Sources</div>
    <div className="flex justify-center  text-xs flex-wrap gap-8 md:gap-24 text-slate-600 px-[10%] py-6">
             
              <div className='flex flex-wrap gap-3 md:gap-5'>
                {sourceArr?.sort().map((item,i)=>(
                    (item && item!==sourceArr[i+1])&&
                    <li onClick={()=>setSource(item?.toLowerCase())} className='w-[150px] text-nowrap overflow-hidden text-ellipsis' key={i}>
                    {item?item:'No List of Source'}
                    </li>
                    
                ))}
              </div>
            </div>
    </>
  )
}

export default Source