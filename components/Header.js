import React, { useEffect, useState } from 'react'
import { doc } from 'firebase/firestore'; 
import Modal from './Modal'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase'

export default function Header() {
  const [openModal, setOpenModal] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((users) => {
      if (users) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
    return () => unsubscribe()
  }, [])

  const handleShowModal = () => {
    if (loggedIn) {
      setOpenModal(true)
    }
  }

  return (
    <>
      {loggedIn && openModal && <Modal setOpenModal={setOpenModal} />}
      <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white'>
        <h1 className='text-3xl select-none sm:text-6xl'>TO DO LIST</h1>
        <button onClick={handleShowModal}>
             <i className="fa-solid fa-user text-xl duration-300 hover:opacity-40 cursor-pointer sm:text-3xl"></i>
        </button>
      </div>
    </>
  );
}