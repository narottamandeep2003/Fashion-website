import React, { useContext } from 'react'
import { Store } from '../Store'
function CartItem({item}) {
    return (
        <div className='w-full flex' >
            <img src={item.imageUrl} alt="..." className='w-[150px] h-[180px] object-cover object-center rounded' />
            <div className='w-[calc(100%-200px)] flex  items-center flex-col'>
                <div className='flex justify-between w-[90%] mt-2 mb-1' >
                    <span className='font-semibold text-[1.1rem] cursor-pointer'>{item.title}</span>
                </div>
                <span className='w-[90%]  font-light text-gray-500 text-[1rem]'> Quantity : {item.quantity}</span>
                <span className='w-[90%] font-light text-gray-500 text-[1rem]'> variant : Oversize</span>
                <span className='w-[90%] font-light text-gray-500 text-[1rem]'> Size : {item.size}</span>
                <span className='w-[90%] font-light text-gray-500 text-[1rem]'> Color : {item.color}</span>
            </div>
        </div>
    )
}
export default function Payment() {
    const store = useContext(Store)
    return (
        <div className='mt-[70px] mb-10 flex'>
            <div className='w-2/3  flex justify-center '>
                <div className='w-[80%] mt-2'>
                    <h1 className='w-full font-bold text-[1.5rem]'>Payment</h1>
                    <div className='w-full flex flex-col items-center space-y-2 mt-4'>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Billing country/region</span>
                                <select className=' p-2 rounded-full outline-0 border-gray-600  border mt-2'>
                                    <option value="india" >india</option>
                                </select>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Enter your promo code</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='TVS%afsv@' />
                            </div>
                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-full flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Card Number</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='MM/YY' />
                            </div>
                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Expiration date</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='MM/YY' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>CVV</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='XXX' />
                            </div>
                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>First name</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='First Name' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Last name</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='Last Name' />
                            </div>
                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-full flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Address</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='Address' />
                            </div>

                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>Postal Code</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='Postal Code' />
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <span className=' font-mormal text-gray-500'>City</span>
                                <input type='text' className=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='City' />
                            </div>
                        </div>
                        <div className='flex w-full gap-x-5'>
                            <div className='w-1/2 flex flex-col'>
                                <button className='w-full bg-black text-white h-[40px] rounded-full mt-3'> <span to="/payment">Pay</span></button>
                            </div>
                            <div className='w-1/2 flex flex-col'>
                                <button className='w-full h-[40px] rounded-full mt-3 font-bold border border-gray-500'><span className=' text-blue-600'>Pay</span><span className=' text-blue-400'>Pal</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/3 flex justify-center'>
                <div className='w-[70%] mt-2'>
                    <h1 className='w-full font-bold text-[1.5rem]'>Summary</h1>
                    <div className='w-full flex flex-col items-center space-y-2 mt-4'>
                        <div className='flex justify-between w-full '> <span className='cursor-pointer font-samibold'>Subtotal</span> <span className=' font-bold cursor-pointer'>$1{store.cart.cost}</span></div>
                        <div className='flex justify-between w-full '> <span className='cursor-pointer font-samibold'>Estimated Delivery & Handling</span> <span className=' font-bold cursor-pointer'>free</span></div>
                        <div className='flex justify-between w-full '>
                            <span className='cursor-pointer font-samibold'>Estimated Text</span> <span className=' font-bold cursor-pointer'>$20</span>
                        </div>
                        <div className='w-full  '>
                            <div className='flex justify-between w-full mt-[50px] border-t border-b py-6'>
                                <span className='cursor-pointer font-bold'>Total</span> <span className=' font-bold cursor-pointer'>${store.cart.cost+20}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center space-y-4 mt-4 h-[300px] overflow-y-auto cartWindow  '>
                        {store.cart.list.map((item) => {
                            return <CartItem key={item.id} item={item}></CartItem>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
