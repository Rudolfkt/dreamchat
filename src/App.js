import React,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import Home from './Pages/Home/Home' 
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import {toast, ToastContainer} from 'react-toastify';


class App extends Component {

  
  showToast = (type, message) => {
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
  }


  render() {
    console.log('loading:', this.state.loading);
    console.log('authenticated:', this.state.authenticated);

    return(
  <Router>
    <ToastContainer
      autoClose={2000}
      hideProgressBar={true}
      position={toast.POSITION.BOTTOM_CENTER}
    />
      <Routes>
        <Route exact path="/" element={<Home showToast={this.showToast}/>} />
        <Route path="/Signup" element={<Signup showToast={this.showToast}/>} />
        <Route path="/Login" element={<Login showToast={this.showToast}/>} />
        <Route path="/Profile" element={<Profile showToast={this.showToast}/>} />
        <Route path="/Chat" element={<Chat showToast={this.showToast}/>} />
        {/* Use Navigate to handle redirect */}
        <Route path="*" element={<Navigate to="./" />} />
      </Routes>
    </Router>
  );
 }
}
export default App;