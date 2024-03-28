import { Product } from '@/types/Product'
import React from 'react'

   const ProductDetails: React.FC<{ data: Product }> = ({ data }) => {

  return (
    <div className='ProductDetails'>
        <h1> {data?.name} </h1>
        <h6>42 review</h6>
                <p>{data.description}</p>
    </div>
  )
}

export default ProductDetails