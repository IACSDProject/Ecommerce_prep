import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Navbar from "./components/shared/Navbar.jsx";

function App() {

    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>

        </Router>
    )
}

export default App
