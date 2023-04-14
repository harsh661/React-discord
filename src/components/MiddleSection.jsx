import React, { useContext, useState } from 'react'
import { MdPersonAddAlt1 } from 'react-icons/md'
import { UserContext } from '../context/UserContext'


const UserDetails = () => {
const {userInfo} = useContext(UserContext)
    return (
        <div className='bg-darker max-w-xs fixed bottom-20 phone:left-5 right-5 gap-5 p-4 flex flex-col rounded-md shadow-md'>
            <img src={userInfo?.photoURL} alt="user" className='w-20 rounded-full'/>
            <div className='bg-black rounded-lg p-2 flex flex-col gap-2 text-white'>
                <span className='text-2xl'>{userInfo?.displayName?.split(' ')[0]}</span>
                <div className='w-full h-[1px] bg-dark-main'/>
                <span className='text-xs'>ABOUT ME</span>
                <p className='text-xs font-light'>"A little bit darkness is needed to see the stars and beyond"</p>
                <span className='text-xs'>MEMBER SINCE</span>
                <p className='text-xs font-light'>{userInfo?.metadata?.creationTime?.slice(5,17)}</p>
                <div className='w-full h-[1px] bg-dark-main'/>
                <button className='hover:bg-light-bg p-2'>Log out</button>
            </div>
        </div>
    )
}

const MiddleSection = () => {
    const {userInfo} = useContext(UserContext)
    const [show, setShow] = useState(false)
    const showInfo = () => {
        setShow(prev => !prev)
    }
  return (
    <div className='bg-dark-main phone:relative h-responsive w-full max-w-xs px-2 py-5 flex flex-col gap-5'>
        <h2 className='text-white font-bold'>Direct Messages</h2>
        <div className='flex items-center justify-center text-white font-semibold gap-3 p-1 rounded-sm bg-light-bg'>
            <MdPersonAddAlt1 size={20}/>
            Invite
        </div>
        <div onClick={showInfo} className='flex items-center justify-end phone:justify-start gap-2 bg-darkest phone:bg-dark-inputs text-white phone:absolute fixed left-0 right-0 bottom-0 p-3'>
            <img src={userInfo?.photoURL} alt="user" className='w-9 rounded-full'/>
            <span className='hidden phone:block'>{userInfo?.displayName?.split(' ')[0]}</span>
        </div>
        {show && <UserDetails />}
    </div>
  )
}

export default MiddleSection