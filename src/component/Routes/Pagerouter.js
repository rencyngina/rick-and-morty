import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cher1 from '../Pages/Cher1'
const Pagerouter = () => {
  return (
    <div>
    <Routes>
    <Route path="Cher1" element={<Cher1/>}/> 
    </Routes>
    </div>
  )
}

export default Pagerouter
