const express = require ('express')
const cookieParser = require('cookie-parser')
const rutasUsuario = require('./controllers/rutasUsuario')
const rutasProducto = require('./controllers/rutasProducto')
const rutasCarrito = require ('./controllers/rutasCarrito')
const rutasCompra = require('./controllers/rutasCompra')
const DB_UMG = require("./baseDeDatos");

const app = express();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://proyecto-2-pi.vercel.app');
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-access-token");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(rutasUsuario);
app.use(rutasProducto);
app.use(rutasCarrito);
app.use(rutasCompra);

app.get('/', (req, res)=>{
    res.json('su cookie': req.cookies);
    // res.cookie('cookie_name', 'cookie_value').send('esta respondiendo');
})

app.listen(8000, ()=>{
    console.log('Servidor iniciado');
})
