const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo-container:27018/host')
mongoose.Promise = global.Promise

module.exports = mongoose
