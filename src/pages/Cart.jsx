import React from 'react'
import { Link } from 'react-router-dom'
function CartItem() {
  return (
    <div className='w-full flex' >
      <img src="/images/female.jpg" alt="..." className='w-[200px] h-[220px] object-cover object-center rounded' />
      <div className='w-[calc(100%-200px)] flex  items-center flex-col'>
        <div className='flex justify-between w-[90%] mt-2 mb-2' >
          <span className='font-semibold text-[1.2rem] cursor-pointer'>Badacore Tshirt</span>
          <span className='font-semibold text-[1.2rem] cursor-pointer'>$50,00</span>
        </div>
        <span className='w-[90%]  text-gray-500 mb-1'> variant : Oversize</span>
        <span className='w-[90%]  text-gray-500 mb-1'> Size : Xl</span>
        <span className='w-[90%]  text-gray-500 mb-1'> Color : white</span>
        <div className='flex justify-between w-[90%] mb-2 mt-auto' >
          <div className=' space-x-10 h-[50px] flex items-center'>
            <i class="bi bi-heart cursor-pointer text-[1.3rem]" ></i>
            <i class="bi bi-trash3 cursor-pointer text-[1.3rem]"></i>
          </div>
          <div className=' space-x-5 h-[50px] flex items-center'>
            <i class="bi bi-dash-circle cursor-pointer text-[1.5rem]"></i>
            <span className=' cursor-pointer'>1</span>
            <i class="bi bi-plus-circle cursor-pointer text-[1.5rem]"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Cart() {
  return (
    <div className='w-screen mt-[70px] flex'>
      <div className='w-2/3 flex justify-center '>
        <div className='w-[90%] mt-2'>
          <h1 className='w-full font-bold text-[1.5rem]'>Your Cart</h1>
          <div className='w-full flex flex-col items-center space-y-10 mt-4'>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
          </div>
        </div>

      </div>
      <div className='w-1/3 flex justify-center'>
        <div className='w-[70%] mt-2'>
          <h1 className='w-full font-bold text-[1.5rem]'>Summary</h1>
          <div className='w-full flex flex-col items-center space-y-2 mt-4'>
            <div className='flex justify-between w-full '> <span className='cursor-pointer font-samibold'>Subtotal</span> <span className=' font-bold cursor-pointer'>$190</span></div>
            <div className='flex justify-between w-full '> <span className='cursor-pointer font-samibold'>Estimated Delivery & Handling</span> <span className=' font-bold cursor-pointer'>free</span></div>
            <div className='flex justify-between w-full '>
              <span className='cursor-pointer font-samibold'>Estimated Text</span> <span className=' font-bold cursor-pointer'>$20</span>
            </div>
            <div className='w-full'>
              <div className='flex justify-between w-full mt-[50px]'>
                <span className='cursor-pointer font-bold'>Total</span> <span className=' font-bold cursor-pointer'>$210</span>
              </div>
            </div>
            <div className='w-full'>
              <button className='w-full bg-black text-white h-[40px] rounded-full mt-3'> <Link to="/payment">CheckOut now</Link></button>
            </div>
            <div className='w-full'>
              <button className='w-full h-[40px] rounded-full mt-1 font-bold border border-gray-500'><span className=' text-blue-600'>Pay</span><span className=' text-blue-400'>Pal</span></button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
