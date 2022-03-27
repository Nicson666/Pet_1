const path = require('path');

const url = require('url');

const fs = require('fs'); // получаем модуль Express


const express = require("express"); // создаем приложение


const app = express();
app.get('/', function (req, res) {
  let filePath = "index.html";
  fs.readFile(filePath, function (error, data) {
    if (error) {
      res.statusCode = 404;
      res.end("Resourse not found!");
    } else {
      res.end(data);
    }
  });
});
app.listen(3000);
