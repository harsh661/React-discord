import React, { useContext, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import MiddleSection from '../components/MiddleSection';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';

const Home = () => {
  const navigate = useNavigate()
  const {userInfo, setUserInfo} = useContext(UserContext)
  const setUsers = async () => {
    await setDoc(doc(db, "Users", userInfo.uid), {
      displayName: userInfo.displayName,
      id: userInfo.uid,
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserInfo(user)
        setUsers()
      } else {
        navigate('/welcome')
      }
    })
  }, [])
  return (
    <div className='h-screen w-full flex'>
      <Sidebar />
      <MiddleSection />
    </div>
  )
}

export default Home