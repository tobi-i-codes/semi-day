import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MessagePage from './pages/MessagePage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<MessagePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
