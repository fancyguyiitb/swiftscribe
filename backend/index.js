const connectToMongo = require('./db');

connectToMongo();

const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

//middlewares
app.use(cors());
app.use(express.json());

//available routes
app.use('/api/auth', require('./routes/Auth'))
app.use('/api/blogs', require('./routes/Blogs'))

app.listen(port, () => {
  console.log(`SwiftScribe listening on port ${port}`)
})
//juju
