var mongoose = require('mongoose')
var MovieSchema = require('../schemas/model')
var Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie