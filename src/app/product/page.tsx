import { BaseURL } from '@/api/config'
import ProductCards from '@/components/home/ProductCards'
import React, { useEffect, useState } from 'react'

const Page = async () => {

  // update type later 
  const  {data} =await (await fetch(BaseURL+"/item")).json(); 

  

 
  return (
    <div className='products'>
        <h1>All Products</h1>
        <ProductCards  last_item={data?.data || []}/>
    </div>
  )
}

export default Page