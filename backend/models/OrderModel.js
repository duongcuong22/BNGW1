const mongoose = require('../config/Db');

const orderSchema = new mongoose.Schema({
    name: String,
    amount : Number,
    time: String,
    place: String,
    gender: String,
    address: String,
    date: Date,
    description: String,
    ads: String,
    totalPrice: Number,
    food: String
})

const OrderModel = mongoose.model('orders', orderSchema);

module.exports = OrderModel;