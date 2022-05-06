'use stritct'

require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const { ejecutarJob } = require('./job/index');



//Crear el servidor de express
const app = express();

//confi CORS midleware
app.use(cors());

//Lectura y parseo del body antes de las rutas

app.use(express.json());


//Base de datos
dbConnection();

//job
ejecutarJob();

//directorio publico
app.use(express.static('public'));

//Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/opVuelo', require('./routes/operadorVuelo'));
app.use('/api/detOperador', require('./routes/detOperadores'));
app.use('/api/bitacoraVuelo', require('./routes/bitacoraVuelo'));
app.use('/api/bitacoraVueloReal', require('./routes/bitacoraVueloReal'));
app.use('/api/combustible', require('./routes/combustible'));
app.use('/api/upload', require('./routes/uploads'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/divisas', require('./routes/divisas'));
app.use('/api/destinos', require('./routes/destinos'));
app.use('/api/sumary', require('./routes/sumary'));
app.use('/api/sumaryFinal', require('./routes/sumaryFinal'));

app.use('/api/precio', require('./routes/precioAterrizajeMex'));
app.use('/api/precio', require('./routes/precioPlataforma'));
app.use('/api/precio', require('./routes/preciosCombustible'));

app.use('/api/helper', require('./routes/helper'));



app.listen(process.env.PORT, () => {
    console.log('Servidor correiendo en puerto ' + process.env.PORT);
});