import React, { useContext } from 'react'
import ProductItem from './ProductItem'
import { Store } from '../Store'

export default function Products() {
    
    let Item=useContext(Store).itemList
    // console.log(Item)
    return (
        <div className='flex flex-col items-center justify-center  mb-10'>
            <h1 className='text-[6rem] mt-10 font-bold'>Products</h1>
            <div className=" grid grid-cols-4 w-[90%] mt-10 ">
                {Item.map((item)=>{
                    return <ProductItem key={item.id} item={item}></ProductItem>
                })}
            </div>

        </div>
    )
}
