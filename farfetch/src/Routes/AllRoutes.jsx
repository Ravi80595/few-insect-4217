import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ShopStructure from '../Components/ShopStructure'
import SingleProductPage from '../Components/SingleProductPage'
import AdminPage from '../Pages/AdminPage'
import CartPage from '../Pages/CartPage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopStructure/>} />
      <Route path="/data/:id" element={<SingleProductPage/>} />
      <Route path="/admin" element={<AdminPage/>} />
      
      <Route path="/cartPage" element={<CartPage/>}></Route>
      <Route path="*" element={<h3>Page Not Found</h3>} />
     
    </Routes>
  )
}

export default AllRoutes
