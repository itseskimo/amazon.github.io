import React from 'react';
import './App.css';
import Login from './Pages/auth/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './Pages/auth/Register';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Checkout/Checkout';
import { Provider } from 'react-redux';
import store from './Redux/store';


function App() {
  return (
      <div className="app">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={[<Header/>,<Home/>,<Footer/>]} />
          <Route path="/login" element={[<Login/>]} />
          <Route path="/Register" element={[<Register/>]} />
          <Route path="/checkout" element={[<Header/>,<Checkout/>]} />
        </Routes>
        </Router>
      </Provider>
      </div>
    
  );
}

export default App;