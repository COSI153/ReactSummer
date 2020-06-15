import React, { Component } from 'react'

class AddProduct extends Component {
    render() {
        return (
            <div>
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Create Product form</h5>
                                <hr />
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg " placeholder="Product Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Unique Product ID"
                                            disabled />
                                    </div>
                                
                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg"
                                         placeholder="Product Description"
                                        
                                         ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg" placeholder="Product Location"></textarea>
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

export default AddProduct;
