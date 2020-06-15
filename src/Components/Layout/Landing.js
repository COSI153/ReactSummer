import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import ProductList from '../ProductBoard/ProductList';
import ProductData from '../../tempdata';
import SectionCarousel from '../Product/SectionCarousel';
class Landing extends Component {
    render() {
        return (
            <>
            
            <div>
                
                <div className='container-fluid'>
             
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                   
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">FRUITS</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">VEGETABLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">DAIRY PRODUCT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MEAT&SEAFOOD</a>
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