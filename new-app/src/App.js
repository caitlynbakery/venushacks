import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AddNewItem } from "./pages/AddNewItem";
import {Products} from "./pages/Products";
import {Search} from "./pages/Search";
import {Home} from "./pages/Home";


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
                <Route
                    path="/product"
                    element={<Products />}
                />
            </Routes>
        </Router>
  );
}

export default App