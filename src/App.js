import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import SignUpPage from './Components/UserManagement/SignUpPage';
import Login from './Components/UserManagement/Login';
import LoginPage from './Components/UserManagement/LoginPage';
import FarmerLogin from './Components/UserManagement/FarmerLogin';
import Landing from './Components/Layout/Landing';
import CreateProduct from './Components/Product/CreateProduct';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Layout/Header';
import LandingPage from './Components/Layout/LandingPage.js';
import './App.css';
// import Counter from './Components/ShoppingCart/counter';
// import Counters from './Components/ShoppingCart/counters';
// import Navbar from './Components/ShoppingCart/navbar';
import Collection from './Components/ShoppingCart/collection';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
        
        <Route exact path = "/" component={LandingPage}/>
        <Route exact path = "/addproduct" component={CreateProduct}/>
        <Route exact path = "/signup" component={SignUpPage}/>
        <Route exact path = "/login" component={LoginPage}/>
       
        <Route exact path = "/farmerlogin" component={FarmerLogin}/>
        <Route exact path = "/collection" component={Collection}/>
     </div>
     </Router>

);

}

export default App;
