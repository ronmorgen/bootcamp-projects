const mongoose = require('mongoose')
const Schema = mongoose.Schema

const operationSchema = new Schema ({
    amount: Number,
    vendor: String,
    category: String
})

const Operation = mongoose.model("Operation", operationSchema)

module.exports = Operation