const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmproductSchema = new Schema({
    name: {
    type:String,
    reuqired: true,
    unique:true
    },
    description: {
    type:String,
    reuqired: true
    }
},{
    timestamp: true,
});

const Farmproduct = mongoose.model('Farmproduct', farmproductSchema);

module.exports = Farmproduct;

