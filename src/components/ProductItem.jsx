import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductItem({ item }) {
    const navigate=useNavigate()
    return (

        <div className='w-full justify-center items-center cursor-pointer mb-10'>
            <img src={item.imageUrl} alt="..." className='  w-[95%] h-auto cursor-pointer' onClick={()=>{
                navigate("/product/"+item.id)
            }} />
            <p className="font-semibold mt-2">{item.title}</p>
            <p className='font-light'>{item.description}</p>
            <p className='font-semibold'>${item.cost}</p>
        </div>

    )
}
