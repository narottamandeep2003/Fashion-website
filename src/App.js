import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import Shop from './pages/Shop';
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Product from './pages/Product';
import AboutUs from './pages/AboutUs';
import Trending from './pages/Trending';
import { Store } from './Store';
import { useState } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        exact: true,
        element: <Home></Home>
      },
      {
        path: "/shop",
        exact: true,
        element: <Shop></Shop>
      },
      {
        path: "/product/:id",
        exact: true,
        element: <Product></Product>
      },
      {
        path: "/about",
        exact: true,
        element: <AboutUs></AboutUs>
      },
      {
        path: "/trending",
        exact: true,
        element: <Trending></Trending>
      },
      {
        path: "/cart",
        exact: true,
        element: <Cart></Cart>
      },
      {
        path: "/payment",
        exact: true,
        element: <Payment></Payment>
      }
    ]
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
const itemList = [
  {
    id: 1,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p1.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 2,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p7.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 3,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p5.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 4,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p4.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 1,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p11.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 1,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p6.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 1,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p9.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  },
  {
    id: 1,
    title: "PY Tshirt",
    description: "clasic t shirt for daily use",
    cost: 100,
    stock: 50,
    imageUrl: "/images/p10.jpg",
    size:["XS","S","M","L","XL"],
    color:["black","red"]
  }
];


function App() {
  const [cart,setCart]=useState({
    list:[],
    cost:0
  })
  return (
    <Store.Provider value={{itemList,cart,setCart}} >
        <RouterProvider router={router} />
    </Store.Provider>
  );
}

export default App;
