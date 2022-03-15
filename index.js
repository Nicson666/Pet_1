const path = require('path')
const  url = require('url')

// получаем модуль Express
const express = require("express");
// создаем приложение
const app = express();


app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, "index.html"))
    res.end();
})

app.listen(3000);

