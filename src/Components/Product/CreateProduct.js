import React, { Component } from 'react'
import axios from 'axios'
class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: ''
        }
    }
    componentDidMount() {
        this.setState({
            user: ['']
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();

        const product = {
            name: this.state.name,
            description: this.state.description
        }
        console.log(product);

        // send backend call( to local host)
        axios.post('http://localhost:5000/farmproducts/add', product)
         .then(res => console.log(res.data));

         window.location = '/';
    }
    
    render() {
        return (
            <div>
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Create Product form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg "
                                     placeholder="Product Name" 
                                     value={this.state.name}
                                     onChange={this.onChangeName}/>
                                </div>
                             
                            
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Product Description"
                                     value={this.state.description}
                                     onChange={this.onChangeDescription}
                                    ></textarea>
                                </div>
                               
                                <h6>Produced Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" name="start_date" />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}

export default CreateProduct;
