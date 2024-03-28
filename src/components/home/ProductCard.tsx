'use client'
import React from 'react';
import ImageField from '../utils/Image';
import { useRouter } from 'next/navigation'
import { FaEye } from 'react-icons/fa';
import { Product } from './ProductCards';


const ProductCard: React.FC<{ data: Product }> = ({ data }) => {
    const router = useRouter();
    const handelclick=(id:number)=>{
        router.push(`/product/${id}`); 
    }
    return (
        <div className='ProductCard' >
            <ImageField src={`/img/product1.webp`}  />
            <div className='ProductCardInfo'>
                <h5>{data.name}</h5>
           
                <p>Price  {data.price}</p>
                <p>Price After Discount  {data.price_after_discount}</p>


                <p>{data.description}</p>
                <div className='viewIcon' onClick={()=> handelclick(data?.id)} >
                    <FaEye/>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
