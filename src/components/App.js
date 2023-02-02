import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './list/List';
import Hotel from './hotel/Hotel';



const App = () => {


  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/hotels" element={<List />}></Route>
           <Route path="/hotel_id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
