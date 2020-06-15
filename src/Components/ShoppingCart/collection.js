import React, { Component } from 'react';
import Counters from './counters';
import Navbar from './navbar';

class Collection  extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <Navbar />
                <main className ="containers">
                    <Counters/>
                </main>
            </React.Fragment>
         );
    }
}
 
export default Collection;