const express = require('express');
import dotenv from 'dotenv';

const app = express();

app.get('/', (req, res) => {
    res.send('Home Page')
})

/**
 * @param {{PORT:string}} data
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT);

