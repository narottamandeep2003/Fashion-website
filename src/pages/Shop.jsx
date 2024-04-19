import React, { useContext, useState } from 'react'
import ProductItem from "../components/ProductItem"
import { Store } from '../Store';
let collections = ["Tshirt", "Pants", "Jacket", "Hoodies", "Short"]
export default function Shop() {
    const [target, setTarget] = useState("Tshirt");
    let Item=useContext(Store).itemList;
    return (
        <>
            {/* <div className='w-[400px] h-[calc(100vh-70px)] bg-red-300 absolute left-0 t-[70px]'>

            </div> */}
            <div className=' w-screen flex flex-col justify-center items-center mt-[70px] '>
                <div className='text-center mt-3 flex justify-center items-center flex-col'  >
                    <h1 className=' font-bold text-[1.8rem] uppercase '>Clothing collections</h1>
                    <p className=' w-[90%] mt-3 text-[1.2rem] font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit vel dolorem dolorum? Dolores, magnam. Similique </p>
                </div>
                <div className=' space-x-3 mt-4'>
                    {collections.map((collection) => (
                        <button key={collection} className={(target === collection ? " bg-black text-white" : " text-black") + " border border-black rounded-full pl-4 pr-4 pt-1 pb-1 cursor-pointer"}
                            onClick={() => { setTarget(collection) }}
                        >{collection}</button>
                    ))}
                    <button className=' border border-black rounded-full pl-4 pr-4 pt-1 pb-1 bg-black text-white cursor-pointer'><i className="bi bi-sliders"></i></button>
                </div>
                <div className='flex flex-col items-center justify-center  mb-10 mt-5'>
                    <div className=" grid grid-cols-4 w-[90%] mt-10 ">
                        {Item.map((item) => {
                            return <ProductItem key={item.id} item={item}></ProductItem>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
