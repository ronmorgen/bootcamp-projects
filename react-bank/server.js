const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/operations")
const bodyParser = require('body-parser')
const Operation = require('./Operation.js')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.get('/transactions', (req,res)=>{
    Operation.find({}, function(err,data){
        res.send(data)
    })
})

app.post('/transaction', (req,res)=>{
    const transaction = req.body
    const newOperation = new Operation({
        amount: transaction.amount,
        vendor: transaction.vendor,
        category: transaction.category
    })
    newOperation.save()
    res.end()
})


const port = 5000
app.listen(port, function () { 
    console.log('Running on ' + port) 
})

