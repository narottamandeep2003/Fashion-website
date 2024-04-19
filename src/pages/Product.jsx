import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Store } from '../Store'

export default function Product() {
    const { id } = useParams();
    const store = useContext(Store);
    const [item, setItem] = useState({});
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const [quntity, setQuntity] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        const parsedId = Number.parseInt(id);
        const res = store.itemList.find((ele) => ele.id === parsedId);
        console.log(res);
        setItem(res || {});
    }, [id, store]);
    return (
        <div className=' w-screen flex flex-col justify-center items-center mt-[100px]'>
            <div className=" w-[80%]  flex">
                <div className='w-1/2 h-100  flex flex-col items-center'>
                    <img src={item?.imageUrl} alt="..." className='w-[70%]   h-[500px] object-cover object-center' />
                </div>
                <div className='w-1/2 h-100  flex flex-col'>
                    <h1 className=' font-bold text-[2.2rem]'>{item?.title}</h1>
                    <p className='font-light text-[1.1rem]'>{item?.description}</p>
                    <span className=' cursor-pointer mt-1 font-semibold'>Select Color</span>
                    <div className=' grid  grid-cols-12 gap-1 mt-2 w-[60%]'>
                        {
                            item?.color?.map((col) => {
                                return <div key={col} className='w-6 h-6 rounded-full cursor-pointer flex justify-center items-center' style={{ background: col }} onClick={() => { setColor(col) }}>
                                    {col === color ? (<div className='bg-white w-2 h-2 rounded-full' ></div>) : ""}
                                </div>
                            })
                        }
                    </div>
                    <span className=' cursor-pointer mt-2 font-semibold'>Select Size</span>
                    <div className=' grid  grid-cols-5 gap-1 mt-2 w-[40%]'>
                        {
                            item?.size?.map((Size) => {
                                return <div  key={Size} className={Size === size ? 'border border-black rounded-full pl-4 pr-4   cursor-pointer text-white bg-black ' : "border border-black rounded-full pl-4 pr-4   cursor-pointer text-black "} onClick={() => {
                                    setSize(Size)
                                }}>{Size}</div>
                            })
                        }

                    </div>
                    <div className='flex w-[80%] justify-between mt-2'>
                        <div>
                            <span className=' cursor-pointer mt-2 font-semibold'>Price</span>
                            <div className=' space-x-3 text-[2rem] mt-1 '><span className='font-bold  cursor-pointer'>{item?.cost}</span> <del className=' font-light cursor-pointer'>${item?.cost + 100}</del></div>
                        </div>
                        <div>
                            <span className=' cursor-pointer mt-2 font-semibold'>Quantity</span>
                            <div className=' space-x-4 text-[1.2rem] mt-5 flex'>
                                <span className='flex justify-center items-center w-12 h-9  bg-black text-white rounded-full font-bold cursor-pointer ' onClick={() => {
                                    setQuntity(quntity - 1)
                                }}>-</span>
                                <span>{quntity}</span>
                                <span className='flex justify-center items-center w-12  bg-black text-white rounded-full font-bold cursor-pointer ' onClick={() => {
                                    setQuntity(quntity + 1)
                                }}>+</span>
                            </div>
                        </div>

                    </div>
                    <div className='w-[80%] flex mt-5 space-x-3' >
                        <button className='w-1/2 h-10 border border-black rounded-full' onClick={() => {
                            store.setCart({
                                list: [...store.cart.list, {
                                    ...item,
                                    color: color,
                                    size: size,
                                    quntity:quntity
                                }],
                                cost: store.cart.cost + quntity * item?.cost
                            });
                            navigate("/")
                        }}>Add To Cart</button>
                        <button className='w-1/2 h-10 border border-black rounded-full bg-black text-white'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
