const route = require('express').Router()
const UserModel = require('../models/UserModel')
const jwt = require('jsonwebtoken')

route.post('/register', async (req, res, next) => {
    let name = req.body.name
    let password = req.body.password
    let checkLogin = await UserModel.find({name: name})
    if(checkLogin.length === 0) {
        let data = await UserModel.create({ name: name, password: password })
        if (data) {
            res.json({
                data: data,
                message: 'success'
            })
        } else {
            res.json({ message: 'create fail' })
        }
    } else {
        res.json({
            message: 'Fail(register)'
        })
    }
    
})

route.post('/login', (req, res, next) => {
    let name = req.body.name
    let password = req.body.password
    UserModel.find({ name }).then(data => {
        console.log(data);
        if (password !== data[0].password) {
            res.json({ message: 'wrong password' })
        } else {
            let token = jwt.sign({ name: data[0].name, type: data[0].type }, 'nodemy', { expiresIn: '1d' })
            res.json({ message: 'success', token: token, name: data[0].name, type: data[0].type })
        }

    }).catch(err => {
        console.log(err);
        res.json({ message: 'fail login' })
    })

})

module.exports = route;