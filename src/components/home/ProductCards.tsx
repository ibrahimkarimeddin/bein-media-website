import React from 'react';
import ProductCard from './ProductCard';

// Fake data for products with added id
export interface Product {
  id: number;
  name: string;
  description: string;
  price:number ,
  price_after_discount:number
}



type ProductCardProps ={
  last_item:Product[]
}
const ProductCards  = ({last_item} :ProductCardProps) => {
  return (
    <div className='ProductCards'>
      {last_item.map((product) => (
        <ProductCard key={product.id} data={product} />
      ))}
    </div>
  );
};

export default ProductCards;
