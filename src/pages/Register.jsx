import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword , updateProfile } from "firebase/auth";
import { auth } from '../firebase';

const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

const register = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: `https://api.dicebear.com/6.x/initials/svg?seed=${name}&size=48`
        }).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
        console.log(errorMessage)
    });
}

  return (
    <main className='flex items-center phone:justify-center h-screen w-full bg-accent-blue'>
        <div className='flex flex-col gap-3 items-center w-full h-full phone:h-auto bg-dark-main max-w-[485px] p-5 phone:p-8 phone:rounded-md'>
            <img src="/logo.svg" alt="logo" className='w-32 phone:hidden'/>
            <h2 className='text-white pt-2 phone:pt-0 text-xl font-semibold'>Create an account</h2>
            <form onSubmit={register} className='flex flex-col gap-5 w-full text-light-text'>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="email" className='text-xs font-semibold'>EMAIL</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' className='bg-dark-inputs p-2 rounded-sm'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="name" className='text-xs font-semibold'>USERNAME</label>
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="name" id='name' className='bg-dark-inputs p-2 rounded-sm'/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="pass" className='text-xs font-semibold'>PASSWORD</label>   
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='pass' className='bg-dark-inputs p-2 rounded-sm'/>
                </div>
                <button type='submit' className='py-3 text-sm text-white bg-accent-blue'>
                    Continue
                </button>
                <Link to='/login' className='text-sky-500 text-xs font-bold hover:underline underline-offset-2'>Already have an account?</Link>
            </form>
        </div>
    </main>
  )
}

export default Register