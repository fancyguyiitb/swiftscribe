const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

// app.use(cors());
// app.use(express.json());


app.listen(port, () => {
  console.log(`SwiftScribe listening on port ${port}`)
})
