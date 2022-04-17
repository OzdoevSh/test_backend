const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
})

const Categories = mongoose.model('categories', schema);

module.exports = Categories;