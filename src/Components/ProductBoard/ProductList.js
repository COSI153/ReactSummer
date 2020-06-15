import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.css';
import axios from 'axios';

const ProductList = ({data}) => {
    
    return (
     <div className='flex-container'>
       {data.map(product => (
         <div key={product.id} className='flex-container-element'>
           <Product product={product} />
         </div>
       ))}
     </div>
   );
  }

ProductList.propTypes = {
    data: PropTypes.array.isRequired,
};


export default ProductList;