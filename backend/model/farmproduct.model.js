const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmproductSchema = new Schema({
    name: {
    type:String,
    required: true,
    unique:true
    },
    description: {
    type:String,
    required: true
    },
    date: {
    type:Date
    }
    
},{
    timestamp: true,
});

const Farmproduct = mongoose.model('Farmproduct', farmproductSchema);

module.exports = Farmproduct;

