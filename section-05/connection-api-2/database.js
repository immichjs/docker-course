const mongoose = require('mongoose')

mongoose.connect('mongodb://db:27017/connection-api')
mongoose.Promise = global.Promise

module.exports = mongoose
