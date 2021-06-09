const mongoose = require('../config/Db');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    type: {
        type: Number,
        default: 3
    },
    // dateOfBirth: Date,
    // idOrder: {
    //     type: [],
    //     ref: 'orders'
    // }
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

// UserModel.create({ name: 'admin', password: '12345678' }).then(data => { console.log("ok"); })