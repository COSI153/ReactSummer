import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
// <Link className="nav-item nav-link active" to="addproduct"> Add products </Link>
import CustomInput from "../../elements/CustomInput/CustomInput.js";

import Button from "../../elements/CustomButtons/Button.js";
import Search from "@material-ui/icons/Search";

export default class Header extends Component {
   
  render() {
   
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Farm Cart</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
              <Link className="nav-item nav-link active" to="addproduct"> Add products </Link>
              <Link className="nav-item nav-link" to="#">Shopping cart</Link>
              <Link className="nav-item nav-link" to="login">Login</Link>
            </div>
          </div>
          
          <div >
             <CustomInput
                    info
                    inputProps={{
                      placeholder: "Search",
                      inputProps: {
                        "aria-label": "Search",
                      }
                    }}
                />
                  <Button color="info" justIcon round>
                    <Search />
                  </Button>
                </div>
        </nav>        
      </div>
    );
  }
}
