// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import SavePost from './components/SavePost';
import './input.css'
function App() {
  return (
    <Router>
    <div>
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
