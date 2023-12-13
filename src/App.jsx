import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContent from './HomeContent';
import About from './components/About'; 
import LearnMore from './components/LearnMore';
import UserForm from "./components/UserForm";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/about" element={<About />} />
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/userForm" element={<UserForm />} />
    </Routes>
  </Router>

);
}
export default App;



