const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();
const cors = require('cors')

app.use(cors());
app.get('/' , (req, res) =>{
    res.send('hello world');
});

module.exports = app;