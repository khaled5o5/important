const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const itemSchema = new Schema({
    name:String,
    brand: String,
    price: Number, 
    quantity: Number,
    isAvailable: Boolean
});  

const Item = mongoose.model("item",itemSchema);
module.exports = Item;  