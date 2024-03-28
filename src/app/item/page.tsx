'use client'
import { getDataHome } from '@/api/home';
import ItemCard from '@/components/item/ItemCard'
import React from 'react'

function Page() {
    const data = getDataHome();

    console.log(data);
    
  return (
    <div>
        <ItemCard/>
    </div>
  )
}

export default Page