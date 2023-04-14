import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className='flex items-center phone:justify-center min-h-responsive w-full bg-accent-blue'>
        <div className='flex flex-col min-h-responsive phone:min-h-min p-5 phone:rounded-md justify-between items-center bg-dark-main'>
            <img src="/logo.svg" alt="logo" className='w-[150px] phone:hidden'/>
            <div className='w-full flex flex-col gap-3 text-white font-bold max-w-screen-phone'>
                <div className='flex flex-col items-center gap-3 pb-5'>
                    <h2 className='text-2xl'>Welcome to Discord</h2>
                    <p className='text-sm text-light-text text-center px-2 font-normal'>Join over 100 million people who use Discord to talk with communities and friends.</p>
                </div>
                <Link to='/register' className='bg-accent-blue flex items-center justify-center p-3 rounded-md'>Register</Link>
                <Link to='/login' className='bg-dark-inputs flex items-center justify-center p-3 rounded-md'>Login</Link>
            </div>
        </div>
    </main>
  )
}

export default Landing