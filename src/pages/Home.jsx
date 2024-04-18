import React from 'react'
import Landing from '../components/Landing'
import Curated from '../components/Curated'
import Products from '../components/Products'

export default function Home() {
  return (
    <div>
      <Landing></Landing>
      <Curated></Curated>
      <Products></Products>
    </div>
  )
}
