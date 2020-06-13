import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
    }

    styles = {
        fontSize : 20,
        fontWeight : 'bold'
    };

    styleNumber = {
        fontSize: 25,
        fontWeight : 'bold'
    };

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    };

    handleDecrement = () =>{
        this.setState({count: this.state.count-1});
    }

    render() { 
        return( 
            <div>
                <button style={this.styles} onClick={this.handleDecrement} className="btn btn-secondary btn-sm"> - </button>
                <span style={this.styleNumber} className="badge badge-primary m-3">{this.state.count}</span>
                <button style={this.styles} onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> + </button>
            </div> 
        );  
    }




} 
 
export default Counter;