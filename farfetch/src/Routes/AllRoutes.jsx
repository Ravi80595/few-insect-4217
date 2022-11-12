import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ShopStructure from '../Components/ShopStructure'
import SingleProductPage from '../Components/SingleProductPage'
import CartPage from '../Pages/CartPage'
import HomePage from '../Pages/HomePage'
import Payment from '../Pages/Payment'
import MenPage from "../Pages/Homepage/MenPage"
import PaymentPage2 from '../Pages/PaymentPage2'
import Dashboard from "../Components/Admin/Dashboard"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/menpage" element={<MenPage/>} />
      <Route path="/data/:id" element={<SingleProductPage/>} />
      <Route path="/cartPage" element={<CartPage/>}></Route>
      <Route path="/shop" element={<ShopStructure/>}></Route>
      <Route path="/payment" element={<Payment/>}></Route>
      <Route path="/admin" element={<Dashboard/>}></Route>
      <Route path="/paymentpage2" element={<PaymentPage2/>}></Route>
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  )
}

export default AllRoutes
