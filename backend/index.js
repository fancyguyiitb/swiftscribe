const express = require('express');
//adding cors to prevent cors error
const cors = require('cors');

const app = express();

app.use(cors());
//using middleware to process request
app.use(express.json());

const port = 4000;

app.post('/register', (req, res)=>{
    const {username, password} = req.body;
    res.json({requestData:{username, password}});
});

app.listen(port);
console.log(`Server listening on port ${port}`);
//juarez2004
//mongodb+srv://technicalpurush:juarez2004@cluster0.9absckb.mongodb.net/?retryWrites=true&w=majority