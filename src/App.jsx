import React, { createContext, useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ViewCart from './components/ViewCart'

export const cartContext = createContext();
const App = () => {
  const [cart,setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
       <Header cart={cart}/>
    <div className="container">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<ViewCart/>}/>
      </Routes>
    </div>
    </cartContext.Provider>
  )
}

export default App
