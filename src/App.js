import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
//page..........
import Home from './Page/Home'
import About from "./Page/About";
import SingleCocktail from './Page/SingleCocktail'
import Error from "./Page/Error";
//component 
import Navbar from "./Components/Navbar"
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/cocktail/:id" element={<SingleCocktail />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
