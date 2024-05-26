import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

<<<<<<< HEAD
import  AddNewItem from "./pages/AddNewItem";
=======
import AddNewItem from "./pages/AddNewItem";
>>>>>>> 9ac27683f0f15d226d32717698d9d9ccc1789c3d
import Products from "./pages/Products";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Login from "./pages/LogInUser";


function App() {
  

  return (
    <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/addnew" element={<AddNewItem />} />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login/>} />
                {/* <Route
                    path="/product"
                    element={<Products />}
                /> */}
            </Routes>
        </Router>
  );
}

export default App