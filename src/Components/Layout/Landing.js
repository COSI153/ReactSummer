import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import ProductList from '../ProductBoard/ProductList';
import ProductData from '../../tempdata';
class Landing extends Component {
    render() {
        return (
            <>
            <div>
               <img src={require('../media/logo.png')} alt="Example" width="300" height="300"></img>
           
                <img src={require('../media/farm02.png')} alt="Example" width="1200" height="300"></img>
           
                <br />
                <p><br /></p><p><br /></p>
                <div className='container-fluid'>
             
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                   
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">FRUITS</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">VEGETABLES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">DAIRY PRODUCT</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">MEAT&SEAFOOD</a>
                        </li>
                       
                        </ul>
                    </div>
                 </nav>
                <ProductList data={ProductData} />


                </div>
            </div>
            </>
            
         
        )
    }
}


export default Landing;