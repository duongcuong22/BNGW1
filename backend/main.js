const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')

const apiUser = require('./api/User')
const apiOrder = require('./api/Order')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', apiUser)
app.use('/api', apiOrder)




app.listen(port, () => {
    console.log('Listening * port');
})