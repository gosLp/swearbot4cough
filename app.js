const { Router } = require('express');
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/cough.html'));
});

app.listen(port, () =>{
    console.log("Listening at port : 3000");
});