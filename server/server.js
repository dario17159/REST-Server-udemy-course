const express = require('express')
const mongoose = require('mongoose')
const app = express();
const colors = require('colors')
const bodyParser = require('body-parser')



require('./config/config')

//Body parser for transform data to json format of body
//parse aplucation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //parse aplication/json
app.use(bodyParser.json());

//Middleware for user's routes
app.use(require('./routes/usuario'))

//Mongoose's Settings 
mongoose.connect(process.env.URLDB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;

    console.log('Base de datos:', 'ONLINE'.blue);
});


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto:', `${process.env.PORT}`.blue);
})