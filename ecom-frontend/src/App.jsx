import './App.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import {Toaster} from "react-hot-toast";

function App() {

    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Router>
            <Toaster position='bottom-center'/>
        </React.Fragment>
    )
}

export default App
