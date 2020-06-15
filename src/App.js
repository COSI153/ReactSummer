import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Register from './Components/UserManagement/Register';
import Login from './Components/UserManagement/Login';
import FarmerLogin from './Components/UserManagement/FarmerLogin';
import Landing from './Components/Layout/Landing';
import CreateProduct from './Components/Product/CreateProduct';
import AddProduct from './Components/Product/AddProduct';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Components/Layout/Header';
import './App.css';
import Counter from './Components/ShoppingCart/counter';
import Counters from './Components/ShoppingCart/counters';
import Navbar from './Components/ShoppingCart/navbar';
import Collection from './Components/ShoppingCart/collection';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

        <br />
        <Route exact path = "/" component={Landing}/>
        <Route exact path = "/addproduct">
          <AddProduct data={[{name:"milk",description:"dairy"}]}/>
        </Route>

        <Route exact path = "/register" component={Register}/>
        <Route exact path = "/login" component={Login}/>
        <Route exact path = "/farmerlogin" component={FarmerLogin}/>
        <Route exact path = "/collection" component={Collection}/>
     </div>
     </Router>

);

}

export default App;
