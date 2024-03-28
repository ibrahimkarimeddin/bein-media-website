'use client'
import React from 'react'
import ImgField from '../utils/Image'
import { NavItems } from './HeaderData'
import { useRouter } from 'next/navigation'

const NavBar = () => {
  const router = useRouter();
  const handelclick=()=>{
    router.push(`/`); 
  }
  return (
    <nav className='NavBar'>
          <ImgField src='/app/logo.png' onClick={()=> handelclick()} />
            <NavItems/>
            
    </nav>
  )
}

export default NavBar