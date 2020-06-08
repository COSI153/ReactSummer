import React, { Component } from 'react'

class CreateProduct extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        this.setState({
            user: ['test user']
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
         window.location = '/';
    }
    
    render() {
        return (
            <div>
            <div class="project">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 m-auto">
                            <h5 class="display-4 text-center">Create Product form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg " placeholder="Product Name" />
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="Unique Product ID"
                                        disabled />
                                </div>
                            
                                <div class="form-group">
                                    <textarea class="form-control form-control-lg" placeholder="Product Description"></textarea>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control form-control-lg" placeholder="Product Location"></textarea>
                                </div>
                                <h6>Produced Date</h6>
                                <div class="form-group">
                                    <input type="date" class="form-control form-control-lg" name="start_date" />
                                </div>
                            

                                <input type="submit" class="btn btn-primary btn-block mt-4" />
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
