import React from 'react'
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import List from './list/List';
import Hotel from './hotel/Hotel';
import Register from './register/Register';
import LogIn from './login/LogIn';



const App = () => {


  return (
    <BrowserRouter>
      <Routes>
           <Route path="/register" element={<Register type="list"/>}></Route>
           <Route path="/Login" element={<LogIn/>}></Route>
           <Route path="/" element={<Home/>}></Route>
           <Route path="/hotels" element={<List />}></Route>
           <Route path="/hotel_id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;
