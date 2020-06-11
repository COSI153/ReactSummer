import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <div>
      {/*
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Farm Cart</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Addproduct</a>
              <a class="nav-item nav-link" href="#">Pricing</a>
            </div>
          </div>
        </nav>
      */}

        <Link to="/"> Home &nbsp;&nbsp;  </Link>
        <Link to="#"> About &nbsp;&nbsp;  </Link>
        <Link to="addproduct"> Add products &nbsp;&nbsp;  </Link>
        <Link to="#"> Shopping cart &nbsp;&nbsp;  </Link>
        <Link to="login">  Farmer login </Link>

      </div>
    );
  }
}
