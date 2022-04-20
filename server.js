const fs = require('fs');
const path = require('path');
const {animals} = require('./data/animals.json')
const express = require ('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({extend:true}));
// parse incoming JSON data
app.use(express.json());










app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});