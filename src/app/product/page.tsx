'use client'
import { BaseURL } from '@/api/config'
import ProductCards from '@/components/home/ProductCards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {

  // update type later 
  const [data , setData] = useState<any>(null)

  console.log(data);
  

  useEffect(()=>{

    // make per page 50 to make pagination later pagination 
    axios.get(BaseURL+"/item?per_page=50").then(res => setData(res.data?.data)).catch(err => console.log(err)
    )
  },[])
  return (
    <div className='products'>
        <h1>All Products</h1>
        <ProductCards  last_item={data?.data || []}/>
    </div>
  )
}

export default Page