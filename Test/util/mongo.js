const mongoose = require('mongoose')
// const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://raymond:12Pw2DmxLelYL5GB@cluster0.3hgdh.mongodb.net/raymond?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
  })
  return mongoose
}