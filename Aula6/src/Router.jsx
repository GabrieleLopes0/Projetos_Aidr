import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Nav from './Components/Nav';

export default function Router() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </BrowserRouter>
  )
}
