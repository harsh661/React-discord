import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setError] = useState('')

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        navigate('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        setError(errorCode)
        setEmail('')
        setPassword('')
    });
  }
  return (
    <main className='flex items-center phone:justify-center h-screen w-full bg-accent-blue'>
        <div className='flex flex-col gap-3 items-center w-full h-full phone:h-auto bg-dark-main max-w-[485px] p-5 phone:p-8 phone:rounded-md'>
            <img src="/logo.svg" alt="logo" className='w-32 phone:hidden'/>
            <h2 className='text-white pt-2 phone:pt-0 text-xl font-semibold'>Welcome back!</h2>
            <span className='text-dark-text'>We're so exited to see you again!</span>
            <form onSubmit={signIn} className='flex flex-col gap-5 w-full text-light-text'>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="email" className='text-xs font-semibold'>EMAIL</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id='email' className={`bg-dark-inputs p-2 rounded-sm ${err=='auth/user-not-found' && 'border border-red-500'}`}/>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor="pass" className='text-xs font-semibold'>PASSWORD</label>   
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id='pass' className={`bg-dark-inputs p-2 rounded-sm ${err=='auth/wrong-password' && 'border border-red-500'}`}/>
                    <a href="#" className='text-xs text-sky-500 font-bold hover:underline underline-offset-2'>Forgot your password ?</a>
                </div>
                <button type='submit' className='py-3 text-sm text-white bg-accent-blue'>
                    Log In
                </button>
                <span className='text-xs'>Need an account? <Link to='/register' className='text-sky-500 font-bold hover:underline underline-offset-2'>Register</Link></span>
            </form>
        </div>
    </main>
  )
}

export default Login
