// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Pages/Home/Home";
import About from './components/Pages/About/About';

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="ml-64 p-8 flex-1 bg-gray-50 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
