const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  regions: [{
    product: {
      _id: {
        type: Schema.Types.ObjectId,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      category:{ type: Schema.Types.ObjectId, ref: 'categories', required: true }
    },
    
  }]

})

const Products = mongoose.model('products', schema);

module.exports = Products;