import React from 'react'
import { AiOutlinePlus, AiFillCompass } from 'react-icons/ai'
import { TbDownload } from 'react-icons/tb'

const Sidebar = () => {
  return (
    <article className='bg-dark-inputs h-responsive flex flex-col gap-2 p-3'>
        <span className='bg-dark-main flex items-center justify-center w-12 h-12 p-2 rounded-full hover:rounded-2xl hover:bg-accent-blue transition-all ease-linear'>
            <img src="icon.svg" alt="discord"/>
        </span>
        <hr className='border-dark-main border-[1.5px]'/>
        <span className='bg-dark-main flex items-center justify-center text-accent-green rounded-full hover:rounded-2xl hover:bg-accent-green transition-all ease-linear h-12 w-12'>
            <AiOutlinePlus size={25}/>
        </span>
        <span className='bg-dark-main flex items-center justify-center text-accent-green rounded-full hover:rounded-2xl hover:bg-accent-green transition-all ease-linear h-12 w-12'>
            <AiFillCompass size={25}/>
        </span>
    </article>
  )
}

export default Sidebar