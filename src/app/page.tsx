"use client"
import React, { useEffect, useState } from 'react'
import '../styles/app/index.scss'
import HeroSectionSwiper from '@/components/home/HeroSectionSwiper'
import Fillter from '@/components/home/Fillter'
import Categories from '@/components/home/Categories'
import ProductCards from '@/components/home/ProductCards'
import CategorySection from '@/components/home/CategorySection'
import { getDataHome } from '@/api/home'
import axios from 'axios'
import { BaseURL } from '@/api/config'
import { VscLoading } from 'react-icons/vsc'
const page =  () => {
  
  // change type data later 
  const [data ,  setData] =  useState<any>(null)
  
  useEffect(()=>{

    axios.get(BaseURL).then((res)=>setData(res?.data?.data))
  },[])

  if(!data){
    return <div className='loading'>Loading ... </div>
  }
  return (
    <div className='HomePage'>
      <HeroSectionSwiper/> 
        <CategorySection category={data?.category || []}/> 
        <Fillter/> 
        <ProductCards last_item={data?.last_item}/>
    </div>
  )
}

export default page

