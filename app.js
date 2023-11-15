require("dotenv").config();
const express = require('express');
const path = require ('path');

const app = express();
app.use(express.static('public'));

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
  });

  app.get('/register', (req, res) => {
     res.sendFile(__dirname + "/views/register.html");
  });

  app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
 });

const publicPath = path.resolve (__dirname, './public');
app.use( express.static(publicPath));

app.listen(port, () =>{
    console.log(
      `Servidor corriendo en el puerto ${port}`);
})