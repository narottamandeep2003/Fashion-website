import React from 'react'
import ProductItem from './ProductItem'

export default function Products() {
    return (
        <div className='flex flex-col items-center justify-center  mb-10'>
            <h1 className='text-[6rem] mt-10 font-bold'>Products</h1>
            <ProductItem></ProductItem>
        </div>
    )
}
