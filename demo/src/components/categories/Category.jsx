import React, { useContext } from 'react'
import { context } from '../../context/ContextProvider'

const Category = () => {
    const {setCategory,setAuthor,setSource} = useContext(context)
    const categoryArrays = ['Politics','Business','Government','Science','Health','Environment','Entertainment'
        ,'World','Finance','Currencies','Education','Crime','Lifestyle'
    ]

    const handleClick = (item)=>{
        setCategory(item?.toLowerCase())
        setAuthor('')
        setSource('')
    }
  return (
    <>
    <div className='text-slate-600 pt-3 pl-[10%] font-semibold'>Browse Categories</div>
    <div className="flex justify-center text-xs flex-wrap gap-8 md:gap-16 text-slate-600 px-[10%] py-6">
    <div className='flex flex-wrap gap-3 md:gap-5'>
                {categoryArrays?.map((item,i)=>(
                     <li onClick={()=>handleClick(item)} className='w-[150px] text-nowrap overflow-hidden text-ellipsis' key={i}>
                        {item}
                    </li>
                ))}

              </div>
            </div>
    </>
  )
}

export default Category