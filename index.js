const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const productsRoutes = require('./routes/products')


const PORT = 3005
const DB_CLUSTER = 'mongodb://localhost:27017'
const app = express() 
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(productsRoutes)


async function start(){
  try {
    await mongoose.connect(DB_CLUSTER, {
      useNewUrlParser: true,
    })
    app.listen(PORT, () => {
      console.log(`Server has been started`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()