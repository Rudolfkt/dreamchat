import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/home';
import Chat from './Pages/Chat/chat';
import Profile from './Pages/Profile/profile';
import Signup from './Pages/Signup/signup';
import Login from './Pages/Login/login';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const loading = false;
  const authenticated = false;

  useEffect(() => {
    console.log('loading:', loading);
    console.log('authenticated:', authenticated);
  }, [loading, authenticated]);

  const showToast = (type, message) => {
    switch (type) {
      case 0:
        toast.warning(message);
        break;
      case 1:
        toast.success(message);
        break;
      default:
        break;
    }
  };

  return (
    <Router>
      <ToastContainer autoClose={2000} hideProgressBar position={toast.POSITION.BOTTOM_CENTER} />
      <Routes>
        <Route path="/" element={<Home showToast={showToast} />} />
        <Route path="/Signup" element={<Signup showToast={showToast} />} />
        <Route path="/Login" element={<Login showToast={showToast} />} />
        <Route path="/Profile" element={<Profile showToast={showToast} />} />
        <Route path="/Chat" element={<Chat showToast={showToast} />} />
        {/* catch-all redirect to root */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;