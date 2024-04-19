import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { Store } from '../Store'
let links = [
    {
        path: "/shop",
        title: "Shop"
    },
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/about",
        title: "About"
    },
    {
        path: "/trending",
        title: "Trending"
    }
]
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}
export default function Navbar() {
    const cartItem=useContext(Store).cart.list.length
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className=' w-screen h-[70px] fixed top-0 left-0 flex justify-between max-lg:hidden z-50 bg-white'>
                <ul className=' flex justify-center items-center space-x-10  w-1/3 max-lg:space-x-6 '>
                    {links.map((link) => {
                        return (<li key={link.title} ><NavLink to={link.path} className={({ isActive }) => isActive ? "text-black font-bold" : ""}>{link.title}</NavLink> </li>)
                    })}
                </ul>
                <ul className=' flex  items-center justify-center w-1/3'>
                    <li className='font-black'><a href="/">Fashion</a></li>
                </ul>
                <ul className=' flex justify-center items-center space-x-10 w-1/3 max-lg:space-x-6'>
                    <li className=' bold cursor-pointer'><NavLink to={"/cart"} className={({ isActive }) => isActive ? "text-black font-bold" : ""}>Cart ( {cartItem} )</NavLink></li>
                    <li className=' bold'><a href="/login">Login</a></li>
                </ul>
            </div>

            <div className='hidden w-screen h-[70px] fixed top-0 left-0 justify-between items-center max-lg:flex z-50 bg-white'>
                <span className=' font-semibold cursor-pointer ml-10'><a href="/">Fashion</a></span>
                <span className='cursor-pointer mr-10' onClick={() => { setIsOpen((state) => !state) }}> {isOpen ? "Close" : "Open"}</span>
            </div>
            <motion.div animate={isOpen ? "open" : "closed"} variants={variants} className='hidden z-50 w-screen h-[calc(100vh-70px)] justify-center items-center flex-col fixed top-[70px]  left-0 bg-black text-white max-lg:flex '>
                <ul className=' flex flex-col justify-center items-center w-full space-y-5'>
                    {links.map((link) => {
                        return (<li key={link.title} ><a href={link.path}>{link.title}</a> </li>)
                    })}
                    <li className=' bold cursor-pointer'>Cart</li>
                    <li className=' bold'><a href="/login">Login</a></li>
                </ul>
                <div className='absolute w-screen h-[50px] flex left-0 bottom-0  justify-between items-center'>
                    <span className='ml-5'>@copyright</span>
                    <span className='mr-5'>Git</span>
                </div>
            </motion.div>
        </>
    )
}
