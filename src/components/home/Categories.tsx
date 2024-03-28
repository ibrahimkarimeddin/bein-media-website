'use client'
import { ICategories } from '@/types/Product';
import React, { useState } from 'react';
import { DiDatabase } from 'react-icons/di';

interface Category {
  name: string;
  id: number;
}

type CategorySectionProps ={
  categories :ICategories[]
}
const Categories = ({categories}:CategorySectionProps) => {
  // Array of fake categories
 

  return (
    <div className='Categories'>
      {categories.map((category:Category, index:number) => (
        <div key={index} className={`Categories_Item `}>
          {category.name} 
        </div>
      ))}
    </div>
  );
};

export default Categories;
