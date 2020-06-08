import React, { Component } from 'react'
import PropTypes from 'prop-types';

const Product = ({ product }) => {
  return (
    <div className='card'>
      <img src={require('../media/image0'+`${product.id}`+'.png')} className='card-img-top' alt={product.img.alt} />
      <div className='card-body'>
        <h5 className='card-title'>{`${product.name}`}</h5>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'><h6>{`Description: ${product.description}`}</h6></li>
      
      </ul>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product;