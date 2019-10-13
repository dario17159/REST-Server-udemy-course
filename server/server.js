const express = require('express')
const app = express();
const colors = require('colors')
const bodyParser = require('body-parser')

require('./config/config')

//Body parser for transform data to json format of body
//parse aplucation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    //parse aplication/json
app.use(bodyParser.json());




app.get('/usuario', (req, res) => {
    res.json('getUsuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'El nombre es necesario'
        });
    } else {

        res.status(201).json(body);
    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('deleteUsuario');
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto: `, `${process.env.PORT}`.blue);
})