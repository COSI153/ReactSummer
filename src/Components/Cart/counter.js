import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
    }

    styles = {
        fontSize : 13,
        fontWeight : 'bold'
    };

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    };

    render() { 
        return( 
            <div>
                <span style={this.styles} className="badge badge-primary m-2">{this.state.count}</span>
                <button style={this.styles} onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
            </div> 
        );  
    }




} 
 
export default Counter;