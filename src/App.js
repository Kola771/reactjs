// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import SavePost from './components/SavePost';
import Navbar from './components/Navbar.js'
import './input.css'
import './output.css'
function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/savepost" element={<SavePost />} />
        <Route path="*" element={<Home />} /> {/* Route par défaut */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
