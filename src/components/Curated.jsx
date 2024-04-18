import React from 'react'

export default function Curated() {
    return (
        <div className='flex flex-col items-center justify-center  mb-10'>
            <h1 className='text-[6rem] mt-10 font-bold'>Curated Products</h1>
            <div className=" grid grid-cols-4 w-[90%] mt-10">
                <div className='w-full justify-center items-center cursor-pointer'>
                    <img src="/images/man.jpg" alt="..." className='  w-[95%] h-auto' />
                </div>
                <div className='w-full justify-center items-center cursor-pointer'>
                    <img src="/images/female.jpg" alt="..." className='  w-[95%] h-auto cursor-pointer' />
                </div>
                <div className='w-full justify-center items-center cursor-pointer'>
                    <img src="/images/kid.jpg" alt="..." className='  w-[95%] h-auto cursor-pointer' />
                </div>
                <div className='w-full justify-center items-center cursor-pointer'>
                    <img src="/images/sports.jpg" alt="..." className=' w-[95%] h-auto cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
