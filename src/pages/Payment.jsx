import React from 'react'
function CartItem() {
    return (
        <div class='w-full flex' >
            <img src="/images/p1.jpg" alt="..." class='w-[150px] h-[180px] object-cover object-center rounded' />
            <div class='w-[calc(100%-200px)] flex  items-center flex-col'>
                <div class='flex justify-between w-[90%] mt-2 mb-1' >
                    <span class='font-semibold text-[1.1rem] cursor-pointer'>Badacore Tshirt</span>
                </div>
                <span class='w-[90%]  font-light text-gray-500 text-[1rem]'> Quantity : 1</span>
                <span class='w-[90%] font-light text-gray-500 text-[1rem]'> variant : Oversize</span>
                <span class='w-[90%] font-light text-gray-500 text-[1rem]'> Size : Xl</span>
                <span class='w-[90%] font-light text-gray-500 text-[1rem]'> Color : white</span>
            </div>
        </div>
    )
}
export default function Payment() {
    return (
        <div class='mt-[70px] mb-10 flex'>
            <div class='w-2/3  flex justify-center '>
                <div class='w-[80%] mt-2'>
                    <h1 class='w-full font-bold text-[1.5rem]'>Payment</h1>
                    <div class='w-full flex flex-col items-center space-y-2 mt-4'>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Billing country/region</span>
                                <select class=' p-2 rounded-full outline-0 border-gray-600  border mt-2'>
                                    <option value="india" >india</option>
                                </select>
                            </div>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Enter your promo code</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='TVS%afsv@' />
                            </div>
                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-full flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Card Number</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='MM/YY' />
                            </div>
                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Expiration date</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='MM/YY' />
                            </div>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>CVV</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='XXX' />
                            </div>
                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>First name</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='First Name' />
                            </div>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Last name</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='Last Name' />
                            </div>
                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-full flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Address</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600 ' placeholder='Address' />
                            </div>

                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>Postal Code</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2   border-gray-600' placeholder='Postal Code' />
                            </div>
                            <div class='w-1/2 flex flex-col'>
                                <span class=' font-mormal text-gray-500'>City</span>
                                <input type='text' class=' p-2 rounded-full outline-0  border mt-2  border-gray-600' placeholder='City' />
                            </div>
                        </div>
                        <div class='flex w-full gap-x-5'>
                            <div class='w-1/2 flex flex-col'>
                                <button class='w-full bg-black text-white h-[40px] rounded-full mt-3'> <span to="/payment">Pay</span></button>
                            </div>
                            <div class='w-1/2 flex flex-col'>
                                <button class='w-full h-[40px] rounded-full mt-3 font-bold border border-gray-500'><span class=' text-blue-600'>Pay</span><span class=' text-blue-400'>Pal</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='w-1/3 flex justify-center'>
                <div class='w-[70%] mt-2'>
                    <h1 class='w-full font-bold text-[1.5rem]'>Summary</h1>
                    <div class='w-full flex flex-col items-center space-y-2 mt-4'>
                        <div class='flex justify-between w-full '> <span class='cursor-pointer font-samibold'>Subtotal</span> <span class=' font-bold cursor-pointer'>$190</span></div>
                        <div class='flex justify-between w-full '> <span class='cursor-pointer font-samibold'>Estimated Delivery & Handling</span> <span class=' font-bold cursor-pointer'>free</span></div>
                        <div class='flex justify-between w-full '>
                            <span class='cursor-pointer font-samibold'>Estimated Text</span> <span class=' font-bold cursor-pointer'>$20</span>
                        </div>
                        <div class='w-full  '>
                            <div class='flex justify-between w-full mt-[50px] border-t border-b py-6'>
                                <span class='cursor-pointer font-bold'>Total</span> <span class=' font-bold cursor-pointer'>$210</span>
                            </div>
                        </div>
                    </div>
                    <div class='w-full flex flex-col items-center space-y-4 mt-4 h-[300px] overflow-y-auto cartWindow  '>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                        <CartItem></CartItem>
                    </div>
                </div>
            </div>
        </div>
    )
}
