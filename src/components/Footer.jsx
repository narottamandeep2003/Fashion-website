import React from 'react'

export default function Footer() {
  return (
    <div className='w-screen flex items-center flex-col mt-20'>
      <div className='w-[90%] h-auto flex justify-between  pb-3 '>
        <div className='w-1/3 h-full'>
          <div className=''>
            <h1 className='font-semibold text-[1.1rem]'>Let's Keep In Touch </h1>
            <div className=' space-x-10 mt-5'>
              <input type="text" placeholder='Email Address' className=' outline-none pb-1 pt-1 border-b-2 border-gray-400 placeholder:font-light placeholder:text-gray-600 focus:border-black' />
              <button className=' w-auto cursor-pointer outline-none pb-1 pt-1 pl-1 pr-1 border-b-2 border-gray-600 placeholder:font-light placeholder:text-gray-600  focus:border-black'>Subscribe</button>
            </div>
          </div>
        </div>

        <div className='w-2/3 h-full flex justify-end space-x-44'>
          <div className='w-auto'>
            <h1 className='font-semibold text-[1.1rem]'>Shop</h1>
            <ul className='mt-3 '>
              <li className=' font-light cursor-pointer'>Man</li>
              <li className=' font-light cursor-pointer'>Woman</li>
              <li className=' font-light cursor-pointer'>Kid</li>
              <li className=' font-light cursor-pointer'>Sports</li>
            </ul>
          </div>

          <div className='w-auto'>
            <h1 className='font-semibold text-[1.1rem]'>Explore</h1>
            <ul className='mt-3 '>
              <li className=' font-light cursor-pointer'>Testimonials</li>
              <li className=' font-light cursor-pointer'>FAQs</li>
              <li className=' font-light cursor-pointer'>Terms and conditions</li>
              <li className=' font-light cursor-pointer'>Careers</li>
              <li className=' font-light cursor-pointer'>Coontect Us</li>
            </ul>
          </div>

          <div className='w-auto'>
            <h1 className='font-semibold text-[1.1rem]'>Follow</h1>
            <ul className='mt-3 '>
              <li className=' font-light cursor-pointer'>instagram</li>
              <li className=' font-light cursor-pointer'>facebook</li>
              <li className=' font-light cursor-pointer'>youtube</li>

            </ul>
          </div>
        </div>
      </div>

      <div className='w-screen h-[60px] flex justify-center border-t'>
        <div className='w-[90%] h-full flex mt-3 items-center justify-between'>
          <div className=' space-x-3 font-light'>
            <span className=' cursor-pointer  text-gray-500 font-light'><i class="bi bi-apple mr-1"></i>pay</span>
            <span className=' cursor-pointer  text-gray-500 font-light'> <span>PayPal</span></span>
            <span className=' cursor-pointer  text-gray-500 font-light'><span>Visa</span></span>
          </div>

          <div className=' space-x-3 font-light text-gray-500'>
            <span className='cursor-pointer'>Copyright 2024</span>
            <span className='cursor-pointer'>privacy Policy</span>
          </div>

        </div>
      </div>
    </div>
  )
}
