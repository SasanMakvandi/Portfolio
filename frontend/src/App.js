import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        {/* Other Routees */}
      </Routes>
    </Router>
  )
}

export default App;
