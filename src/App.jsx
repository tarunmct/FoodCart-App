import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ViewCart from './components/ViewCart'
import {  CartProvider } from './components/FoodCartContext'


const App = () => {
  
  return (
    <CartProvider>
       <Header />
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<ViewCart/>}/>
      </Routes>
    </div>
    </CartProvider>
  )
}

export default App
