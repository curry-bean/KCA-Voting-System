import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Cart from "./components/Pages/Cart";
import Home from "./components/Pages/Home";
import {BrowserRouter as Router} from 'react-router-dom'
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import 'react-toastify/dist/ReactToastify.css';
import Product from "./components/Pages/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/reset" element={<Cart />} />
            <Route path="/recovery" element={<Cart />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
