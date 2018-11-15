const mongoose = require('../qcloud')

module.exports = async (ctx) => {
  let schema = new mongoose.Schema({ productName: 'string', salePrice: 'number', productImage: 'string'})
  const Goods = mongoose.model('goods', schema)
  let list = await Goods.find({})
  ctx.state.data = {
      array: Goods
  }
}
