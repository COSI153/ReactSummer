import React, { Component } from 'react';

class Navbar extends Component {
    
    styles = {
        fontSize : 20,
        fontWeight : 'bold'
    };
    render() { 
        return ( 
            <nav style={this.styles} className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">My Shopping Cart</a>
            </nav>
         );
    }
}
 
export default Navbar ;