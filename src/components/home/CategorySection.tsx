import React from 'react'
import Categories from './Categories'
import { ICategories } from '@/types/Product'

type CategorySectionProps ={
  category :ICategories[]
}
const CategorySection = ({category} : CategorySectionProps) => {
  return (
    <div className='CategorySection'>
        <h1>Our Categories</h1>
        <Categories categories={category}/>
    </div>
  )
}

export default CategorySection