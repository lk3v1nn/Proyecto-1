const express = require ('express')
const cors = require('cors');
const cookieParser = require('cookie-parser')
const rutasUsuario = require('./controllers/rutasUsuario')
const rutasProducto = require('./controllers/rutasProducto')
const rutasCarrito = require ('./controllers/rutasCarrito')
const rutasCompra = require('./controllers/rutasCompra')
const DB_UMG = require("./baseDeDatos");

const app = express();

app.use(cors({
    origin: 'https://proyecto-2-pi.vercel.app', // Reemplaza con la URL de tu frontend en Vercel
    credentials: true,
  }));

app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', 'https://proyecto-2-pi.vercel.app'); // Reemplaza con la URL de tu frontend en Vercel
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Set-Cookie');
  next();
});


app.use(express.json());
app.use(rutasUsuario);
app.use(rutasProducto);
app.use(rutasCarrito);
app.use(rutasCompra);

app.get('/', (req, res)=>{
    res.json({'su cookie': req.cookies});
    // res.cookie('cookie_name', 'cookie_value').send('esta respondiendo');
})

app.listen(8000, ()=>{
    console.log('Servidor iniciado');
})
