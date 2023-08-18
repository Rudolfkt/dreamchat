import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom'; // Import Navigate
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
import Profile from './Pages/Profile/Profile';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import firebase from './Services/firebase';
import { toast, ToastContainer } from 'react-toastify';

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

  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    return this.state.loading === true ? (
      <div className="spinner-boarder text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
) : (
  <Router>
  <ToastContainer
    autoClose={2000}
    hideProgressBar={true}
    position={toast.POSITION.BOTTOM_CENTER}
  />
  <Route exact path="/" element={<Home />} />
  <Route path="/login" element={<Login showToast={this.showToast} />} />
  <Route path="/profile" element={<Profile showToast={this.showToast} />} />
  <Route path="/signup" element={<Signup showToast={this.showToast} />} />
  <Route path="/chat" element={<Chat showToast={this.showToast} />} />
  {/* Use Navigate to handle redirect */}
  <Route path="*" element={<Navigate to="/" />} />
</Router>
);
}
}
export default App;