const configs = require('./config')

const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true
}
mongoose.connect('mongodb://yangjing:1225659856@127.0.0.1:27017/nodejs', options)

module.exports = mongoose
