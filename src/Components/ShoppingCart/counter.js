import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.value
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
        this.setState({value: this.state.value+1});
    };

    handleDecrement = () =>{
        this.setState({value: this.state.value-1});
    }

    render() { 
        return( 
            <div>
                {this.props.children}
                <button style={this.styles} onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
                <span style={this.styleNumber} className="badge badge-primary m-3">{this.state.value}</span>
                <button style={this.styles} onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
                <button style={this.styles} onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div> 
        );  
    }

} 
 
export default Counter;