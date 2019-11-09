const express = require('express');
const server = express();
const path = require('path');
const db = require('./db');
const PORT = 3000;
const create = db().create;

console.log(create);




server.get('/', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
server.get('/api/products', (req,res,next) => {
    res.sendFile(path.join(__dirname, 'products.json'));
});


server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})