import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Feedback from './components/FeedBack/Feedback.jsx';
import Tutorials from './components/Tutorials/Tutorials.jsx';
import AIChat from './components/AiChat/AiChat.jsx';
import Home from './components/HomePage/Home.jsx';
import Setting from './components/Setting/Setting.jsx';
import { useSettings } from './context/context.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  const { fontSize } = useSettings();

  useEffect(() => {
    const sizeMap = {
      small: '14px',
      medium: '16px',
      large: '18px',
      xlarge: '20px',
    };
    document.documentElement.style.setProperty('--font-size', sizeMap[fontSize]);
  }, [fontSize]);
  return (
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
